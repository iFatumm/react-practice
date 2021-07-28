import {useEffect, useState} from "react";
import {getUsers, getUser} from "./services/api";
import Users from "./components/users/Users";
import UserDetails from "./components/user.details/UserDetails";

export default function App() {

  const [users,setUsers] = useState([]);
  const [userDetails,setUserDetails] = useState(null);

  useEffect(()=>{
    getUsers().then(response => {
      setUsers(response.data)
    })
  },[]);

  function select(id) {
      getUser(id).then(({data}) => setUserDetails(data))
  }
    return (
        <div>
        <Users items={users} select={select}/>
            <hr/>
        {
          userDetails && <UserDetails details={userDetails}/>
        }
        </div>
    );
}