import React, { useEffect, useState } from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({forceRefresh:true});

function TopNav(props) {

    let [user, setUser] = useState({});
  
    useEffect(() => {
      welcome();
    }, []);
  
    function welcome(){
      const loggedInUser = localStorage.getItem('user');
      const activeUser = JSON.parse(loggedInUser);
      setUser(activeUser);
    }

    function logout(){
        console.log("Logged out");
        localStorage.clear();
        history.push('/login');
      }


    return (
            <div className="userActions">
                <p className="welcome">Welcome,{' '}{user.firstname}</p>
                <PersonFill className="logoutButton" onClick={logout}/>
                    
            </div>
                
                
           
    )
}

export default TopNav;