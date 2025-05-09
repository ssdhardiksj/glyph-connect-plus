
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Layout = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-linkedin-gray dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <div className="container mx-auto px-2 md:px-4 pt-20 pb-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-3 lg:gap-5"
        >
          {!isMobile && (
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-full md:w-1/4 lg:w-1/5 md:sticky md:top-20 md:self-start"
            >
              <Sidebar />
            </motion.div>
          )}
          <motion.main 
            className="flex-1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            key={location.pathname}
          >
            <Outlet />
          </motion.main>
          {!isMobile && (
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="w-full md:w-1/4 lg:w-1/4 md:sticky md:top-20 md:self-start"
            >
              <RightSidebar />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Layout;
