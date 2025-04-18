import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Header from './pages/home/header';

function App() {
  const[msg,setMsg]=useState("");
  const func = async function(event){
      event.preventDefault();
      try{
      const response = await axios.get('http://localhost:5000/greet',{});
      if(response){
          setMsg(response.data.msg);
          alert("Output : "+response.data.msg);
      }else{
          alert("Error ")
      }
  }catch(err){
      console.log(err);
  }
  }

  return (
    <>
    <div>
      <Header/>
      <Outlet/>
      {/* <div>footer</div> */}
    </div>
    </>
  )
}

export default App
