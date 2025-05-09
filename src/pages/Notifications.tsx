
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, Heart, MessageSquare } from "lucide-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "reaction",
      title: "James Wilson liked your post",
      content: "Great insights on the future of UX design!",
      time: "2h",
      user: {
        name: "James Wilson",
        avatar: "https://i.pravatar.cc/150?img=7",
        initials: "JW",
      },
      read: false,
      icon: <Heart className="h-5 w-5 text-red-500" />,
    },
    {
      id: 2,
      type: "comment",
      title: "Sarah Lee commented on your post",
      content: "I completely agree with your points, especially about user research. Great insights!",
      time: "5h",
      user: {
        name: "Sarah Lee",
        avatar: "https://i.pravatar.cc/150?img=24",
        initials: "SL",
      },
      read: false,
      icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
    },
    {
      id: 3,
      type: "connection",
      title: "Maria Garcia accepted your connection request",
      content: "You are now connected with Maria Garcia",
      time: "1d",
      user: {
        name: "Maria Garcia",
        avatar: "https://i.pravatar.cc/150?img=16",
        initials: "MG",
      },
      read: true,
      icon: <Users className="h-5 w-5 text-green-500" />,
    },
    {
      id: 4,
      type: "reaction",
      title: "John Davis and 15 others liked your comment",
      content: "The most valuable skill in tech today is problem-solving.",
      time: "2d",
      user: {
        name: "John Davis",
        avatar: "https://i.pravatar.cc/150?img=31",
        initials: "JD",
      },
      read: true,
      icon: <Heart className="h-5 w-5 text-red-500" />,
    },
    {
      id: 5,
      type: "mention",
      title: "Lisa Wong mentioned you in a post",
      content: "Thanks to @Jane Doe for her amazing contributions to the project!",
      time: "3d",
      user: {
        name: "Lisa Wong",
        avatar: "https://i.pravatar.cc/150?img=43",
        initials: "LW",
      },
      read: true,
      icon: <AtSign className="h-5 w-5 text-purple-500" />,
    }
  ];

  return (
    <div className="space-y-5">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Notifications</CardTitle>
            <Button variant="ghost" size="sm">
              Mark all as read
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="divide-y">
            {notifications.map((notification) => (
              <li 
                key={notification.id} 
                className={`p-4 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50/30' : ''}`}
              >
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                      <AvatarFallback>{notification.user.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-sm">{notification.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{notification.content}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="ml-2 p-2">{notification.icon}</div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 ml-1">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="p-4 text-center border-t">
            <Button variant="outline" className="w-full">
              View all notifications
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Import this at the top of the file
import { AtSign, Users } from "lucide-react";

export default Notifications;
