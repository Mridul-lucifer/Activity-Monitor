import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-red-500 to-pink-500 font-sans relative"> {/* Gradient background and font */}
            <div className="absolute top-0 left-0 w-full h-full bg-red-500/80 z-0"></div> {/* Overlay for better text contrast */}
            <div className="relative z-1 p-8 sm:p-12 md:p-16 lg:p-20"> {/* Padding for different screen sizes */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">Start a New Challenge</h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100">Healthier days are ahead. Let's get there together.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Responsive grid */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => handleNavigation('/hands-excercise')}>
                        <div className="absolute inset-0 bg-amber-400/80 group-hover:bg-amber-500/90 transition duration-500 ease-in-out flex flex-col justify-center items-center"> {/* Overlay with transition */}
                            <h3 className="text-3xl font-bold text-white mb-2">Push Ups</h3>
                            <p className="text-lg text-white">Build your strength, one rep at a time.</p>
                        </div>
                        <img className="object-cover w-full h-full" src="Pushup.png" alt="Push Ups" />
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => handleNavigation('/jumping-exercise')}> {/* Added route for jumping */}
                        <div className="absolute inset-0 bg-amber-400/80 group-hover:bg-amber-500/90 transition duration-500 ease-in-out flex flex-col justify-center items-center">
                            <h3 className="text-3xl font-bold text-white mb-2">Jumpings</h3>
                            <p className="text-lg text-white">Jump for joy, jump for health!</p>
                        </div>
                        <img className="object-cover w-full h-full" src="jumping.png" alt="Jumpings" />
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => handleNavigation('/hands-up-down-exercise')}> {/* Added route for hands up down */}
                        <div className="absolute inset-0 bg-amber-400/80 group-hover:bg-amber-500/90 transition duration-500 ease-in-out flex flex-col justify-center items-center">
                            <h3 className="text-3xl font-bold text-white mb-2">Hands Up-Down</h3>
                            <p className="text-lg text-white">Hands up, down, get your body moving!</p>
                        </div>
                        <img className="object-cover w-full h-full" src="handsUpDown.png" alt="Hands Up-Down" />
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => handleNavigation('/sit-ups-exercise')}> {/* Added route for sit ups */}
                        <div className="absolute inset-0 bg-amber-400/80 group-hover:bg-amber-500/90 transition duration-500 ease-in-out flex flex-col justify-center items-center">
                            <h3 className="text-3xl font-bold text-white mb-2">Sit Ups</h3>
                            <p className="text-lg text-white">More than just abs, it's core fitness.</p>
                        </div>
                        <img className="object-cover w-full h-full" src="sitUps.png" alt="Sit Ups" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;