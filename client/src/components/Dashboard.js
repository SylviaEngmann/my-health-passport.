import React , { useEffect, useState }from 'react';
import  '../App.css';
import {Row, Col, Modal} from 'react-bootstrap';
import UserVisitsList from './UserVisitsList';

import SideNav from './SideNav';
import createHistory from 'history/createBrowserHistory';
import TopNav from './TopNav';
import Vitals from './Vitals';

const history = createHistory({forceRefresh:true});

function Dashboard() {

  let [visits, setVisits] = useState([]);
  let [visitDetail, setVisitDetail] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(() => {
    getUserVisits();
  }, []);


  async function getUserVisits() {
    const loggedInUser = localStorage.getItem('user');
    const userId = JSON.parse(loggedInUser).id;

    try {
      let response = await fetch(`/visits/${userId}`);
      if (response.ok) {
        let visits = await response.json();
        setVisits(visits);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  }

  let userVisit;

  function visitDetails(visit_id){
    console.log("View Details");
    userVisit = visits.find(v => v.visit_id === visit_id);
    console.log(userVisit);
    setVisitDetail(userVisit);
    handleShow();
  }
  
    return (
      <div>
        <TopNav />
            <SideNav />
            <Vitals />
          
        
          <UserVisitsList
          visits={visits}
          visitDetailsCb={(visit_id) => visitDetails(visit_id)}
          />

          <Modal show={show} onHide={handleClose} className="viewVisitDetails">
            <Modal.Body>
              <p>{visitDetail.visit_date}</p>
              <h2>{visitDetail.reason}</h2>
              <p>{visitDetail.doctor_name}</p>
              <p>{visitDetail.visit_notes}</p>
            </Modal.Body>
          </Modal>
      </div>
    );
  }
  
  export default Dashboard;
  