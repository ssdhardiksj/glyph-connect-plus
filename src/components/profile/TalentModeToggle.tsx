
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { ToggleLeft, ToggleRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface TalentModeToggleProps {
  talentFirstMode: boolean;
  setTalentFirstMode: (checked: boolean) => void;
}

const TalentModeToggle = ({ talentFirstMode, setTalentFirstMode }: TalentModeToggleProps) => {
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
  );
};

export default TalentModeToggle;
