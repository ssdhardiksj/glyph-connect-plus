
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceTabProps {
  talentFirstMode: boolean;
}

const ExperienceTab = ({ talentFirstMode }: ExperienceTabProps) => {
  return (
    <>
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
    </>
  );
};

export default ExperienceTab;
