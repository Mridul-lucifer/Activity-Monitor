import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Leaderboard = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLeaderboardData = async () => {
        let token = localStorage.getItem('auth');
        try {
            const response = await axios.post("http://localhost:5000/leaderboard", {
                Authorization: token,
            });

            setLeaderboardData(response.data.leaderboard);
            setCurrentUser(response.data.currentUser);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching leaderboard data", err);
            setError("Failed to load leaderboard data.");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeaderboardData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#B9B28A]"></div> {/* Olive Green Spinner */}
                <p className="ml-4 text-lg text-[#B9B28A]">Loading leaderboard...</p> {/* Olive Green Text */}
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg text-[#504B38]">{error}</p> {/* Dark Brown Error Text */}
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-r from-[#F8F3D9] to-[#EBE5C2] min-h-screen font-sans"> {/* Pale Yellow to Light Beige Gradient */}
            <div className="container mx-auto px-4 py-12 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[#F8F3D9]/80 z-0"></div> {/* Pale Yellow Overlay */}
                <div className="relative z-1">

                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-[#504B38] sm:text-5xl md:text-6xl"> {/* Dark Brown Heading */}
                            Leaderboard
                        </h1>
                        <p className="text-lg text-[#B9B28A] mt-4 sm:text-xl"> {/* Olive Green Text */}
                            Top Scorers
                        </p>
                    </div>

                    <div className="bg-[#EBE5C2]/80 backdrop-blur-md shadow-lg rounded-lg overflow-x-auto mb-8"> {/* Light Beige Table Background */}
                        <table className="min-w-full table-auto text-sm text-left text-[#504B38] border-collapse"> {/* Dark Brown Table Text */}
                            <thead className="bg-[#B9B28A]/80 text-[#F8F3D9]"> {/* Olive Green Header */}
                                <tr>
                                    <th scope="col" className="px-6 py-3 font-medium uppercase tracking-wider">
                                        Rank
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium uppercase tracking-wider">
                                        Username
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium uppercase tracking-wider">
                                        Calories
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaderboardData.map((user, index) => (
                                    <tr
                                        key={user._id}
                                        className={`hover:bg-[#B9B28A]/50 ${index % 2 === 0 ? "bg-[#EBE5C2]/50" : ""}`} 
                                    >
                                        <td className="px-6 py-4 font-medium text-[#504B38] whitespace-nowrap"> {/* Dark Brown Row Text */}
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{user.UserName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{user.Calories}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {currentUser && (
                        <div className="bg-[#EBE5C2]/80 backdrop-blur-md shadow-lg rounded-lg p-6"> {/* Light Beige Card Background */}
                            <div className="flex flex-col sm:flex-row items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-[#504B38] rounded-full flex items-center justify-center text-white text-xl font-semibold"> {/* Dark Brown Icon Background */}
                                        {currentUser?.UserName?.charAt(0)}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-[#504B38]"> {/* Dark Brown Card Text */}
                                            {currentUser?.UserName}
                                        </h2>
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-0">
                                    <button onClick={() => navigate('/profile')} className="px-6 py-2 bg-[#B9B28A] text-white rounded-lg shadow-md hover:bg-[#504B38] focus:outline-none focus:ring-2 focus:ring-[#F8F3D9]"> {/* Olive Green Button */}
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
