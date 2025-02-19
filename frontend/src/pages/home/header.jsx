import { Link } from "react-router-dom";

export default function Header() {
    return(      <header className="py-4 px-4 sm:px-6 lg:px-8 z-2">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Healthy Hive
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#features" className="text-muted-foreground hover:text-primary">
              Features
            </Link>
            <Link to="/leaderboard" className="text-muted-foreground hover:text-primary">
              Leaderboard
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              About
            </Link>
          </nav>
          <nav>
          <Link className="p-1 pl-2 pr-2 bg-black rounded-full ml-2 text-white" to="/signin">Sign In</Link>
          <Link className="p-1 pl-2 pr-2 bg-black rounded-full ml-2 text-white" to="/signup">Sign Up</Link>
          </nav>
        </div>
      </header>);
}