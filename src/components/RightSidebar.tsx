
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Info } from "lucide-react";
import { motion } from "framer-motion";

const RightSidebar = () => {
  const suggestedConnections = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Software Engineer at Tech Corp",
      avatar: "https://i.pravatar.cc/150?img=3",
      initials: "AJ",
    },
    {
      id: 2,
      name: "Morgan Lee",
      role: "Marketing Manager at Brand Inc",
      avatar: "https://i.pravatar.cc/150?img=5",
      initials: "ML",
    },
    {
      id: 3,
      name: "Taylor Smith",
      role: "Data Scientist at Analytics Co",
      avatar: "https://i.pravatar.cc/150?img=8",
      initials: "TS",
    },
  ];

  const trendingNews = [
    {
      id: 1,
      title: "Tech industry sees major growth despite economic challenges",
      readers: "15,642",
      time: "3d",
    },
    {
      id: 2,
      title: "Remote work trends continue to evolve post-pandemic",
      readers: "8,291",
      time: "6h",
    },
    {
      id: 3,
      title: "New AI developments reshaping multiple industries",
      readers: "12,470",
      time: "1d",
    },
  ];

  return (
    <div className="space-y-4 sticky top-20">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="glass-card hover:shadow-card-hover dark:hover:shadow-dark-card-hover transition-all duration-300">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-base dark:text-white">Add to your network</CardTitle>
              <Info className="h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="space-y-4">
              {suggestedConnections.map((person) => (
                <motion.li 
                  key={person.id} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: person.id * 0.1 }}
                >
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={person.avatar} alt={person.name} />
                    <AvatarFallback>{person.initials}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3 flex-1">
                    <p className="font-medium text-sm dark:text-gray-200">{person.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{person.role}</p>
                    <Button variant="outline" size="sm" className="mt-2 text-xs h-7 rounded-full hover:bg-linkedin-blue hover:text-white dark:hover:bg-linkedin-lightBlue dark:text-gray-300 transition-colors">
                      <Plus className="h-3 w-3 mr-1" />
                      Connect
                    </Button>
                  </div>
                </motion.li>
              ))}
            </ul>
            <Button variant="link" className="w-full text-sm text-gray-600 dark:text-gray-400 mt-2 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
              View all recommendations
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="glass-card hover:shadow-card-hover dark:hover:shadow-dark-card-hover transition-all duration-300">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-base dark:text-white">Trending news</CardTitle>
              <Info className="h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="space-y-3">
              {trendingNews.map((news) => (
                <motion.li 
                  key={news.id} 
                  className="pb-3 last:pb-0 border-b last:border-b-0 dark:border-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: news.id * 0.1 }}
                >
                  <a href="#" className="hover:bg-gray-50 dark:hover:bg-gray-700 block -m-1 p-1 rounded-md transition-colors">
                    <h4 className="font-medium text-sm dark:text-gray-200">{news.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {news.readers} readers • {news.time} ago
                    </p>
                  </a>
                </motion.li>
              ))}
            </ul>
            <Button variant="link" className="w-full text-sm text-gray-600 dark:text-gray-400 mt-2 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
              Show more
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default RightSidebar;
