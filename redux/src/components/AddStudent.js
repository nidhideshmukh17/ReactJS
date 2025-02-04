//New! Keyboard shortcuts … Drive keyboard shortcuts have been updated to give you first-letters navigation
import { useState } from "react";
import { useDispatch } from "react-redux";

function AddStudent(){
  let[txtRollno,setRollno]=useState();
  let [txtName,setName]=useState();
  let [txtMarks,setMarks]=useState();

  let rollnoChange=(event)=>{
    setRollno(event.currentTarget.value);
  }
 let nameChange=(event)=>{
    setName(event.currentTarget.value);
 }
 let marksChange=(event)=>{
    setMarks(event.currentTarget.value);
 }
 let submitHandler=(event)=>{
    event.preventDefault();
    addStudent();
 }
 
 const dispatch=useDispatch();
 let addStudent=()=>{
    return dispatch({
        type: "students/addStudent",
        payload: { rollno:txtRollno, name: txtName,marks:txtMarks }
    })
 } 
 return (
    <>
    <form onSubmit={submitHandler}>
        <div>
            Rollno:<input type="text" onChange={rollnoChange}></input>
        </div>
        <div>
            Name:<input type="text" onChange={nameChange}></input>
        </div>
        <div>
            Marks:<input type="text" onChange={marksChange}></input>
        </div>
       
        <div>
            <input type="submit" value="Insert"></input>
        </div>
    </form>
    </>
 )
}
export default AddStudent;