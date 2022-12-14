import React, { useEffect,useState} from 'react'
import{Link,useParams} from "react-router-dom"
import axios from 'axios';

const Viewuser = () => {

    const[user,setUser] = useState({
        id:"",
        name:"",
        email:""
      });

      const {id} = useParams();

      useEffect(() => {
        loadUser();
      }, []);

      const loadUser = async () => {
        const res = await axios.get(`http://localhost:3333/users/${id}`);
        setUser(res.data);
      };
    return (
      <div className='container py-4'>
        <Link className="btn btn-dark" to="/">
            Back to Home
        </Link>
        <h1 className='display-4'>User Id:{id}</h1>
        <hr/>
        <ul className='list-group w-50'>
            <li className='list-group-item'>Id: {user.id}</li>
            <li className='list-group-item'>Name: {user.name}</li>
            <li className='list-group-item'>Email: {user.email}</li>
        </ul>
      </div>
    )
}

export default Viewuser;