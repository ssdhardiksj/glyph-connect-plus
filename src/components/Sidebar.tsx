
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Bookmark } from "lucide-react";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <div className="space-y-4 sticky top-20">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="overflow-hidden glass-card">
          <div className="h-16 bg-gradient-to-r from-linkedin-blue to-linkedin-lightBlue" />
          <CardContent className="pt-0 relative pb-4">
            <div className="flex flex-col items-center">
              <Avatar className="w-20 h-20 border-4 border-white dark:border-gray-800 -mt-10 hover:scale-105 transition-transform duration-300">
                <AvatarImage src="https://i.pravatar.cc/150?img=59" alt="User avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Link to="/profile" className="mt-2 font-semibold text-lg hover:underline text-center group">
                <span className="group-hover:text-linkedin-blue dark:group-hover:text-linkedin-lightBlue transition-colors">Jane Doe</span>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Senior Product Designer at Design Company
              </p>
            </div>
            
            <div className="border-t dark:border-gray-700 mt-4 pt-3">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>Profile views</span>
                <span className="font-semibold text-linkedin-blue dark:text-linkedin-lightBlue">432</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                <span>Post impressions</span>
                <span className="font-semibold text-linkedin-blue dark:text-linkedin-lightBlue">1,256</span>
              </div>
            </div>
            
            <div className="border-t dark:border-gray-700 mt-3 pt-3">
              <Link to="/saved" className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md group">
                <Bookmark className="h-4 w-4 mr-2 group-hover:text-linkedin-blue dark:group-hover:text-linkedin-lightBlue transition-colors" />
                <span className="group-hover:text-linkedin-blue dark:group-hover:text-linkedin-lightBlue transition-colors">My saved items</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="glass-card">
          <CardContent className="p-4">
            <h3 className="text-sm font-medium mb-3 dark:text-gray-300">Recent</h3>
            <ul className="space-y-2">
              {['UX Design Group', 'Product Management', 'Frontend Development', 'Startup Network'].map((group, index) => (
                <li key={index}>
                  <Link to="#" className="text-xs text-gray-600 dark:text-gray-400 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue flex items-center group">
                    <span className="mr-2 text-gray-500 dark:text-gray-500 group-hover:text-linkedin-blue dark:group-hover:text-linkedin-lightBlue transition-colors">#</span>
                    <span className="group-hover:text-linkedin-blue dark:group-hover:text-linkedin-lightBlue transition-colors">{group}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <button className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-3 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
              Groups
            </button>
            <div className="flex items-center justify-between mt-3">
              <button className="text-sm text-gray-600 dark:text-gray-400 font-medium hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                Events
              </button>
              <span className="text-linkedin-blue dark:text-linkedin-lightBlue text-sm font-bold">+</span>
            </div>
            <button className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-3 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
              Followed Hashtags
            </button>
            <div className="border-t dark:border-gray-700 mt-3 pt-3">
              <button className="text-sm text-center w-full text-gray-600 dark:text-gray-400 font-medium hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                Discover more
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Sidebar;
