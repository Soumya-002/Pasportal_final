
import './styles/style1.css';
import Alcherlogo from'./images/alcher 2023 logo.png';
import pic3 from'./images/Frame 14957pr.png';
// import Creator from './Creators_page';
//  import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
  
    <div className="logo">
         <img src={Alcherlogo} alt="Alcherlogo" style={{width:200}} />
       <img src={pic3} alt="Alcherlogo" style={{width:300,height:400}} />
       <button className='btn'><a className='link' href="">Seperate Arena Access</a></button>
       <button className='btn'><a className='link' href="">Entry Pass</a>
       
         {/* <p className='para'>All Creater's camp Passes</p> */}
         </button>
     </div>
    
  );
}

export default App;