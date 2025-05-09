
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, FileText, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

const CreatePost = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="mb-4 glass-card overflow-hidden hover:shadow-card-hover dark:hover:shadow-dark-card-hover transition-all duration-300">
        <CardContent className="pt-4">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=59" alt="User avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button 
              variant="outline" 
              className="flex-1 justify-start text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-full"
            >
              Start a post
            </Button>
          </div>
          
          <div className="flex justify-between mt-3">
            <Button variant="ghost" className="flex-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white group">
              <Image className="h-5 w-5 mr-2 text-blue-500 group-hover:scale-110 transition-transform" />
              Photo
            </Button>
            <Button variant="ghost" className="flex-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white group">
              <Calendar className="h-5 w-5 mr-2 text-amber-500 group-hover:scale-110 transition-transform" />
              Event
            </Button>
            <Button variant="ghost" className="flex-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white group">
              <FileText className="h-5 w-5 mr-2 text-orange-500 group-hover:scale-110 transition-transform" />
              Article
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CreatePost;
