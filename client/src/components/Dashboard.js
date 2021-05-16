import React , { useEffect, useState }from 'react';
import  '../App.css';
import UserVisitsList from './UserVisitsList';



function Dashboard() {

  let [visits, setVisits] = useState([]);
  
  useEffect(() => {
    getVisits();
  }, []);

  async function getVisits() {
    try {
      let response = await fetch('http://localhost:5000/visits');
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

  async function visitDetails(visit_id){

    try {
      let response = await fetch(`http://localhost:5000/visits/${visit_id}`);
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
  
    return (
      <div>
          <UserVisitsList
          visits={visits}
          visitDetailsCb={(visit_id) => visitDetails(visit_id)}
          />
      </div>
    );
  }
  
  export default Dashboard;
  