import { Link } from "react-router-dom";
import {useState, useEffect} from "react";

export default function Header() {
  const [isToken, setIsToken] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('auth');
    if(token != null) {
      setIsToken(true);
    } 
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('auth');
    window.location.reload();
  }

    return(<header className="py-4 px-4 sm:px-6 lg:px-8 z-2">

        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Healthy Hive
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/challenges" className="text-muted-foreground hover:text-primary">
              Challenges
            </Link>
            <Link to="/leaderboard" className="text-muted-foreground hover:text-primary">
              Leaderboard
            </Link>
            <Link to="/Competion" className="text-muted-foreground hover:text-primary">
              Create Competion
            </Link>
          </nav>
          <div className="flex items-center">
            <button className="text-2xl block md:hidden" onClick={() => setShowMenu(!showMenu)}>{showMenu?<p>&#x2715;</p>:<p>&#9776;</p>}</button>
          {!isToken ?
          (<nav className="flex items-center">
          <Link className="p-1 pl-2 pr-2 bg-black rounded-full ml-2 text-white" to="/signin">Sign In</Link>
          </nav>):
          (<nav className="flex items-center">
            <button className="p-1 pl-2 pr-2 bg-black rounded-full ml-2 text-white" onClick={handleSignOut}>Sign Out</button>
          </nav>)
        }
        </div>
        </div>
        {showMenu && (<nav className="flex flex-col items-center justify-center md:hidden p-4 text-center">
            <Link to="/challenges" className="text-muted-foreground hover:font-bold w-full text-center">
              Challenges
            </Link>
            <Link to="/leaderboard" className="text-muted-foreground hover:font-bold w-full text-center">
              Leaderboard
            </Link>
            <Link href="#" className="text-muted-foreground hover:font-bold w-full text-center">About</Link>
          </nav>)}
      </header>);
}