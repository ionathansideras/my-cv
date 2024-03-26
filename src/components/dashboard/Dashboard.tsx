import {
    useGetProjectsQuery,
    useDeleteProjectMutation,
} from "../../redux/store";
import { useState } from "react";
import { Project } from "../../types/types";
import ProjectCreationPopUp from "./ProjectCreationPopUp";

export default function Dashboard() {
    const { data, isLoading } = useGetProjectsQuery({});
    const [deleteProject] = useDeleteProjectMutation();

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    function handleDeleteProject(id: string) {
        // Delete project logic
        console.log("Deleting project with id: ", id);
        deleteProject(id);
    }

    if (isLoading) return <div>Loading...</div>;

    return (
        <main className="dashboard">
            {data.projects.map((project: Project) => (
                <section className="project-section" key={project["_id"]}>
                    <img src={project.thumb} alt={`${project.title} thumb`} />
                    <h3>{project.title}</h3>
                    <button onClick={() => handleDeleteProject(project["_id"])}>
                        delete project
                    </button>
                    <button>edit project</button>
                </section>
            ))}
            <button onClick={() => setIsPopupOpen(!isPopupOpen)}>
                add project
            </button>
            <ProjectCreationPopUp
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsPopupOpen}
            />
        </main>
    );
}
