import {
    useGetProjectsQuery,
    useAddProjectMutation,
    useDeleteProjectMutation,
} from "../../redux/store";
import { useEffect } from "react";
import { Project } from "../../types/types";
import { whiteBase64 } from "../../assets/whiteBase64";

export default function Dashboard() {
    const { data, isLoading } = useGetProjectsQuery();
    const [addProject] = useAddProjectMutation();
    const [deleteProject] = useDeleteProjectMutation();

    useEffect(() => {
        console.log(data);
    }, [data]);

    function handleAddProject() {
        // Add project logic
        addProject({
            id: 3,
            title: "ok3",
            description: "aaaa",
            thumb: whiteBase64,
        });
    }

    function handleDeleteProject(id: number) {
        // Delete project logic
        deleteProject(id);
    }

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            {data.projects.map((project: Project) => (
                <div key={project.id}>
                    <img src={project.thumb} alt={project.title} />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <button onClick={() => handleDeleteProject(project.id)}>
                        delete project
                    </button>
                    <button>edit project</button>
                </div>
            ))}
            <button onClick={handleAddProject}>add project</button>
        </div>
    );
}
