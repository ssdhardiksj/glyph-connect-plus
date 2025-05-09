
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Bookmark, Briefcase } from "lucide-react";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const jobListings = [
    {
      id: 1,
      title: "Senior Product Designer",
      company: "Design Innovation Inc.",
      location: "San Francisco, CA (Remote)",
      logo: "https://i.pravatar.cc/48?img=1",
      postedTime: "2 days ago",
      applicants: 28,
      isEasyApply: true,
      isSaved: false
    },
    {
      id: 2,
      title: "UX Researcher",
      company: "Tech Solutions Group",
      location: "New York, NY (Hybrid)",
      logo: "https://i.pravatar.cc/48?img=2",
      postedTime: "3 days ago",
      applicants: 42,
      isEasyApply: true,
      isSaved: true
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Apps Co.",
      location: "Austin, TX (On-site)",
      logo: "https://i.pravatar.cc/48?img=3",
      postedTime: "1 day ago",
      applicants: 15,
      isEasyApply: false,
      isSaved: false
    },
    {
      id: 4,
      title: "Product Design Lead",
      company: "Startup Ventures",
      location: "Remote",
      logo: "https://i.pravatar.cc/48?img=4",
      postedTime: "Just now",
      applicants: 5,
      isEasyApply: true,
      isSaved: false
    },
    {
      id: 5,
      title: "Interaction Designer",
      company: "Mobile First Inc.",
      location: "Seattle, WA (Hybrid)",
      logo: "https://i.pravatar.cc/48?img=5",
      postedTime: "4 days ago",
      applicants: 56,
      isEasyApply: false,
      isSaved: false
    }
  ];
  
  return (
    <div className="space-y-5">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Find your next opportunity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search for jobs by title, skill, or company"
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 mt-3">
            <Button variant="outline" size="sm">
              Design
            </Button>
            <Button variant="outline" size="sm">
              Remote
            </Button>
            <Button variant="outline" size="sm">
              Full-time
            </Button>
            <Button variant="outline" size="sm" className="ml-auto text-linkedin-blue">
              All filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="recommended">
        <div className="flex justify-between items-center mb-3">
          <TabsList>
            <TabsTrigger value="recommended" className="text-sm">Recommended</TabsTrigger>
            <TabsTrigger value="saved" className="text-sm">Saved</TabsTrigger>
          </TabsList>
          <Button variant="ghost" size="sm" className="text-linkedin-blue hover:text-linkedin-darkBlue">
            <Bookmark className="h-4 w-4 mr-1" />
            My items
          </Button>
        </div>

        <TabsContent value="recommended" className="mt-0 space-y-4">
          {jobListings.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex">
                  <div className="h-14 w-14 flex-shrink-0 rounded bg-gray-100 mr-4">
                    <img src={job.logo} alt={job.company} className="h-full w-full object-cover rounded" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-base font-semibold text-linkedin-blue hover:underline">
                      {job.title}
                    </h3>
                    <p className="text-sm">{job.company}</p>
                    <p className="text-xs text-gray-500">{job.location}</p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span className="mr-3">{job.postedTime}</span>
                      <span>{job.applicants} applicants</span>
                    </div>
                    
                    <div className="flex mt-3">
                      {job.isEasyApply ? (
                        <Button size="sm" className="bg-linkedin-blue hover:bg-linkedin-darkBlue text-white mr-2">
                          Easy Apply
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="mr-2">
                          Apply
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`${job.isSaved ? 'text-linkedin-blue' : 'text-gray-500'}`}
                      >
                        <Bookmark className={`h-4 w-4 ${job.isSaved ? 'fill-linkedin-blue' : ''}`} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Button variant="outline" className="w-full">
            Show more jobs
          </Button>
        </TabsContent>

        <TabsContent value="saved" className="mt-0">
          <Card className="p-5">
            <div className="text-center">
              <div className="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-3">
                <Bookmark className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="font-semibold">Save jobs that interest you</h3>
              <p className="text-sm text-gray-500 mt-2">
                Save jobs by clicking the bookmark icon on job postings to easily apply to them later and track your applications.
              </p>
              <Button variant="outline" className="mt-4">
                Browse recommended jobs
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center">
            <Briefcase className="h-10 w-10 text-linkedin-blue mr-3" />
            <div>
              <h3 className="font-semibold">Job seeker guidance</h3>
              <p className="text-sm text-gray-600">Recommended based on your activity</p>
            </div>
            <Button variant="ghost" size="sm" className="ml-auto">
              Dismiss
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <Card className="border border-gray-200">
              <CardContent className="p-3">
                <h4 className="font-medium text-sm">I want to improve my resume</h4>
                <p className="text-xs text-gray-500 mt-1">Explore resources to help create a more compelling resume</p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-3">
                <h4 className="font-medium text-sm">I want to improve my interview skills</h4>
                <p className="text-xs text-gray-500 mt-1">Prepare for interviews with practice tools and coaching</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Jobs;
