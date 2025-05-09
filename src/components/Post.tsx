
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Heart, Share, Bookmark } from "lucide-react";

interface PostProps {
  id: number;
  user: {
    name: string;
    title: string;
    avatar: string;
    initials: string;
  };
  content: {
    text: string;
    image?: string;
  };
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
  time: string;
}

const Post = ({ user, content, engagement, time }: PostProps) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(engagement.likes);
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  
  return (
    <Card className="mb-4">
      <CardHeader className="pb-3 pt-4">
        <div className="flex items-start">
          <Avatar className="h-12 w-12">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <div className="font-semibold text-sm">{user.name}</div>
            <div className="text-xs text-gray-500">{user.title}</div>
            <div className="text-xs text-gray-500 flex items-center">
              {time} • <span className="ml-1">🌐</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-2">
        <p className="text-sm mb-4">{content.text}</p>
        {content.image && (
          <div className="relative aspect-video w-full overflow-hidden rounded-md">
            <img
              src={content.image}
              alt="Post"
              className="h-full w-full object-cover"
            />
          </div>
        )}
        
        {(engagement.likes > 0 || engagement.comments > 0) && (
          <div className="flex justify-between items-center mt-4 pt-2 text-xs text-gray-500">
            <div className="flex items-center">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-linkedin-blue text-white text-xs mr-1">
                👍
              </span>
              <span>{likeCount}</span>
            </div>
            {engagement.comments > 0 && (
              <button className="hover:underline">
                {engagement.comments} comments
              </button>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t pt-1 pb-1">
        <div className="flex justify-between w-full">
          <Button
            variant="ghost"
            size="sm"
            className={`flex-1 ${liked ? 'text-linkedin-blue' : 'text-gray-500'} hover:bg-gray-100`}
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 mr-1 ${liked ? 'fill-linkedin-blue' : ''}`} />
            <span className="text-xs">Like</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 text-gray-500 hover:bg-gray-100"
          >
            <MessageSquare className="h-4 w-4 mr-1" />
            <span className="text-xs">Comment</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 text-gray-500 hover:bg-gray-100"
          >
            <Share className="h-4 w-4 mr-1" />
            <span className="text-xs">Share</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`flex-1 ${saved ? 'text-linkedin-blue' : 'text-gray-500'} hover:bg-gray-100`}
            onClick={() => setSaved(!saved)}
          >
            <Bookmark className={`h-4 w-4 mr-1 ${saved ? 'fill-linkedin-blue' : ''}`} />
            <span className="text-xs">Save</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Post;
