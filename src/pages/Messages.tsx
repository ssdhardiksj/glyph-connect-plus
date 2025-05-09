
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Edit, MoreHorizontal, Send, Paperclip, Image } from "lucide-react";

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);
  const [messageText, setMessageText] = useState("");
  
  const conversations = [
    {
      id: 1,
      user: {
        name: "Alex Morgan",
        avatar: "https://i.pravatar.cc/150?img=12",
        initials: "AM",
        status: "online" as const,
      },
      lastMessage: "That sounds great! Let's schedule a call to discuss the details.",
      time: "2m",
      unread: true,
    },
    {
      id: 2,
      user: {
        name: "Samantha Lee",
        avatar: "https://i.pravatar.cc/150?img=23",
        initials: "SL",
        status: "offline" as const,
      },
      lastMessage: "Thanks for the information about the project. I'll review it and get back to you.",
      time: "1h",
      unread: false,
    },
    {
      id: 3,
      user: {
        name: "David Chen",
        avatar: "https://i.pravatar.cc/150?img=15",
        initials: "DC",
        status: "online" as const,
      },
      lastMessage: "I've attached the proposal for your review.",
      time: "3h",
      unread: false,
    },
    {
      id: 4,
      user: {
        name: "Emma Wilson",
        avatar: "https://i.pravatar.cc/150?img=45",
        initials: "EW",
        status: "offline" as const,
      },
      lastMessage: "Looking forward to our team meeting tomorrow!",
      time: "1d",
      unread: false,
    }
  ];
  
  const messageHistory = [
    {
      id: 1,
      senderId: 2,
      text: "Hi Jane! I saw your portfolio and I'm really impressed with your work.",
      time: "2:34 PM"
    },
    {
      id: 2,
      senderId: 1,
      text: "Thanks Alex! I appreciate you taking the time to look through my projects.",
      time: "2:36 PM"
    },
    {
      id: 3,
      senderId: 2,
      text: "I'm actually working on a new project that might be perfect for your skills. It's a redesign of our company's mobile app.",
      time: "2:38 PM"
    },
    {
      id: 4,
      senderId: 1,
      text: "That sounds interesting! I'd love to hear more about it.",
      time: "2:40 PM"
    },
    {
      id: 5,
      senderId: 2,
      text: "Great! I can share some more details about what we're looking for. Basically, we need to improve the user onboarding flow and make the overall navigation more intuitive.",
      time: "2:42 PM"
    },
    {
      id: 6,
      senderId: 2,
      text: "Would you be interested in discussing this further? Maybe we could set up a call?",
      time: "2:43 PM"
    },
    {
      id: 7,
      senderId: 1,
      text: "That sounds great! Let's schedule a call to discuss the details.",
      time: "2:45 PM"
    }
  ];
  
  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, you would add the message to the conversation
      setMessageText("");
    }
  };
  
  return (
    <div className="h-[calc(100vh-120px)] md:min-h-[600px]">
      <Card className="h-full">
        <div className="grid md:grid-cols-3 h-full">
          <div className="md:col-span-1 border-r">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Messaging</CardTitle>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative mt-2">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                <Input placeholder="Search messages" className="pl-9" />
              </div>
            </CardHeader>
            
            <Tabs defaultValue="primary">
              <TabsList className="w-full">
                <TabsTrigger value="primary" className="flex-1 text-xs">Primary</TabsTrigger>
                <TabsTrigger value="general" className="flex-1 text-xs">General</TabsTrigger>
                <TabsTrigger value="requests" className="flex-1 text-xs">
                  Requests
                  <span className="ml-1 bg-red-500 text-white text-[10px] rounded-full px-1.5">2</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="primary" className="m-0 max-h-[calc(100vh-230px)] overflow-y-auto">
                <div className="divide-y">
                  {conversations.map((convo) => (
                    <button
                      key={convo.id}
                      className={`w-full text-left p-3 hover:bg-gray-50 ${selectedConversation === convo.id ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedConversation(convo.id)}
                    >
                      <div className="flex items-start">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={convo.user.avatar} alt={convo.user.name} />
                            <AvatarFallback>{convo.user.initials}</AvatarFallback>
                          </Avatar>
                          {convo.user.status === "online" && (
                            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white"></span>
                          )}
                        </div>
                        <div className="ml-3 flex-1 overflow-hidden">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-sm truncate">{convo.user.name}</h3>
                            <span className="text-xs text-gray-500">{convo.time}</span>
                          </div>
                          <p className={`text-xs ${convo.unread ? 'font-semibold text-gray-900' : 'text-gray-500'} truncate`}>
                            {convo.lastMessage}
                          </p>
                        </div>
                        {convo.unread && (
                          <div className="ml-2 h-2 w-2 rounded-full bg-linkedin-blue"></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="general" className="m-0 h-[calc(100vh-230px)] flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-gray-500 mb-3">No messages in General tab</p>
                  <Button variant="outline">Start a conversation</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="requests" className="m-0 h-[calc(100vh-230px)] flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-gray-500 mb-2">You have 2 pending message requests</p>
                  <Button className="bg-linkedin-blue hover:bg-linkedin-darkBlue">View requests</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="md:col-span-2 flex flex-col h-full">
            {selectedConversation ? (
              <>
                <div className="border-b p-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10">
                      <AvatarImage 
                        src={conversations.find(c => c.id === selectedConversation)?.user.avatar} 
                        alt={conversations.find(c => c.id === selectedConversation)?.user.name} 
                      />
                      <AvatarFallback>
                        {conversations.find(c => c.id === selectedConversation)?.user.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <h3 className="font-medium text-sm">
                        {conversations.find(c => c.id === selectedConversation)?.user.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {conversations.find(c => c.id === selectedConversation)?.user.status === "online"
                          ? "Online"
                          : "Offline"}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Search className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                  {messageHistory.map((message) => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.senderId === 1 ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.senderId !== 1 && (
                        <Avatar className="h-8 w-8 mr-2 mt-1">
                          <AvatarImage src={conversations[0].user.avatar} alt={conversations[0].user.name} />
                          <AvatarFallback>{conversations[0].user.initials}</AvatarFallback>
                        </Avatar>
                      )}
                      <div className={`max-w-[75%] rounded-lg p-3 ${
                        message.senderId === 1 
                          ? 'bg-linkedin-blue text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-[10px] mt-1 ${
                          message.senderId === 1 ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t p-3">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <Paperclip className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <Image className="h-5 w-5" />
                    </Button>
                    <Input 
                      placeholder="Write a message..." 
                      className="flex-1"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className={`h-9 w-9 ${messageText.trim() ? 'text-linkedin-blue' : 'text-gray-400'}`}
                      onClick={handleSendMessage}
                    >
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Select a conversation</h3>
                  <p className="text-sm text-gray-500">Choose a conversation from the list to start messaging.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Messages;
