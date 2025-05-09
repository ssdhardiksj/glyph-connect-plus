
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Layout = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-linkedin-gray dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <div className="container mx-auto px-2 md:px-4 pt-20 pb-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-5"
        >
          {!isMobile && (
            <div className="w-full md:w-1/4">
              <Sidebar />
            </div>
          )}
          <motion.main 
            className="flex-1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Outlet />
          </motion.main>
          {!isMobile && (
            <div className="w-full md:w-1/4">
              <RightSidebar />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Layout;
