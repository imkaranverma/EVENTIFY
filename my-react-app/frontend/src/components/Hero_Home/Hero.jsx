import { Link } from 'react-router-dom'
import './Hero.css'
import {nav_items} from './Hero_assest/Nav'
import NavBar from './navbar'
export default function Hero(){
    return(
      <>
      
      <div className="section">
         
      </div>
      {/* <div className="nav">
              <h2 className="nav_heading">Event Heading</h2>
              <div className="nav-links">
                  <ul>
                      {nav_items.map((item)=>(
                   <li key={item.index}>{item.title}</li>   
                      ))  }   
                  </ul>
              </div>

              {/* <button className='btns event_btn'>Your Event</button> 

          </div> */}
          <div className="nav">
          <NavBar/>
          </div>

          <div className="hero_text">
            <div className="hello">👋 Welcome to Event Planner</div>
            <h1 className="text_heading">One stop place for event organisers</h1>
            <p>Create,Manage and organise your events in easiest way</p>
          </div>

          <div className="Hero_buttons">
           <Link to="/registerevent"><button className='btns'>Create Event</button></Link> 
            <Link to="/login"><button className='btns'>See Your Event</button></Link>
          </div>
      </>
    )
}