import React , { useEffect, useState }from 'react';
import  '../App.css';
import UserVisitsList from './UserVisitsList';
import UserVisitsDetailView from './UserVisitsDetailView';
import Nav from './Nav';



function Dashboard() {

  let [visits, setVisits] = useState([]);
  const [user, setUser] = useState();
  
  useEffect(() => {
    getVisits();
    welcome();
  }, []);

  async function welcome(){
    const loggedInUser = localStorage.getItem('user');
    // const firstName = JSON.parse(user).firstname;
    // console.log(firstName);
    const activeUser = JSON.parse(loggedInUser);
    setUser(activeUser);
  }

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
        <div className="row">
          {/* <p>Welcome,{user.firstName} </p> */}
        </div>
        <Nav />
          <UserVisitsList
          visits={visits}
          visitDetailsCb={(visit_id) => visitDetails(visit_id)}
          />
          {/* <UserVisitsDetailView /> */}
      </div>
    );
  }
  
  export default Dashboard;
  