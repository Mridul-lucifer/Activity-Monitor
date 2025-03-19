import { useState } from 'react'
import axios from 'axios'

export default function Competion() {
    const [choice, setChoice] =  useState(0);
    const [name,setName ] = useState();
    const [passcode,setPasscode ] = useState();
    const [type,setType ] = useState();
    const [amount,setAmount ] = useState();
    const sendApitoCreate = async function(e){
        e.preventDefault();
        alert(name+" "+passcode+" "+type+" "+amount);
        const token = localStorage.getItem("auth");
        try{
            const response = await axios.post('https://serverhelper.onrender.com/createcompetion',{
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
            const response = await axios.post('https://serverhelper.onrender.com/joincompetion',{
                Authorization: token,
                name,
                passcode
            })
            alert(response.data.msg);
            console.log(response.data);
            if(response.data.comp.type=="Jumping Jacks"){
                localStorage.setItem('amount',response.data.comp.amount);
                localStorage.setItem('name',response.data.comp.name)
                window.open("/hands_up_comp.html", '_blank', 'noopener,noreferrer');
            }
        }catch(e){
            console.log(e);
        }

    }

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen pb-32">
      {choice == 1 ? (<div id="create-box" className='h-100 rounded-2xl shadow-2xl overflow-hidden'>
        <h3 className="text-center text-4xl bg-emerald-700 p-4 text-white">Create New Challenge</h3>
        <form className='m-5 h-70 flex flex-col gap-1' onSubmit={sendApitoCreate}>
            <label className='font-bold '>Enter Competion Name </label>
            <input placeholder='Competition Name' className='pl-5 border-2 rounded-sm' type='text' onChange={(e)=>{setName(e.target.value)}}></input>
            <label className='font-bold '>Passcode  </label>
            <input placeholder='Passcode' className='pl-5 border-2 rounded-sm' type='Number' onChange={(e)=>{setPasscode(e.target.value)}}></input>
                <label className='font-bold '>Type</label>
                <select className='pl-5 border-2 rounded-sm' onChange={(e)=>{setType(e.target.value)}}>
                    <option value="" disabled selected>Select</option>
                    <option value="Jumping Jacks">Jumping Jacks</option>
                    <option value="Sit-ups">Sit-ups</option>
                    <option value="option3">Option 3</option>
                </select>
                <label className='font-bold '>Enter Amount  </label>
                <input placeholder='Calories' className='pl-5 border-2 rounded-sm' type='Number' onChange={(e)=>{setAmount(e.target.value)}}></input>
            <div className='flex items-center justify-center w-full'>
            <button className='bg-green-500 rounded-full p-2 pl-4 pr-4 mt-2' >Create</button>
            </div>
        </form>
      </div>):(<button className='p-3 bg-emerald-600 text-white rounded-full' onClick={() => setChoice(1)}>Create New Challenge</button> ) }



      
      {choice == 2? (<div id="join-box" className=' rounded-2xl shadow-2xl overflow-hidden'>
        <h3 className="text-center text-4xl bg-emerald-700 p-4 text-white">Join Challenge</h3>
        <form className='m-5 flex flex-col gap-1' onSubmit={sendApitoJoin}>
            <label className='font-bold '>Enter Competion Name </label>
            <input placeholder='Team Name' className='pl-5 border-2 rounded-sm' type='text' onChange={(e)=>{setName(e.target.value)}}></input>
            <label className='font-bold '>Passcode  </label>
            <input placeholder='Passcode' className='pl-5 border-2 rounded-sm' type='Number' onChange={(e)=>{setPasscode(e.target.value)}}></input>
        
            <div className='flex items-center justify-center'>
            <button className='bg-green-500 rounded-full p-2 pl-4 pr-4 mt-2' >Join Challenge</button>
            </div>
            
        </form>
      </div>):(<button className='p-3 bg-emerald-600 text-white rounded-full' onClick={() => setChoice(2)}>Join Challenge</button> )
      }
    </div>
  )
}
