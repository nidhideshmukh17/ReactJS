import { useDispatch, useSelector } from "react-redux";

function Display(){

   const data = (state)=>state.students;
   const studArr = useSelector(data); //useSelector is used to fetch the data from store
   let dispatch = useDispatch();

    function funEdit(obj){
        console.log("edit");
        let mks = prompt("Enter the marks");
        return dispatch({
            type : "students/editStudent",
            payload : {rollno:obj.rollno,marks:mks}
        })
    }

    function funDelete(obj){
        console.log("delete");
        return dispatch({
            type : "students/deleteStudent",
            payload : {rollno:obj.rollno}
        })
    }

    function search(rno){
        return dispatch({
            type : "students/searchStudent",
            payload : {rno:rno}
        });
    }

    function funSearch(){
        let rno = prompt("Rollno:");
        search(rno);
    }
    
    return (
        <div>
        
        <table border={2}>
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>Marks</th>
                <th colSpan={2}>Actions</th>
            </tr>
           
            {
                studArr.map((x)=>(
                    <tr key={x.rollno}>
                    <td>{x.rollno}</td>
                    <td>{x.name}</td>
                    <td>{x.marks}</td>
                    <td><a href="#" onClick={(event)=>{event.preventDefault();funEdit(x)}}>Edit</a></td>
                    <td><a href="#" onClick={(event)=>{event.preventDefault();funDelete(x)}}>Delete</a></td>
                    </tr>
                ))
            }
        </table>
        <input type="button" value="search" onClick={funSearch}/>
        </div>
    )
}

export default Display;