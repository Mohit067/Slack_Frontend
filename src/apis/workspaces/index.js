import axios from "@/config/axiosConfig";

export const createWorkspaceRequest = async ({ name, discription, token }) => {
    try {
        const response = await axios.post('/workspaces', {name, discription}, {
            headers: {
                'x-access-token': token
            }
        });
        console.log("Response in create workspace request", response);
        return response?.data?.data;
    } catch (error) {
        console.log("Error while create workspace", error);
        throw error.response.data;
    }
};

export const fetchAllWorkspaceRequest = async ({ token }) => {
   
    try {
        const response = await axios.get('/workspaces', {
            headers: {
                'x-access-token': token
            }
        });
        console.log("Response in fetching workspace request", response);
        return response?.data?.data;
    } catch (error) {
        console.log("Error while fetching workspace", error);
        throw error.response.data;
    }
};