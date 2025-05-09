
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";

interface SkillsTabProps {
  talentFirstMode: boolean;
}

const SkillsTab = ({ talentFirstMode }: SkillsTabProps) => {
  return (
    <>
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
        {["UX Design", "User Research", "Design Systems", "Prototyping"].map((skill, index) => (
          <div key={skill}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{skill}</h3>
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
                          <img src={`https://i.pravatar.cc/32?img=${i + (index * 10) + 10}`} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 ml-2">+{30 + index * 3} more endorsed</div>
                  </div>
                ) : (
                  <div className="text-sm text-gray-500">Endorsed by {35 + index * 3}</div>
                )}
              </div>
            </div>
            <Separator className="my-2" />
          </div>
        ))}
        
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
    </>
  );
};

export default SkillsTab;
