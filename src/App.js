import React,  { useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Switch, Route, Link, NavLink  } from "react-router-dom";



function App() {
  const[info, setInfo] = useState([])
  useEffect(() =>{
    fetch('https://bxb-project.herokuapp.com/pokemon')
    .then(response =>{
        
        if(response.ok){
            console.log(response)
            return response.json()
        }
        throw new Error('sorry,not working')
    })
    .then((data) =>{
        console.log(data)
        setInfo(data);
      })
      .catch((err) =>{
          console.log('err')
      })
},[])

const filteredNames = info.forEach(pokemon => info.name.english)

return (
  <>
    <Router>
 <Switch>
   <Route path="/pokemon">
     {filteredNames}
     </Route>
 </Switch>
 
 </Router>
 
</>


)
  
}



export default App;
