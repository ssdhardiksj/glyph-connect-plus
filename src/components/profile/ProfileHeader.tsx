
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit } from "lucide-react";
import { motion } from "framer-motion";

interface ProfileHeaderProps {
  talentFirstMode: boolean;
}

const ProfileHeader = ({ talentFirstMode }: ProfileHeaderProps) => {
  return (
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
  );
};

export default ProfileHeader;
