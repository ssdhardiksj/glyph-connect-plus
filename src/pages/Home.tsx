
import CreatePost from "@/components/CreatePost";
import Post from "@/components/Post";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const Home = () => {
  const isMobile = useIsMobile();
  
  const posts = [
    {
      id: 1,
      user: {
        name: "Sarah Williams",
        title: "UX Designer | Creating intuitive digital experiences",
        avatar: "https://i.pravatar.cc/150?img=23",
        initials: "SW",
      },
      content: {
        text: "Just published my case study on redesigning the user onboarding experience for a fintech app. Reduced drop-off by 32% and increased user activation by 24%. Check it out!",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      },
      engagement: {
        likes: 243,
        comments: 42,
        shares: 15,
      },
      time: "3h",
    },
    {
      id: 2,
      user: {
        name: "Michael Rodriguez",
        title: "Engineering Manager at TechGrowth Inc.",
        avatar: "https://i.pravatar.cc/150?img=68",
        initials: "MR",
      },
      content: {
        text: "Excited to announce we're hiring for multiple engineering roles! We're looking for talented individuals who are passionate about building products that impact millions of users. DM me if you're interested or know someone who might be!",
      },
      engagement: {
        likes: 189,
        comments: 27,
        shares: 34,
      },
      time: "1d",
    },
    {
      id: 3,
      user: {
        name: "Emily Chen",
        title: "Product Marketing Manager | Tech Enthusiast",
        avatar: "https://i.pravatar.cc/150?img=47",
        initials: "EC",
      },
      content: {
        text: "Had a great time speaking on the 'Future of Work' panel at the Tech Summit today. Fascinating discussions about hybrid workplaces, asynchronous collaboration, and building company culture remotely.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
      engagement: {
        likes: 421,
        comments: 56,
        shares: 23,
      },
      time: "5h",
    },
  ];
  
  return (
    <div className="space-y-4">
      {isMobile && (
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1">
                Create Post
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                Share Photo
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {!isMobile && <CreatePost />}
      
      <div className="space-y-4">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
        
        <div className="text-center pt-2">
          <Button variant="ghost" className="text-linkedin-blue hover:bg-blue-50">
            Show more posts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
