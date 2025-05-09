
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Plus, Users, FileText, Briefcase, Bookmark, Eye } from "lucide-react";

const Profile = () => {
  return (
    <div className="space-y-5">
      <Card>
        <div className="h-32 md:h-48 bg-gradient-to-r from-linkedin-blue to-linkedin-lightBlue relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-700 rounded-full"
          >
            <Edit className="h-4 w-4" />
          </Button>
        </div>
        
        <CardContent className="pt-5 pb-6 relative">
          <div className="absolute -top-14 left-4 md:left-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white bg-white overflow-hidden">
              <img
                src="https://i.pravatar.cc/150?img=59"
                alt="Jane Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:ml-40">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-xl md:text-2xl font-bold">Jane Doe</h1>
                <p className="text-gray-600">Senior Product Designer at Design Company</p>
                <p className="text-sm text-gray-500">San Francisco Bay Area • <span className="text-linkedin-blue">Contact info</span></p>
                <p className="text-sm text-linkedin-blue mt-1">500+ connections</p>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="default" className="bg-linkedin-blue hover:bg-linkedin-darkBlue">
                  Message
                </Button>
                <Button size="sm" variant="outline">
                  More
                </Button>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="py-2 px-3">
                  <p className="text-xs font-medium">Open to work</p>
                  <p className="text-xs text-gray-500">Product Designer roles</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="py-2 px-3">
                  <p className="text-xs font-medium">Providing services</p>
                  <p className="text-xs text-gray-500">UX Design</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="about">
        <Card>
          <TabsList className="w-full justify-start border-b rounded-none p-0 h-auto bg-transparent">
            <TabsTrigger value="about" className="rounded-none border-b-2 border-transparent data-[state=active]:border-linkedin-blue data-[state=active]:bg-transparent py-3 text-sm">
              About
            </TabsTrigger>
            <TabsTrigger value="activity" className="rounded-none border-b-2 border-transparent data-[state=active]:border-linkedin-blue data-[state=active]:bg-transparent py-3 text-sm">
              Activity
            </TabsTrigger>
            <TabsTrigger value="experience" className="rounded-none border-b-2 border-transparent data-[state=active]:border-linkedin-blue data-[state=active]:bg-transparent py-3 text-sm">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="rounded-none border-b-2 border-transparent data-[state=active]:border-linkedin-blue data-[state=active]:bg-transparent py-3 text-sm">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="rounded-none border-b-2 border-transparent data-[state=active]:border-linkedin-blue data-[state=active]:bg-transparent py-3 text-sm">
              Skills
            </TabsTrigger>
          </TabsList>
          
          <CardContent className="p-4">
            <TabsContent value="about" className="mt-0">
              <div className="prose max-w-none">
                <p>Experienced Product Designer with a focus on creating intuitive and user-centered digital experiences. Passionate about solving complex problems through design thinking and collaborative approaches.</p>
                <p className="mt-3">I specialize in UX research, interface design, and design systems. My goal is to bridge the gap between user needs and business objectives through thoughtful and innovative design solutions.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="activity" className="mt-0">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Recent Activity</h2>
                <Button variant="outline" size="sm">Create post</Button>
              </div>
              <div className="space-y-4">
                <Card className="p-4">
                  <p className="text-sm text-gray-500">Jane commented on a post • 2d</p>
                  <p className="mt-2 text-sm">This is a really insightful analysis on the future of remote work!</p>
                </Card>
                <Card className="p-4">
                  <p className="text-sm text-gray-500">Jane shared an article • 5d</p>
                  <h3 className="font-medium mt-2">10 UX Trends to Watch in 2023</h3>
                  <p className="mt-1 text-sm">An interesting overview of where UX design is headed this year...</p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="mt-0">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Work Experience</h2>
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 flex-shrink-0 bg-gray-200 rounded">
                    <div className="h-full w-full flex items-center justify-center text-gray-400">DC</div>
                  </div>
                  <div>
                    <h3 className="font-medium">Senior Product Designer</h3>
                    <p className="text-sm text-gray-600">Design Company</p>
                    <p className="text-xs text-gray-500">Jan 2020 - Present • 3 yrs 5 mos</p>
                    <p className="text-xs text-gray-500">San Francisco, California</p>
                    <p className="text-sm mt-2">Leading product design for the company's flagship SaaS platform. Responsible for user research, interaction design, and maintaining the design system.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-12 w-12 flex-shrink-0 bg-gray-200 rounded">
                    <div className="h-full w-full flex items-center justify-center text-gray-400">TC</div>
                  </div>
                  <div>
                    <h3 className="font-medium">UX Designer</h3>
                    <p className="text-sm text-gray-600">Tech Corporation</p>
                    <p className="text-xs text-gray-500">Mar 2017 - Dec 2019 • 2 yrs 10 mos</p>
                    <p className="text-xs text-gray-500">San Francisco, California</p>
                    <p className="text-sm mt-2">Designed user interfaces for web and mobile applications, conducted usability testing, and collaborated with product teams to implement design solutions.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="mt-0">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Education</h2>
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 flex-shrink-0 bg-gray-200 rounded">
                    <div className="h-full w-full flex items-center justify-center text-gray-400">SU</div>
                  </div>
                  <div>
                    <h3 className="font-medium">Stanford University</h3>
                    <p className="text-sm">Master of Fine Arts - MFA, Design</p>
                    <p className="text-xs text-gray-500">2015 - 2017</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-12 w-12 flex-shrink-0 bg-gray-200 rounded">
                    <div className="h-full w-full flex items-center justify-center text-gray-400">CU</div>
                  </div>
                  <div>
                    <h3 className="font-medium">Cornell University</h3>
                    <p className="text-sm">Bachelor of Arts - BA, Visual Arts</p>
                    <p className="text-xs text-gray-500">2011 - 2015</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="skills" className="mt-0">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Top Skills</h2>
                <Button variant="outline" size="sm">Take skill quiz</Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">UX Design</h3>
                    <div className="flex items-center">
                      <div className="text-sm text-gray-500">Endorsed by 42</div>
                    </div>
                  </div>
                  <Separator className="my-2" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">User Research</h3>
                    <div className="flex items-center">
                      <div className="text-sm text-gray-500">Endorsed by 37</div>
                    </div>
                  </div>
                  <Separator className="my-2" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Design Systems</h3>
                    <div className="flex items-center">
                      <div className="text-sm text-gray-500">Endorsed by 29</div>
                    </div>
                  </div>
                  <Separator className="my-2" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Prototyping</h3>
                    <div className="flex items-center">
                      <div className="text-sm text-gray-500">Endorsed by 25</div>
                    </div>
                  </div>
                  <Separator className="my-2" />
                </div>
                
                <Button variant="outline" className="w-full mt-2">Show all 15 skills</Button>
              </div>
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
};

export default Profile;
