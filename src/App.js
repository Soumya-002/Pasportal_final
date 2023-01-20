
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Creator from './Creators_page';
import Exclusive from './Exclusive_pass';
import General from './general_pass';
import Premium from './Premium_pass';
import Pass from './pass';

function App() {
  return (
 <BrowserRouter>
<Switch>
  <Route path="/" exact component={Pass}/>
  <Route path="/Create" exact component={Creator}/>
  <Route path="/Exclusive" exact component={Exclusive}/>
  <Route path="/General" exact component={General}/>
  <Route path="/Premium" exact component={Premium}/>
</Switch>
 </BrowserRouter>
    
  );
}

export default App;
