import React from 'react';
import { Carousel } from 'react-bootstrap';
import homeimg from "../assets/Books/Images_other_than_gall/tmfa_home.jpg"; 
import events_1img from "../assets/Books/Images_other_than_gall/event_img.jpg";
import "./Home.css"

const Home = () => (
  <div>
<Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={homeimg} // Update this path to your image
            alt="First slide"
            style={{ height: '100vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={homeimg} // Update this path to your image
            alt="Second slide"
            style={{ height: '100vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={homeimg} // Update this path to your image
            style={{ height: '100vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>


      <div className='events'>

        <div className='red-bar' >
         <div className="cont">
          <h1>
            6+
          </h1>
          <h1>events</h1>
         </div>


         <div className="cont">
          <h1>
            6+
          </h1>
          <h1>events</h1>
         </div>


         <div className="cont">
          <h1>
            6+
          </h1>
          <h1>events</h1>
         </div>
        </div>  

        <div className='events_1'>
        <div className="left1">
        <h1>hello</h1>

        <p style={{fontSize:"1.5rem"}}>மனித உரிமைகளை அவமதித்தலும் இகழ்தலும், மனிதகுலத்தினயை சீற்றத்திற்குள்ளாக்கியுள்ள மனித உரிமைகளை அவமதித்த ீற்றத்திற்குtுள்ள மனித உரிமைகளை அவமதித்தலும் இகழ்தலும், மனிதகுலத்தின் மனசாட்சியை சீற்றத்திற்குள்ளாக்கியுள்ள</p>
        
        </div>
        <div className="right1">

        <img src={events_1img} style={{width:"361px",height:"361px",borderRadius:"100%"}}></img>

        </div>


        </div>


        <div className='events_1'>
        <div className="left2">

<img src={events_1img} style={{width:"361px",height:"361px",borderRadius:"100%"}}></img>

</div>
        <div className="right2">
        <h1>hello</h1>

        <p style={{fontSize:"1.5rem"}}>மனித உரிமைகளை அவமதித்தலும் இகழ்தலும், மனிதகுலத்தினயை சீற்றத்திற்குள்ளாக்கியுள்ள மனித உரிமைகளை அவமதித்த ீற்றத்திற்குtுள்ள மனித உரிமைகளை அவமதித்தலும் இகழ்தலும், மனிதகுலத்தின் மனசாட்சியை சீற்றத்திற்குள்ளாக்கியுள்ள</p>
        
        </div>
       


        </div>


        <div className='events_1'>
        <div className="left1">
        <h1>hello</h1>

        <p style={{fontSize:"1.5rem"}}>மனித உரிமைகளை அவமதித்தலும் இகழ்தலும், மனிதகுலத்தினயை சீற்றத்திற்குள்ளாக்கியுள்ள மனித உரிமைகளை அவமதித்த ீற்றத்திற்குtுள்ள மனித உரிமைகளை அவமதித்தலும் இகழ்தலும், மனிதகுலத்தின் மனசாட்சியை சீற்றத்திற்குள்ளாக்கியுள்ள</p>
        
        </div>
        <div className="right1">

        <img src={events_1img} style={{width:"361px",height:"361px",borderRadius:"100%"}}></img>

        </div>


        </div>


        <div className='events_1'>
        <div className="left2">

<img src={events_1img} style={{width:"361px",height:"361px",borderRadius:"100%"}}></img>

</div>


        <div className="right2">
        <h1>hello</h1>

        <p style={{fontSize:"1.5rem"}}>மனித உரிமைகளை அவமதித்தலும் இகழ்தலும், மனிதகுலத்தினயை சீற்றத்திற்குள்ளாக்கியுள்ள மனித உரிமைகளை அவமதித்த ீற்றத்திற்குtுள்ள மனித உரிமைகளை அவமதித்தலும் இகழ்தலும், மனிதகுலத்தின் மனசாட்சியை சீற்றத்திற்குள்ளாக்கியுள்ள</p>
        
        </div>
        


        </div>
   
   
   
   

      </div>

  </div>
);

export default Home;