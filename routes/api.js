var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");


router.use(bodyParser.json());

// homepage
router.get("/", (req, res) => {
    res.send({ message: 'Welcome to My Health App API Server. Try /visits' });
});

//Login
router.post("/login", async (req, res) => {
    let {username, password} = req.body;

    try {
        let result = await db(`SELECT * FROM users where username = '${username}' and password = '${password}'`);
        //let result = await db('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
        let user = result.data;
        if (user.length === 0) {
            res.status(404).send({ error: 'User not found' });
        }
        else {
            res.send(user[0]);
        }
    }catch (err) {
        res.status(500).send({error: err.message});
    }
})

//GET all visits
router.get("/visits", async (req, res) => {
    try {
        let result = await db('SELECT hv.visit_date, hv.reason, hv.visit_notes, u.username, h.hospital_name, h.doctor_name FROM users AS u INNER JOIN hospitalVisit as hv ON hv.userID = u.id INNER JOIN hospital as h ON hv.hospitalID = h.hid');
        let visits = result.data;
        res.send(visits);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
});

//GET visits for user
router.get("/visits/:id", async (req, res) => {
    let userId = req.params.id;

    try {
        let result = await db(`SELECT hv.visit_date, hv.reason, hv.visit_notes, u.username, h.hospital_name, h.doctor_name FROM users AS u INNER JOIN hospitalVisit as hv ON hv.userID = u.id INNER JOIN hospital as h ON hv.hospitalID = h.hid WHERE hv.userID = ${userId}`);
        let userVisits = result.data;
        if (userVisits.length === 0) {
            res.status(404).send({ error: 'User Visits not found' });
        }
        else {
            res.send(userVisits);
        }
    } catch (err) {
        res.status(500).send({error: err.message});
    }
});

//GET all hospitals
router.get("/hospitals", async (req, res) => {
    try {
        let result = await db('SELECT * FROM hospital');
        let hospitals = result.data;
        res.send(hospitals);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
});


// POST new visit
router.post("/visit", async (req, res) => {
    let { visit_date, reason, visit_notes, userID, hospitalID } = req.body;

    try {
        let sql =`
            INSERT INTO hospitalVisit (visit_date, reason, visit_notes, userID, hospitalID)
            VALUES ('${visit_date}','${reason}','${visit_notes}','${userID}', '${hospitalID}')
        `;
        await db(sql);

        // return all visits
        let result = await db('SELECT * FROM hospitalVisit');
        let visits = result.data;
        res.status(201).send(visits);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});


module.exports = router;
