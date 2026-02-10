import axios from "axios"
import { useState } from "react";
import { Link } from "react-router-dom";
function Form(){
   const [name,setName]=useState("");
const [sirname,setSirname]=useState("");
const [email,setEmail]=useState("");
  async function handlesubmit(e){
    e.preventDefault();
     await axios.post("http://localhost:5000/submit",{name,sirname,email}).then((res)=>{if(res.data.response==true){
        alert("data submit");
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
export default Form;