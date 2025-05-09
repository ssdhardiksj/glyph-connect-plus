
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, FileText, Calendar, Users } from "lucide-react";

const CreatePost = () => {
  return (
    <Card className="mb-4">
      <CardContent className="pt-4">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=59" alt="User avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button 
            variant="outline" 
            className="flex-1 justify-start text-gray-500 bg-gray-100 hover:bg-gray-200 border border-gray-300"
          >
            Start a post
          </Button>
        </div>
        
        <div className="flex justify-between mt-3">
          <Button variant="ghost" className="flex-1 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
            <Image className="h-5 w-5 mr-2 text-blue-500" />
            Photo
          </Button>
          <Button variant="ghost" className="flex-1 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
            <Calendar className="h-5 w-5 mr-2 text-amber-500" />
            Event
          </Button>
          <Button variant="ghost" className="flex-1 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
            <FileText className="h-5 w-5 mr-2 text-orange-500" />
            Article
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
