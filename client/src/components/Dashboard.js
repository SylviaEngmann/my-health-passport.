import React , { useEffect, useState }from 'react';
import  '../App.css';
import UserVisitsList from './UserVisitsList';
import UserVisitsDetailView from './UserVisitsDetailView';
import Nav from './Nav';
import { PersonFill } from 'react-bootstrap-icons';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({forceRefresh:true});

function Dashboard() {

  let [visits, setVisits] = useState([]);
  let [user, setUser] = useState({});
  
  useEffect(() => {
    getUserVisits();
    welcome();
  }, []);

  function welcome(){
    const loggedInUser = localStorage.getItem('user');
    // const firstName = JSON.parse(user).firstname;
    // console.log(firstName);
    const activeUser = JSON.parse(loggedInUser);
    setUser(activeUser);
    //console.log(activeUser.firstname);
  }

  function logout(){
    console.log("Logged out");
    localStorage.clear();
    history.push('/login');
  }

  async function getUserVisits() {
    const loggedInUser = localStorage.getItem('user');
    const userId = JSON.parse(loggedInUser).id;

    try {
      let response = await fetch(`http://localhost:5000/visits/${userId}`);
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
  }
  
    return (
      <div>
   
          <p>Welcome,{user.firstname} </p>
          <p className="welcome">Welcome,</p>
          <PersonFill className="logoutButton" onClick={logout}/>

        <Nav />
          <UserVisitsList
          visits={visits}
          visitDetailsCb={(visit_id) => visitDetails(visit_id)}
          />
          <UserVisitsDetailView userVisit={userVisit}/>
      </div>
    );
  }
  
  export default Dashboard;
  