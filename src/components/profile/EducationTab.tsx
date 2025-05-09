
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface EducationTabProps {
  talentFirstMode: boolean;
}

const EducationTab = ({ talentFirstMode }: EducationTabProps) => {
  return (
    <>
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
    </>
  );
};

export default EducationTab;
