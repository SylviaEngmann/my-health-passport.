
DROP TABLE IF EXISTS hospitalVisit;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS hospital;


CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(10) NOT NULL,
    password VARCHAR(50) NOT NULL,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    dob DATE NOT NULL,
    address VARCHAR(50) NULL,
    phonenumber VARCHAR(20) NOT NULL
);

CREATE TABLE hospital (
    hid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    hospital_name VARCHAR(20) NOT NULL,
    doctor_name VARCHAR(20) NOT NULL
);

CREATE TABLE hospitalVisit (
    visit_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    visit_date DATETIME NOT NULL,
    reason VARCHAR(20) NOT NULL,
    visit_notes VARCHAR(100) NULL,
    userID INT NOT NULL,
    hospitalID INT NOT NULL,
    FOREIGN KEY(userID) REFERENCES users(id),
    FOREIGN KEY(hospitalID) REFERENCES hospital(hid)
);

-- Insert some test data

INSERT INTO users (username, password, firstname, lastname, dob, address, phonenumber)
VALUES
    ('akissi','akissi1','Abena', 'Kissi', '1993-02-21', 'Adjiringanor', '+233278275106'),
    ('esam','esam1','Esi', 'Sam', '1975-06-21', 'Osu', '+233298625106');


INSERT INTO hospital (hospital_name, doctor_name)
VALUES
    ('Lister Hospital', 'Dr. Asare'),
    ('Korle Bu', 'Dr. Frimpong');

INSERT INTO hospitalVisit (visit_date, reason, visit_notes, userID, hospitalID)
VALUES
    ('2009-12-03 12:30:20', 'General Checkup', 'The patient is generally well.', 1, 1),
    ('2020-01-03 15:35:55', 'Surgery', 'Appendix removal.', 1, 2);