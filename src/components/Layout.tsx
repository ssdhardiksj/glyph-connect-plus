
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-linkedin-gray">
      <Navbar />
      <div className="container mx-auto px-2 md:px-4 pt-20 pb-8">
        <div className="flex flex-col md:flex-row gap-5">
          {!isMobile && (
            <div className="w-full md:w-1/4">
              <Sidebar />
            </div>
          )}
          <main className="flex-1">
            <Outlet />
          </main>
          {!isMobile && (
            <div className="w-full md:w-1/4">
              <RightSidebar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
