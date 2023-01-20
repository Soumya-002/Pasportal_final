
import './styles/style1.css';
import Alcherlogo from'./images/alcher 2023 logo.png';
import pic1 from'./images/Frame 14972.png';


function Creator() {
  return (
  
     <div className="logo">
         <img src={Alcherlogo} alt="Alcherlogo" style={{width:200}} />
       <img src={pic1} alt="Alcherlogo" style={{width:300,height:400}} />
       <button className='btn'><a className='link' href="">All Creater's camp Passes</a>
         {/* <p className='para'>All Creater's camp Passes</p> */}
         </button>
     </div>
    
  );
}

export default Creator;