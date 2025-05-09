
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import AboutTab from "./AboutTab";
import ActivityTab from "./ActivityTab";
import ExperienceTab from "./ExperienceTab";
import EducationTab from "./EducationTab";
import SkillsTab from "./SkillsTab";

interface ProfileTabsProps {
  talentFirstMode: boolean;
}

const ProfileTabs = ({ talentFirstMode }: ProfileTabsProps) => {
  return (
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
            <AboutTab />
          </TabsContent>
          
          <TabsContent value="activity" className="mt-0">
            <ActivityTab talentFirstMode={talentFirstMode} />
          </TabsContent>

          <TabsContent value="experience" className="mt-0">
            <ExperienceTab talentFirstMode={talentFirstMode} />
          </TabsContent>
          
          <TabsContent value="education" className="mt-0">
            <EducationTab talentFirstMode={talentFirstMode} />
          </TabsContent>
          
          <TabsContent value="skills" className="mt-0">
            <SkillsTab talentFirstMode={talentFirstMode} />
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
};

export default ProfileTabs;
