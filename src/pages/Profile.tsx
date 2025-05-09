
import { useState } from "react";
import { motion } from "framer-motion";
import TalentModeToggle from "@/components/profile/TalentModeToggle";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileTabs";

const Profile = () => {
  const [talentFirstMode, setTalentFirstMode] = useState(false);
  
  return (
    <div className="space-y-5">
      <TalentModeToggle 
        talentFirstMode={talentFirstMode} 
        setTalentFirstMode={setTalentFirstMode} 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ProfileHeader talentFirstMode={talentFirstMode} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <ProfileTabs talentFirstMode={talentFirstMode} />
      </motion.div>
    </div>
  );
};

export default Profile;
