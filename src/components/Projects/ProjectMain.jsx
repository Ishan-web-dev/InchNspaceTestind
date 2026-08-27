import React from "react";
import ProjectsPage from "./ProjectsPage";
import ConsultationCTA from "./ConsultationCTA";
import StatsSection from "./StatsSection";

const ProjectMain = () => {
  return (
    <div>
      <ProjectsPage />
      <StatsSection />
      <ConsultationCTA />{" "}
    </div>
  );
};

export default ProjectMain;
