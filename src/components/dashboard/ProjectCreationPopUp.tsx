import React, { useState } from "react";
import { useAddProjectMutation } from "../../redux/store";
import { whiteBase64 } from "../../assets/whiteBase64";
import { v4 as uuidv4 } from "uuid";

export default function ProjectCreationPopUp({
    isPopupOpen,
    setIsPopupOpen,
}: {
    isPopupOpen: boolean;
    setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [addProject] = useAddProjectMutation();

    const [title, setTitle] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Add project logic
        addProject({
            id: uuidv4(),
            title: title,
            thumb: whiteBase64,
        });
        setTitle("");
        setIsPopupOpen(false);
    }

    if (!isPopupOpen) return null;

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a new project</h2>
            <input
                type="text"
                placeholder="Project title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Create project</button>
        </form>
    );
}
