import axios from "axios"
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
function Update(){
   const [name,setName]=useState("");
const [sirname,setSirname]=useState("");
const [email,setEmail]=useState("");
  var location =useLocation();
  var id=location.state.id;
  async function handlesubmit(e){
    e.preventDefault();
     await axios.put(`http://localhost:5000/update/${id}`,{name,sirname,email}).then((res)=>{if(res.data.response==true){
        alert("data update");
     }})
  }

    return(
    <>
      <div>
        <form onSubmit={handlesubmit}>
    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
  <input type="text" value={sirname} onChange={(e)=>{setSirname(e.target.value)}}></input>
   <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <button type="submit">Submit</button>
        </form>
      </div>
     <Link to="/users">users</Link>
    </>
    )
}
export default Update;