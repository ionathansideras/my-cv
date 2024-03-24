// Import the configureStore function from Redux Toolkit
// This function is used to create a Redux store
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import {
    useAddProjectMutation,
    useDeleteProjectMutation,
    useGetProjectsQuery,
    projectsApi,
} from "./apis/projects-api";

// Create a Redux store
// The store is configured with reducers
const store = configureStore({
    reducer: {
        // The 'projectsApi.reducerPath' is the name of the reducer that will be added to the Redux store
        // This creates a 'state.projectsApi' object in the Redux store
        [projectsApi.reducerPath]: projectsApi.reducer,
    },
    // 'middleware' is an array of Redux middleware
    // Here, it gets the default middleware and adds the 'albumsApi' middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(projectsApi.middleware),
});

// Setting up listeners for the Redux store
// These listeners can react to actions dispatched to the Redux store
setupListeners(store.dispatch);

// Export the store
export {
    store,
    useAddProjectMutation,
    useDeleteProjectMutation,
    useGetProjectsQuery,
};
