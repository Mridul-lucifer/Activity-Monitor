// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//     const navigate = useNavigate();

//     const handleNavigation = (path) => {
//         navigate(path);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-red-500 to-pink-500 font-sans relative"> {/* Gradient background and font */}
//             <div className="absolute top-0 left-0 w-full h-full bg-red-500/80 z-0"></div> {/* Overlay for better text contrast */}
//             <div className="relative z-1 p-8 sm:p-12 md:p-16 lg:p-20"> {/* Padding for different screen sizes */}
//                 <div className="text-center mb-16">
//                     <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">Start a New Challenge</h1>
//                     <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100">Healthier days are ahead. Let's get there together.</p>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Responsive grid */}
//                     <div className="group relative overflow-hidden rounded-2xl shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => handleNavigation('/hands-excercise')}>
//                         <div className="absolute inset-0 bg-amber-400/80 group-hover:bg-amber-500/90 transition duration-500 ease-in-out flex flex-col justify-center items-center"> {/* Overlay with transition */}
//                             <h3 className="text-3xl font-bold text-white mb-2">Push Ups</h3>
//                             <p className="text-lg text-white">Build your strength, one rep at a time.</p>
//                         </div>
//                         <img className="object-cover w-full h-full" src="Pushup.png" alt="Push Ups" />
//                     </div>

//                     <div className="group relative overflow-hidden rounded-2xl shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => handleNavigation('/jumping-exercise')}> {/* Added route for jumping */}
//                         <div className="absolute inset-0 bg-amber-400/80 group-hover:bg-amber-500/90 transition duration-500 ease-in-out flex flex-col justify-center items-center">
//                             <h3 className="text-3xl font-bold text-white mb-2">Jumpings</h3>
//                             <p className="text-lg text-white">Jump for joy, jump for health!</p>
//                         </div>
//                         <img className="object-cover w-full h-full" src="jumping.png" alt="Jumpings" />
//                     </div>

//                     <div className="group relative overflow-hidden rounded-2xl shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => handleNavigation('/hands-up-down-exercise')}> {/* Added route for hands up down */}
//                         <div className="absolute inset-0 bg-amber-400/80 group-hover:bg-amber-500/90 transition duration-500 ease-in-out flex flex-col justify-center items-center">
//                             <h3 className="text-3xl font-bold text-white mb-2">Hands Up-Down</h3>
//                             <p className="text-lg text-white">Hands up, down, get your body moving!</p>
//                         </div>
//                         <img className="object-cover w-full h-full" src="handsUpDown.png" alt="Hands Up-Down" />
//                     </div>

//                     <div className="group relative overflow-hidden rounded-2xl shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => handleNavigation('/sit-ups-exercise')}> {/* Added route for sit ups */}
//                         <div className="absolute inset-0 bg-amber-400/80 group-hover:bg-amber-500/90 transition duration-500 ease-in-out flex flex-col justify-center items-center">
//                             <h3 className="text-3xl font-bold text-white mb-2">Sit Ups</h3>
//                             <p className="text-lg text-white">More than just abs, it's core fitness.</p>
//                         </div>
//                         <img className="object-cover w-full h-full" src="sitUps.png" alt="Sit Ups" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;

import { Link } from "react-router-dom"

// import { button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Heart, BarChart3, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        <section className="py-12 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Your Personal</span>{" "}
                  <span className="block text-primary xl:inline">Fitness Journey</span>
                </h1>
                <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Track your workouts, monitor your progress, and achieve your fitness goals with FitTrack. Your
                  all-in-one health and fitness companion.
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <button size="lg" className="w-full sm:w-auto flex items-center">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <img
                    className="w-full rounded-lg"
                    src="./home_side.jpg"
                    alt="App screenshot"
                    width={400}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-12 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
                Everything you need to stay fit
              </p>
              <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
                FitTrack provides all the tools you need to track your fitness journey and achieve your goals.
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    name: "Workout Tracking",
                    description: "Log your exercises, sets, reps, and weights with ease.",
                    icon: Smartphone,
                  },
                  {
                    name: "Health Monitoring",
                    description: "Keep track of your vital signs and overall health metrics.",
                    icon: Heart,
                  },
                  {
                    name: "Progress Analytics",
                    description: "Visualize your fitness journey with detailed charts and graphs.",
                    icon: BarChart3,
                  },
                  {
                    name: "Community Support",
                    description: "Connect with friends and join challenges for extra motivation.",
                    icon: Users,
                  },
                ].map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-background">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-primary">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-muted-foreground">{feature.description}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
                <span className="block">Ready to start your fitness journey?</span>
                <span className="block text-primary">Download FitTrack today.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
                Join thousands of users who have transformed their lives with FitTrack. Available on iOS and Android.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <button size="lg" className="flex items-center p-1">
                    Download Now
                  </button>
                </div>
                <div className="ml-3 inline-flex">
                  <button size="lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-base text-muted-foreground">&copy; 2025 FitTrack. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Privacy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

