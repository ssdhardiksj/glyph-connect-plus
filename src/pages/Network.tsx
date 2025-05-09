
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UserPlus, Briefcase, Plus, X } from "lucide-react";

const Network = () => {
  const [pendingConnectionsCount, setPendingConnectionsCount] = useState(5);

  // Mock data
  const pendingConnections = [
    {
      id: 1,
      name: "Robert Johnson",
      title: "Software Engineer at Tech Co",
      avatar: "https://i.pravatar.cc/150?img=10",
      initials: "RJ",
      mutualConnections: 12
    },
    {
      id: 2,
      name: "Lisa Williams",
      title: "Marketing Director at Brand Inc",
      avatar: "https://i.pravatar.cc/150?img=25",
      initials: "LW",
      mutualConnections: 8
    },
    {
      id: 3,
      name: "David Chen",
      title: "Data Analyst at Analytics Group",
      avatar: "https://i.pravatar.cc/150?img=15",
      initials: "DC",
      mutualConnections: 5
    },
    {
      id: 4,
      name: "Sarah Miller",
      title: "UX Researcher at Design Studio",
      avatar: "https://i.pravatar.cc/150?img=32",
      initials: "SM",
      mutualConnections: 3
    },
    {
      id: 5,
      name: "Carlos Rodriguez",
      title: "Full Stack Developer at WebTech",
      avatar: "https://i.pravatar.cc/150?img=48",
      initials: "CR",
      mutualConnections: 15
    }
  ];

  const suggestions = [
    {
      id: 1,
      name: "Alex Morgan",
      title: "Product Manager at Innovate Inc",
      avatar: "https://i.pravatar.cc/150?img=12",
      initials: "AM",
      mutualConnections: 18
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "UI Designer at Creative Studios",
      avatar: "https://i.pravatar.cc/150?img=28",
      initials: "PS",
      mutualConnections: 11
    },
    {
      id: 3,
      name: "Michael Wilson",
      title: "Growth Marketer at ScaleUp",
      avatar: "https://i.pravatar.cc/150?img=50",
      initials: "MW",
      mutualConnections: 9
    },
    {
      id: 4,
      name: "Jordan Lee",
      title: "Frontend Developer at WebApp",
      avatar: "https://i.pravatar.cc/150?img=19",
      initials: "JL",
      mutualConnections: 7
    },
    {
      id: 5,
      name: "Emma Thompson",
      title: "Content Strategist at Media Group",
      avatar: "https://i.pravatar.cc/150?img=33",
      initials: "ET",
      mutualConnections: 4
    },
    {
      id: 6,
      name: "Ryan Kim",
      title: "iOS Developer at Mobile Tech",
      avatar: "https://i.pravatar.cc/150?img=41",
      initials: "RK",
      mutualConnections: 6
    }
  ];

  const handleIgnoreConnection = (id: number) => {
    setPendingConnectionsCount(prevCount => prevCount - 1);
    // In a real app, you would remove this connection from the list
  };

  const handleAcceptConnection = (id: number) => {
    setPendingConnectionsCount(prevCount => prevCount - 1);
    // In a real app, you would accept this connection and move it to connections
  };

  return (
    <div className="space-y-5">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Manage my network</CardTitle>
            <span className="text-gray-500">{pendingConnectionsCount}</span>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="divide-y">
            <li>
              <Button variant="ghost" className="w-full justify-start rounded-none p-3 h-auto">
                <UserPlus className="h-5 w-5 mr-3 text-gray-500" />
                <span className="font-normal">Connections</span>
                <span className="ml-auto text-sm text-gray-500">486</span>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start rounded-none p-3 h-auto text-linkedin-blue">
                <Users className="h-5 w-5 mr-3" />
                <span className="font-normal">Pending invitations</span>
                <span className="ml-auto text-sm">{pendingConnectionsCount}</span>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start rounded-none p-3 h-auto">
                <Briefcase className="h-5 w-5 mr-3 text-gray-500" />
                <span className="font-normal">People I follow</span>
                <span className="ml-auto text-sm text-gray-500">28</span>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start rounded-none p-3 h-auto">
                <Users className="h-5 w-5 mr-3 text-gray-500" />
                <span className="font-normal">Groups</span>
                <span className="ml-auto text-sm text-gray-500">12</span>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start rounded-none p-3 h-auto">
                <Users className="h-5 w-5 mr-3 text-gray-500" />
                <span className="font-normal">Events</span>
                <span className="ml-auto text-sm text-gray-500">6</span>
              </Button>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Tabs defaultValue="pending">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="pending" className="flex-1">Invitations</TabsTrigger>
          <TabsTrigger value="suggestions" className="flex-1">Suggestions</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4 mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Pending invitations ({pendingConnectionsCount})</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y">
                {pendingConnections.map(connection => (
                  <li key={connection.id} className="p-4">
                    <div className="flex items-start">
                      <Avatar className="h-12 w-12 mr-3">
                        <AvatarImage src={connection.avatar} alt={connection.name} />
                        <AvatarFallback>{connection.initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow">
                        <h3 className="font-medium">{connection.name}</h3>
                        <p className="text-sm text-gray-600">{connection.title}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {connection.mutualConnections} mutual connections
                        </p>
                        
                        <div className="flex mt-3 space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-gray-400"
                            onClick={() => handleIgnoreConnection(connection.id)}
                          >
                            <X className="h-4 w-4 mr-1" />
                            Ignore
                          </Button>
                          <Button 
                            variant="default" 
                            size="sm" 
                            className="bg-linkedin-blue hover:bg-linkedin-darkBlue"
                            onClick={() => handleAcceptConnection(connection.id)}
                          >
                            <Plus className="h-4 w-4 mr-1" />
                            Accept
                          </Button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suggestions" className="mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">People you may know</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {suggestions.map(suggestion => (
                  <Card key={suggestion.id} className="border">
                    <CardContent className="p-3">
                      <div className="flex items-start">
                        <Avatar className="h-12 w-12 mr-3">
                          <AvatarImage src={suggestion.avatar} alt={suggestion.name} />
                          <AvatarFallback>{suggestion.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                          <h3 className="font-medium text-sm">{suggestion.name}</h3>
                          <p className="text-xs text-gray-600 line-clamp-2">{suggestion.title}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {suggestion.mutualConnections} mutual connections
                          </p>
                          
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-2 text-xs h-7"
                          >
                            <Plus className="h-3 w-3 mr-1" />
                            Connect
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="p-4 text-center">
                <Button variant="outline" className="w-full">
                  Show more
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Network;
