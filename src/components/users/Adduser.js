import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

  const Adduser = () => {
    let navigate = useNavigate();
    const[user,setUser] = useState({
      id:"",
      name:"",
      email:""
    });


    const {id,name,email} = user;

    const onInputChange = e =>{
      setUser({user,[e.target.name]:e.target.value});
    }
  
    const onSubmit = async e=>{
      e.preventDefault();
      console.log("Result:",user);
      await axios.post("http://localhost:3333/users",user);
      navigate("/");
    }
        return (
    <div class="h-20 h-custom">
    <div class="container py-5 h-20">
    <div class="row d-flex justify-content-center align-items-center h-20">
    <div class="col-lg-8 col-xl-6">
        <div class="card rounded-3"  style={{backgroundColor:"#f0f8ff"}}>
        <center>  
            <div className="card-body p-4 p-md-5">
            <form onSubmit={(e) => onSubmit(e)}>
                <div>
                    <h3 style={{color:"#000066"}}><strong>Add User</strong></h3>
                </div>
                <br/>
                <div className="form-group" style={{width:300}}>
                    <input type="text" className="form-control" placeholder="Enter Id" value={id}
                    onChange={(e) => onInputChange(e) }/>
                </div>
                <div className="form-group" style={{width:300}}>
                    <input type="text" className="form-control" placeholder="Enter Name" value={name}
                    onChange={(e) => onInputChange(e) }/>
                </div>
                <div className="form-group" style={{width:300}}>
                    <input type="text" className="form-control" placeholder="Enter Email" value={email}
                    onChange={(e) => onInputChange(e) } />
                </div>

                 {/* <div className="form-group" style={{width:300}}>
                    <input type="text" className="form-control" placeholder="Enter Gender" 
                    onChange={(e) => this.handleChange({ gender: e.target.value })} />
                    <p style={{color:"red" }}>{this.state.genderError}</p>
                </div>  */}

                <br/>
                <button type="submit" className="btn btn-dark btn-lg btn-block" 
                 style={{backgroundColor:"#000066"}} >Add User</button><br/>
            </form>
            </div>
            </center>
        </div>
        </div>
        </div>
        </div>
        </div>
        );
   }

   export default Adduser;