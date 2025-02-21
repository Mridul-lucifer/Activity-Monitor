import React, { useState } from 'react'
import axios from 'axios'
export default function competion() {
    const [name,setName ] = new useState();
    const [passcode,setPasscode ] = new useState();
    const [type,setType ] = new useState();
    const [amount,setAmount ] = new useState();
    const sendApitoCreate = async function(e){
        e.preventDefault();
        alert(name+" "+passcode+" "+type+" "+amount);
        const token = localStorage.getItem("auth");
        try{
            const response = await axios.post('http://localhost:5000/createcompetion',{
                Authorization: token,
                name,
                passcode,
                type,
                amount
            })
            alert(response.data.msg);
        }catch(e){
            console.log(e);
        }
    }
    const sendApitoJoin = async function(e){
        e.preventDefault();
        alert(name+" "+passcode);
        const token = localStorage.getItem("auth");
        try{
            const response = await axios.post('http://localhost:5000/joincompetion',{
                Authorization: token,
                name,
                passcode
            })
            alert(response.data.msg);
            console.log(response.data);
        }catch(e){
            console.log(e);
        }
    }

    const changeIndexofcreate = function(){
        document.getElementById('create-box').classList.toggle('hidden');
    }
    const changeIndexofjoin = function(){
        document.getElementById('join-box').classList.toggle('hidden');
    }
  return (
    <div>
        <button className='border' onClick={changeIndexofcreate}>create new button</button> 
      <div id="create-box" className='h-100 m-10 border hidden'>
        <h3 className="text-center text-4xl">Create New Challenge</h3>
        <form className='border m-10 h-70' onSubmit={sendApitoCreate}>
            <div className='flex items-center  mx-50 mt-10'>
            <label className='mx-30'>Enter Competion Name </label>
            <input placeholder='Team Name' className='border pl-5' type='text' onChange={(e)=>{setName(e.target.value)}}></input>
            </div>
            <div className='flex items-center  mx-50 mt-5'>
            <label className='mx-30'>Passcode  </label>
            <input placeholder='Team Name' className='border pl-5' type='Number' onChange={(e)=>{setPasscode(e.target.value)}}></input>
            </div>
            <div className='flex items-center mx-50 mt-5'>
                <label className='mx-30'>Type</label>
                <select className='border pl-5' onChange={(e)=>{setType(e.target.value)}}>
                    <option value="" disabled selected>Select</option>
                    <option value="Jumping Jacks">Jumping Jacks</option>
                    <option value="Sit-ups">Sit-ups</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className='flex items-center  mx-50 mt-5'>
                <label className='mx-30'>Enter Amount  </label>
                <input placeholder='Team Name' className='border pl-5' type='Number' onChange={(e)=>{setAmount(e.target.value)}}></input>
            </div>

            
            <div className='flex items-center justify-center m-10'>
            <button className='submit border px-5 bg-green-500 rounded-xl' >Create</button>
            </div>
            
        </form>
      </div>



      <button className='border' onClick={changeIndexofjoin}>join button</button> 
      <div id="join-box" className='h-100 m-10 border hidden'>
        <h3 className="text-center text-4xl">Join Challenge</h3>
        <form className='border m-10 h-70' onSubmit={sendApitoJoin}>
            <div className='flex items-center  mx-50 mt-10'>
            <label className='mx-30'>Enter Competion Name </label>
            <input placeholder='Team Name' className='border pl-5' type='text' onChange={(e)=>{setName(e.target.value)}}></input>
            </div>
            <div className='flex items-center  mx-50 mt-5'>
            <label className='mx-30'>Passcode  </label>
            <input placeholder='Team Name' className='border pl-5' type='Number' onChange={(e)=>{setPasscode(e.target.value)}}></input>
            </div>
            
            <div className='flex items-center justify-center m-10'>
            <button className='submit border px-5 bg-green-500 rounded-xl' >Join</button>
            </div>
            
        </form>
      </div>
    </div>
  )
}
