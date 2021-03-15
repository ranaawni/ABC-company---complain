import React from "react";
import '../App.css'
import { Col, Row} from "react-bootstrap";   
import welcoming from '../assets/welcoming.jpg'

function Home() {

    return (
        <div>
             {/* <Row>
    <Col xs={8}>
    
    <p> Now you can be in touch with us! </p>
    </Col>
    <Col>
    <img src={welcoming}></img>
    </Col>
    </Row>
    <Row>
    <button id='btnVisit'>Visit Us</button>
    </Row> */}
    
    
            <div id='welcoming' className='Row'><p> Now you can be in touch with us! </p></div>
           
           <div id='sideImg'>
           <img src={welcoming}></img>
           </div>
           <div>
               <button id='btnVisit' onClick={event =>  window.location.href='/signin'}>Visit Us</button>
           </div>
   
       </div>

           
      

    )
}

export default Home;