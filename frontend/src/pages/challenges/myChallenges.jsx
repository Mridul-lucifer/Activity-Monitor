import axios from "axios";
import { useState, useEffect } from "react";

const MyChallenges = () => {
    const [arr, setArr] = useState([]);
    // const arr = [{name: "name1", solver: [{name: "Navjot"},{ name: "Jashan"}]}, {name: "name1", solver: [{name: "Navjot"},{ name: "Jashan"}]}]

    useEffect(() => {
        const token = localStorage.getItem("auth");
        const fun1 = async () => {
            const res = await axios.post("http://localhost:5000/myCompetions", {
                Authorization: token
            });
            setArr(res.data.arr);
        }
        try{
            fun1();
        }catch (e){
            console.log(e);
        }
    }, []);

    if(arr.length == 0) {
        return (<div className="h-40 flex items-center justify-center">
            No data found..!
        </div>)
    }
  return (
    <div className="m-11">
        <h1 className="text-center text-4xl font-bold mb-11">My Challenges</h1>
      {arr.map((e, ind) => (<div key={ind} className="bg-amber-500 rounded-2xl p-5 shadow-xl margin-auto w-full mb-4">
        <h1 className="text-3xl font-bold text-white text-center bg-amber-900 rounded-4xl w-fit m-auto p-2 pl-2 pr-2">Challenge Name - {e.name}</h1>
        <h2 className="text-xl font-bold text-white mt-2">Solvers - {e.array.length == 0 && "No one solved this"}</h2>
        {e.array.map((ele, ind) => (<div key={ind} className="flex rounded-3xl w-full mb-2">
            <div className="bg-gray-300 p-2 w-11">{ind+1}</div>
            <div className="bg-white p-2 w-[200px]">{ele.Solver}</div>
        </div>))}
      </div>))}
    </div>
  )
}

export default MyChallenges;
