
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface ActivityTabProps {
  talentFirstMode: boolean;
}

const ActivityTab = ({ talentFirstMode }: ActivityTabProps) => {
  return (
    <>
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
    </>
  );
};

export default ActivityTab;
