import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3333/users");
    setUsers(result.data);
  };

  const deleteUser = async id =>{
    await axios.delete(`http://localhost:3333/users/${id}`);
    loadUser();
  }
  return (
    <div className="container">
      <div>
        <marquee
          className="pull-center"
          behavior="scroll"
          direction="left"
          style={{ color: "#000066" }}
        >
          <h5>
            <strong>Welcome to Indian Railways!!!</strong>
          </h5>
        </marquee>
      </div>
      <br />
      <div>
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index)=>(
                <tr>
                    <th scope="row">{index+1}</th>
                    <td scope="row">{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link className="btn btn-primary m-1" to={`/view/${user.id}`}><i className="fas fa-eye"></i></Link>
                        <Link className="btn btn-light m-1" to={`/edit/${user.id}`}><i className="fa-solid fa-pencil"></i></Link>
                        <Link className="btn btn-danger m-1" onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash"></i></Link>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
