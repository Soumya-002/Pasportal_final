import './styles/style2.css';
import Alcherlogo from'./images/alcher 2023 logo.png';
import pic1 from'./images/Frame 14972.png';
import pic2 from'./images/Frame 14957(1).png';
import pic3 from'./images/Frame 14957pr.png';
import pic4 from'./images/alcher laidy.png';
import pic6 from'./images/alcherman1.png';
import pic7 from'./images/Frame 14972n.png';
import pic8 from'./images/Group 482.png';

function pass () {
    return (
         <div className="logo">

          <img src={Alcherlogo} alt="Alcherlogo" style={{width:200}} />
         <div className="images">
       <img src={pic4} alt="Alcherlogo" style={{width:197,height:197}} />
        <p className="pass">Get Your Passes</p>
       <img src={pic6} alt="Alcherlogo"  style={{width:197,height:197}} />
       </div>
      <p className='para'>Scroll Down</p>
       <button className='bttn'>
        <img src={pic8} alt="" />
        <a href="https://google.com" className='link'>Manage Booking</a>
       </button>
         
         <div className="logo1">
         <img src={pic3} alt="Alcherlogo" style={{width:300,height:400,paddingTop:40,paddingBottom:15}} />
         <img src={pic7} alt="Alcherlogo" style={{width:300,height:400,padding:15}} />
         <img src={pic2} alt="Alcherlogo" style={{width:300,height:400,padding:15}} />
         <img src={pic1} alt="Alcherlogo" style={{width:300,height:400,paddingTop:15,paddingBottom:40}} />
         </div> 
          </div> 
      );
}
 
export default pass;