
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Bookmark } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="space-y-4 sticky top-20">
      <Card className="overflow-hidden">
        <div className="h-16 bg-gradient-to-r from-linkedin-blue to-linkedin-lightBlue" />
        <CardContent className="pt-0 relative pb-4">
          <div className="flex flex-col items-center">
            <Avatar className="w-20 h-20 border-4 border-white -mt-10">
              <AvatarImage src="https://i.pravatar.cc/150?img=59" alt="User avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Link to="/profile" className="mt-2 font-semibold text-lg hover:underline text-center">
              Jane Doe
            </Link>
            <p className="text-sm text-gray-500 text-center">
              Senior Product Designer at Design Company
            </p>
          </div>
          
          <div className="border-t mt-4 pt-3">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Profile views</span>
              <span className="font-semibold text-linkedin-blue">432</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Post impressions</span>
              <span className="font-semibold text-linkedin-blue">1,256</span>
            </div>
          </div>
          
          <div className="border-t mt-3 pt-3">
            <Link to="/saved" className="flex items-center text-sm text-gray-600 hover:bg-gray-100 p-2 rounded-md">
              <Bookmark className="h-4 w-4 mr-2" />
              <span>My saved items</span>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h3 className="text-sm font-medium mb-3">Recent</h3>
          <ul className="space-y-2">
            {['UX Design Group', 'Product Management', 'Frontend Development', 'Startup Network'].map((group, index) => (
              <li key={index}>
                <Link to="#" className="text-xs text-gray-600 hover:text-linkedin-blue flex items-center">
                  <span className="mr-2 text-gray-500">#</span>
                  {group}
                </Link>
              </li>
            ))}
          </ul>
          <button className="text-sm text-gray-600 font-medium mt-3 hover:text-linkedin-blue">
            Groups
          </button>
          <div className="flex items-center justify-between mt-3">
            <button className="text-sm text-gray-600 font-medium hover:text-linkedin-blue">
              Events
            </button>
            <span className="text-linkedin-blue text-sm font-bold">+</span>
          </div>
          <button className="text-sm text-gray-600 font-medium mt-3 hover:text-linkedin-blue">
            Followed Hashtags
          </button>
          <div className="border-t mt-3 pt-3">
            <button className="text-sm text-center w-full text-gray-600 font-medium hover:text-linkedin-blue">
              Discover more
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
