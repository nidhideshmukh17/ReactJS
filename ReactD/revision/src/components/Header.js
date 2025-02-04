/*import './Header.css';

function Header(){
    let title="Colors";
    var today=new Date().toDateString();
    var st={color:"brown",float:"right"};
    return(
        <div>
            <h6 style={st}>{today}</h6>
            {/*<h1>React Demo!!</h1>
            <h2>Hello React...</h2> */
            {/*<h3 className='title'>List of {title}</h3>
        </div>
    );
}

export default Header;*/}

import { useParams } from "react-router-dom";
import "./Header.css";

function Header(){

    let title = "Bitcode";
    let today = new Date().toDateString();
    let st = {color:"brown", float:"right"};
    //let userData = useParams();
    
    return(
        <>
            <h3 className="title">Welcome {title}</h3>
            <h5 style={st}>{today}</h5>
            {/*<p>UserData = {userData.id}{userData.str}</p>*/}
            <br/>
        </>
    )
}
export default Header;