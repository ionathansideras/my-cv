import {
    useGetProjectsQuery,
    useDeleteProjectMutation,
} from "../../redux/store";
import { useEffect, useState } from "react";
import { Project } from "../../types/types";
import ProjectCreationPopUp from "./ProjectCreationPopUp";

export default function Dashboard() {
    const { data, isLoading } = useGetProjectsQuery();
    const [deleteProject] = useDeleteProjectMutation();

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        console.log(data);
    }, [data]);

    function handleDeleteProject(id: number) {
        // Delete project logic
        deleteProject(id);
    }

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            {data.projects.map((project: Project) => (
                <div key={project.id}>
                    <img src={project.thumb} alt={`${project.title} thumb`} />
                    <h2>{project.title}</h2>
                    <button onClick={() => handleDeleteProject(project.id)}>
                        delete project
                    </button>
                    <button>edit project</button>
                </div>
            ))}
            <button onClick={() => setIsPopupOpen(!isPopupOpen)}>
                add project
            </button>
            <ProjectCreationPopUp
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsPopupOpen}
            />
        </div>
    );
}
