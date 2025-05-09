
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, Plus, Users, FileText, Briefcase, Bookmark, Eye, ToggleLeft, ToggleRight } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [talentFirstMode, setTalentFirstMode] = useState(false);
  const { toast } = useToast();
  
  const handleTalentModeToggle = (checked: boolean) => {
    setTalentFirstMode(checked);
    toast({
      title: checked ? "Talent First Mode Activated" : "Standard Mode Activated",
      description: checked 
        ? "Now focusing on skills, projects and endorsements" 
        : "Showing all profile information",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-5">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
      >
        <div className="flex items-center">
          {talentFirstMode ? 
            <ToggleRight className="h-5 w-5 text-green-500 mr-2" /> : 
            <ToggleLeft className="h-5 w-5 text-gray-400 mr-2" />
          }
          <span className="font-medium">Talent First Mode</span>
        </div>
        <Switch 
          checked={talentFirstMode} 
          onCheckedChange={handleTalentModeToggle}
          className={talentFirstMode ? "bg-green-500" : ""}
        />
      </motion.div>
      
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
                
                {!talentFirstMode && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: talentFirstMode ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                    className="metrics"
                  >
                    <p className="text-gray-600">Senior Product Designer at Design Company</p>
                    <p className="text-sm text-gray-500">San Francisco Bay Area • <span className="text-linkedin-blue">Contact info</span></p>
                    <p className="text-sm text-linkedin-blue mt-1">500+ connections</p>
                  </motion.div>
                )}
                
                {talentFirstMode && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="talent-highlights"
                  >
                    <p className="text-sm text-green-600 font-medium">🔗 Verified Skills: UX Design, Design Systems, Prototyping</p>
                    <p className="text-sm text-gray-600">✓ 8 years of relevant experience</p>
                    <p className="text-sm text-gray-600">🏆 42 skill endorsements</p>
                  </motion.div>
                )}
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
            
            {!talentFirstMode && (
              <motion.div 
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex flex-wrap gap-2 metrics"
              >
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
              </motion.div>
            )}
            
            {talentFirstMode && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 talent-highlights"
              >
                <Card className="border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
                  <CardContent className="py-3 px-4">
                    <h3 className="text-sm font-medium text-green-700 dark:text-green-400">Skill Focus</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["UI/UX Design", "Figma", "User Research", "Prototyping", "Design Systems"].map((skill) => (
                        <span key={skill} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
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
              {!talentFirstMode ? (
                <div className="space-y-4 metrics">
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
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 talent-highlights"
                >
                  <Card className="border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700 p-4">
                    <h3 className="font-medium text-green-700 dark:text-green-400">Skill Stories</h3>
                    <div className="mt-3 space-y-3">
                      <div>
                        <h4 className="text-sm font-medium">Design System Implementation</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Led the creation of a comprehensive design system that reduced design inconsistencies by 78% and development time by 35%.
                        </p>
                        <div className="mt-2 flex gap-2">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-200">Design Systems</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-200">Collaboration</span>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="text-sm font-medium">User Research Initiative</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Conducted user research that identified key pain points, resulting in a 42% increase in user satisfaction after implementing changes.
                        </p>
                        <div className="mt-2 flex gap-2">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-200">User Research</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-200">Problem Solving</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
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
                    <h3 className="font-medium">
                      {talentFirstMode ? 'Product Designer' : 'Senior Product Designer'}
                    </h3>
                    <p className="text-sm text-gray-600">Design Company</p>
                    <p className="text-xs text-gray-500">Jan 2020 - Present • 3 yrs 5 mos</p>
                    <p className="text-xs text-gray-500">San Francisco, California</p>
                    <p className="text-sm mt-2">Leading product design for the company's flagship SaaS platform. Responsible for user research, interaction design, and maintaining the design system.</p>
                    
                    {talentFirstMode && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="mt-3"
                      >
                        <h4 className="text-sm font-medium text-green-700 dark:text-green-400">Key Achievements</h4>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                          <li className="text-sm">Reduced design handoff time by 40% through improved design system documentation</li>
                          <li className="text-sm">Increased user task completion rate by 28% after UI optimization</li>
                          <li className="text-sm">Led usability testing sessions with over 200 participants</li>
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-12 w-12 flex-shrink-0 bg-gray-200 rounded">
                    <div className="h-full w-full flex items-center justify-center text-gray-400">TC</div>
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {talentFirstMode ? 'Product Designer' : 'UX Designer'}
                    </h3>
                    <p className="text-sm text-gray-600">Tech Corporation</p>
                    <p className="text-xs text-gray-500">Mar 2017 - Dec 2019 • 2 yrs 10 mos</p>
                    <p className="text-xs text-gray-500">San Francisco, California</p>
                    <p className="text-sm mt-2">Designed user interfaces for web and mobile applications, conducted usability testing, and collaborated with product teams to implement design solutions.</p>
                    
                    {talentFirstMode && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="mt-3"
                      >
                        <h4 className="text-sm font-medium text-green-700 dark:text-green-400">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Figma</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Sketch</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">InVision</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Adobe XD</span>
                        </div>
                      </motion.div>
                    )}
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
                    {talentFirstMode && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="mt-2"
                      >
                        <p className="text-sm">Thesis: "Design Systems for Scaling Product Teams"</p>
                        <p className="text-sm text-gray-600 mt-1">Focused on research methods, design thinking, and user-centered design</p>
                      </motion.div>
                    )}
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
                    {talentFirstMode && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="mt-2"
                      >
                        <p className="text-sm">Graduated with honors (3.8 GPA)</p>
                        <p className="text-sm text-gray-600 mt-1">Minor in Computer Science</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="skills" className="mt-0">
              <div className={`flex items-center justify-between mb-4 ${talentFirstMode ? 'border-green-300 dark:border-green-800 pb-2' : ''}`}>
                <h2 className={`font-semibold ${talentFirstMode ? 'text-green-700 dark:text-green-400' : ''}`}>
                  {talentFirstMode ? 'Verified Skills & Endorsements' : 'Top Skills'}
                </h2>
                <Button 
                  variant="outline" 
                  size="sm"
                  className={talentFirstMode ? 'border-green-300 text-green-700 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/20' : ''}
                >
                  {talentFirstMode ? 'Add new skill' : 'Take skill quiz'}
                </Button>
              </div>
              
              <div className={`space-y-4 ${talentFirstMode ? 'border-green-100 dark:border-green-800/30 rounded-lg p-3 bg-green-50/50 dark:bg-green-900/10' : ''}`}>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">UX Design</h3>
                      {talentFirstMode && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center">
                      {talentFirstMode ? (
                        <div className="flex items-center">
                          <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="w-6 h-6 rounded-full border border-white dark:border-gray-800 bg-gray-200 flex items-center justify-center text-xs overflow-hidden">
                                <img src={`https://i.pravatar.cc/32?img=${i + 40}`} alt="" className="w-full h-full object-cover" />
                              </div>
                            ))}
                          </div>
                          <div className="text-sm text-gray-500 ml-2">+39 more endorsed</div>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">Endorsed by 42</div>
                      )}
                    </div>
                  </div>
                  <Separator className="my-2" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">User Research</h3>
                      {talentFirstMode && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center">
                      {talentFirstMode ? (
                        <div className="flex items-center">
                          <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="w-6 h-6 rounded-full border border-white dark:border-gray-800 bg-gray-200 flex items-center justify-center text-xs overflow-hidden">
                                <img src={`https://i.pravatar.cc/32?img=${i + 30}`} alt="" className="w-full h-full object-cover" />
                              </div>
                            ))}
                          </div>
                          <div className="text-sm text-gray-500 ml-2">+34 more endorsed</div>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">Endorsed by 37</div>
                      )}
                    </div>
                  </div>
                  <Separator className="my-2" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Design Systems</h3>
                      {talentFirstMode && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center">
                      {talentFirstMode ? (
                        <div className="flex items-center">
                          <div className="flex -space-x-2">
                            {[1, 2].map((i) => (
                              <div key={i} className="w-6 h-6 rounded-full border border-white dark:border-gray-800 bg-gray-200 flex items-center justify-center text-xs overflow-hidden">
                                <img src={`https://i.pravatar.cc/32?img=${i + 20}`} alt="" className="w-full h-full object-cover" />
                              </div>
                            ))}
                          </div>
                          <div className="text-sm text-gray-500 ml-2">+27 more endorsed</div>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">Endorsed by 29</div>
                      )}
                    </div>
                  </div>
                  <Separator className="my-2" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Prototyping</h3>
                      {talentFirstMode && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center">
                      {talentFirstMode ? (
                        <div className="flex items-center">
                          <div className="flex -space-x-2">
                            {[1, 2].map((i) => (
                              <div key={i} className="w-6 h-6 rounded-full border border-white dark:border-gray-800 bg-gray-200 flex items-center justify-center text-xs overflow-hidden">
                                <img src={`https://i.pravatar.cc/32?img=${i + 10}`} alt="" className="w-full h-full object-cover" />
                              </div>
                            ))}
                          </div>
                          <div className="text-sm text-gray-500 ml-2">+23 more endorsed</div>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">Endorsed by 25</div>
                      )}
                    </div>
                  </div>
                  <Separator className="my-2" />
                </div>
                
                {talentFirstMode ? (
                  <div className="space-y-3 mt-4">
                    <h4 className="text-sm font-medium text-green-700 dark:text-green-400">Skill Assessment</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex gap-3 items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <Checkbox id="figma" checked className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600" />
                        <div>
                          <label htmlFor="figma" className="text-sm font-medium">Figma</label>
                          <p className="text-xs text-gray-500">Advanced • Top 5%</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <Checkbox id="uxdesign" checked className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600" />
                        <div>
                          <label htmlFor="uxdesign" className="text-sm font-medium">UX Design</label>
                          <p className="text-xs text-gray-500">Expert • Top 15%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Button variant="outline" className="w-full mt-2">Show all 15 skills</Button>
                )}
              </div>
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
};

export default Profile;
