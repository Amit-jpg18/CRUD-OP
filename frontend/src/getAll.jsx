import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Users(){
    const [record,setRecord]=useState([]);
    var navigate =useNavigate();
     useEffect(()=>{ 
        
        axios.get("http://localhost:5000/get").then((res)=>{if(res.data.response==true){
              setRecord(res.data.result);
     }})},[]);
     async function  handleDelete(id){
           await  axios.delete(`http://localhost:5000/delete/${id}`).then((res)=>{if(res.data.response==true){
               alert("delete")
               setRecord(record.filter((e)=>{ return id!=e.id}))
     }
    })
} 

 function handleupdate(id){
    navigate("/update",{state:{id:id}})
 }
       
    return(
    <> 
      <table>
        <thead>
            <tr>
                <th>name</th>
                    <th> email</th>
                        <th> sirname</th>
                            <th> update</th>
                              <th> delte</th>
            </tr>
        </thead>
        <tbody>
         {record.map((e)=>(
            <tr key={e.key}>
                <td>{e.name}</td>
                 <td>{e.sirname}</td>
                  <td>{e.email}</td>
                  <td> <button onClick={()=>{handleDelete(e.id)}}> delete</button></td>
                     <td> <button onClick={()=>{handleupdate(e.id)}}> update</button></td>
            </tr>
         ))}
        </tbody>
      </table>
    
    </>
    )
}
export default Users;