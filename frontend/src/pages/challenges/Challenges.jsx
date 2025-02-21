
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    const workInProgress = function(e){
        e.preventDefault();
        alert("Work In Progress... ")
    }
    return (
        <div>
            <div className="bg-red-500 p-11 h-screen text-center z-0 fixed top-20 right-0 w-screen">
                <h1 className="text-4xl text-black font-bold">Start a new Challenge</h1>
                <p className="text-teal-950">Healthier days are ahead. Let&apos;s get there together.</p>
                </div>
        <div className="z-1 relative pt-36">
            <div className="h-11 w-screen rounded-t-full bg-yellow-50"></div>
            <div className="bg-yellow-50 min-h-screen">
            <div className="p-11">

            <a href='/hands_up_count.html' target="_blank" rel="noopener noreferrer"><div className="relative h-64 mb-3.5 group overflow-hidden duration-500 bg-amber-400 rounded-2xl hover:bg-amber-500">
                <div className="h-64 flex flex-col justify-center p-11 xl:pl-24 relative z-3">
                <h3 className="text-3xl font-bold ">Jumping Jacks</h3>
                <p className="">Hands up, down, get your body moving!</p>
                </div>
                <img className="absolute bottom-0 right-0 group-hover:scale-105 duration-500 h-60 z-2" src="handsUpDown.png" />
            </div></a>

            <a href='/hands_up_count.html' target="_blank" rel="noopener noreferrer"><div className="relative h-64 mb-3.5 group overflow-hidden duration-500 bg-amber-400 rounded-2xl hover:bg-amber-500">
                <div className="h-64 flex flex-col justify-center p-11 xl:pl-24 relative z-3">
                <h3 className="text-3xl font-bold ">Sit Ups</h3>
                <p className="">More than just abs, it&apos;s core fitness.</p>
                </div>
                <img className="absolute bottom-0 right-0 group-hover:scale-105 duration-500 h-60 z-2" src="sitUps.png" />
            </div></a>

            <div className="relative h-64 mb-3.5 group overflow-hidden duration-500 bg-amber-400 rounded-2xl hover:bg-amber-500" onClick={workInProgress}>
                <div className="h-64 flex flex-col justify-center p-11 xl:pl-24 relative z-3 ">
                <h3 className="text-3xl font-bold ">Push Ups</h3>
                <p className="">Build your strength, one rep at a time.</p>
                </div>
                <img className="absolute bottom-0 right-0 group-hover:scale-105 duration-500 z-2" src="Pushup.png" />
            </div>

            <div className="relative h-64 mb-3.5 group overflow-hidden duration-500 bg-amber-400 rounded-2xl hover:bg-amber-500" onClick={workInProgress}>
                <div className="h-64 flex flex-col justify-center p-11 xl:pl-24 relative z-3 bg-opacity-50">
                <h3 className="text-3xl font-bold ">Jumpings</h3>
                <p className="">Jump for joy, jump for health!</p>
                </div>
                <img className="absolute bottom-0 right-0 group-hover:scale-105 duration-500 h-full z-2" src="jumping.png" />
            </div>
            {/* <a href='/hands_up_count.html' target="_blank" rel="noopener noreferrer"><div className="relative h-64 mb-3.5 group overflow-hidden duration-500 bg-amber-400 rounded-2xl hover:bg-amber-500">
                <div className="h-64 flex flex-col justify-center p-11 xl:pl-24 relative z-3">
                <h3 className="text-3xl font-bold ">Hands Up-Down</h3>
                <p className="">Hands up, down, get your body moving!</p>
                </div>
                <img className="absolute bottom-0 right-0 group-hover:scale-105 duration-500 h-60 z-2" src="handsUpDown.png" />
            </div></a> */}
            
            </div>
            </div>
        </div>
        </div>
    );
}

export default Home;
