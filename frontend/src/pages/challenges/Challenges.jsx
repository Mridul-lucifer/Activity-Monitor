/* eslint-disable react/prop-types */

import { useState } from "react";


function Home() {


    return (
        <div>
            <div className="bg-red-500 pt-11 text-center z-0 w-screen">
                <h1 className="text-4xl text-black font-bold">Start a new Challenge</h1>
                <p className="text-teal-950">Healthier days are ahead. Let&apos;s get there together.</p>
                <div className="h-11 w-screen rounded-t-full bg-yellow-50 mt-11"></div>
            </div>
            <div className="bg-yellow-50 min-h-screen p-11">

            {data.map((e, ind) => <Challenge e={e} key={ind} />)}


            
            {/* <a href='/hands_up_count.html' target="_blank" rel="noopener noreferrer"><div className="relative h-64 mb-3.5 group overflow-hidden duration-500 bg-amber-400 rounded-2xl hover:bg-amber-500">
                <div className="h-64 flex flex-col justify-center p-11 xl:pl-24 relative z-3">
                <h3 className="text-3xl font-bold ">Hands Up-Down</h3>
                <p className="">Hands up, down, get your body moving!</p>
                </div>
                <img className="absolute bottom-0 right-0 group-hover:scale-105 duration-500 h-60 z-2" src="handsUpDown.png" />
            </div></a> */}
            
            </div>
            </div>
    );
}


function Challenge({e}) {
    const [amount, setAmount] = useState(5);

    const handleStart = () => {
        if(amount < 2 && amount > 50) {
            alert("Invalid Calories Value")
            return;
        }
        localStorage.setItem('amount', amount);
        window.open(e.redirect, '_blank', 'noopener,noreferrer');
    }

    return(<div href='/hands_up_count.html' target="_blank" rel="noopener noreferrer"><div className="relative h-64 mb-3.5 group overflow-hidden duration-500 bg-amber-400 rounded-2xl hover:bg-amber-500">
        <div className="h-64 flex flex-col justify-center p-11 xl:pl-24 relative z-3">
        <h3 className="text-3xl font-bold ">{e.title}</h3>
        <p className="">{e.tagline}</p>
        <div className="pt-2 pb-2 flex gap-2 mt-2">
            <div className="flex items-center font-bold text-lg">Burn Calories: </div>
            <div className="bg-white rounded-lg w-fit flex gap-2 pt-1 pb-1">
                <button className="text-xl p-1" onClick={() => setAmount(amount - 1)}>-</button>
                <div className="bg-gray-100 text-lg pl-2 pr-2 rounded-lg flex items-center">{amount}</div>
                <button className="text-xl p-1" onClick={() => setAmount(amount + 1)}>+</button>
            </div>
            <button className="bg-green-500 p-1 rounded-lg" onClick={handleStart}>Start</button>
        </div>
        <div className="flex mt-2 flex-col w-fit items-center">
            <div className="flex gap-2">
            <button className="bg-amber-950 text-white rounded-lg p-1 pl-2 pr-2" onClick={() => setAmount(5)}>5 Calories</button>
            <button className="bg-amber-950 text-white rounded-lg p-1 pl-2 pr-2" onClick={() => setAmount(10)}>10 Calories</button>
            <button className="bg-amber-950 text-white rounded-lg p-1 pl-2 pr-2" onClick={() => setAmount(15)}>15 Calories</button>
            </div>
            <div className="text-xs">(Custome Choice)</div>
        </div>
        
        </div>
        <img className="absolute bottom-0 right-0 group-hover:scale-105 duration-500 h-60 z-2" src={e.imgSrc} />
    </div></div>);
}


const data = [
    {
        title: "Jumping Jacks",
        tagline: "Hands up, down, get your body moving!",
        imgSrc: "./handsUpDown.png",
        redirect: "/hands_up_count.html"
    }, 
    {
        title: "Sit Ups",
        tagline: "More than just abs, it&apos;s core fitness.",
        imgSrc: "sitUps.png",
        redirect: "/sitstand.html"
    },
    {
        title: "Push Ups",
        tagline: "More than just abs, it&apos;s core fitness.",
        imgSrc: "Pushup.png",
        redirect: "./"
    },
    {
        title: "Jumpings",
        tagline: "Jump for joy, jump for health!",
        imgSrc: "jumping.png",
        redirect: "./"
    },
]

export default Home;
