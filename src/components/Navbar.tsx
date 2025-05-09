
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Home, 
  Briefcase, 
  Users, 
  MessageSquare, 
  Bell,
  User,
  Moon,
  Sun,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useDarkMode } from "@/context/DarkModeContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const navigationItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Network", path: "/network", icon: Users },
    { name: "Jobs", path: "/jobs", icon: Briefcase },
    { name: "Messages", path: "/messages", icon: MessageSquare },
    { name: "Notifications", path: "/notifications", icon: Bell },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 shadow-sm backdrop-blur-md bg-opacity-90 dark:bg-opacity-90"
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link to="/" className="flex items-center">
              <svg className="w-8 h-8 text-linkedin-blue dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM9 17H6.5v-7H9v7zM7.7 8.7c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm10.3 8.3h-2.5v-3.9c0-1-.7-1.6-1.4-1.6s-1.6.7-1.6 1.6v3.9h-2.5v-7h2.5v1s.8-1 2.2-1c1.4 0 2.8 1.1 2.8 3.1v3.9z" />
              </svg>
              {!isMobile && (
                <span className="font-bold text-xl ml-1 text-linkedin-blue dark:text-white">ProfessionalNet</span>
              )}
            </Link>
            
            {!isMobile && (
              <div className="relative w-64">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  placeholder="Search"
                  className="pl-10 bg-linkedin-gray dark:bg-gray-700 border-none dark:text-white"
                />
              </div>
            )}
          </div>

          <nav className="flex items-center">
            <ul className="flex items-center space-x-1 md:space-x-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex flex-col items-center p-2 text-xs hover-effect ${
                      location.pathname === item.path
                        ? "text-linkedin-blue dark:text-linkedin-lightBlue border-b-2 border-linkedin-blue dark:border-linkedin-lightBlue"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    <item.icon className="h-5 w-5 mb-0.5" />
                    {!isMobile && <span>{item.name}</span>}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/profile"
                  className={`flex flex-col items-center p-2 text-xs hover-effect ${
                    location.pathname === "/profile"
                      ? "text-linkedin-blue dark:text-linkedin-lightBlue border-b-2 border-linkedin-blue dark:border-linkedin-lightBlue"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  <User className="h-5 w-5 mb-0.5" />
                  {!isMobile && <span>Profile</span>}
                </Link>
              </li>
              <li>
                <Button 
                  onClick={toggleDarkMode} 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-600 dark:text-gray-300"
                >
                  {isDarkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              </li>
            </ul>
            {!isMobile && (
              <Button variant="default" className="ml-4 bg-linkedin-blue hover:bg-linkedin-darkBlue">
                Upgrade
              </Button>
            )}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
