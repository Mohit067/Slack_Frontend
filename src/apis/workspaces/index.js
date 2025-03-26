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

export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
    try {
        const response = await axios.get(`/workspaces/${workspaceId}`, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch (error) {
        console.log("error fetching workspace", error);
        throw error.response.data;
    }
}

export const delteWorkspaceRequest = async ({ workspaceId, token  }) => {
    try {
        const response = await axios.delete(`/workspaces/${workspaceId}` ,{
        headers: {
            'x-access-token': token
        }
        });
        return response?.data?.data;
    } catch (error) {
        console.log("Error in deleting workspace", error);
        throw error.response.data;
    }
}

export const updateWorkspaceRequest = async ({ workspaceId, name, token}) => {
    try {
        const response = await axios.put(`/workspaces/${workspaceId}` ,{ name }, {
            headers: {
                'x-access-token': token
            }
        });
    return response?.data?.data;   
    } catch (error) {
        console.log("Error in updating workspace", error);
        throw error.response.data;
    }
}

export const addChannelToWorkspaceRequest = async ({ workspaceId, channelName, token}) => {
    try {
        const response = await axios.put(`/workspaces/${workspaceId}/channels` ,{ channelName }, {
            headers: {
                'x-access-token': token
            }
        });
    return response?.data?.data; 
    } catch (error) {
        console.log("Error in addign channel to  workspace", error);
        throw error.response.data;
    }
}

export const resetJoinCodeRequest = async ({ workspaceId, token}) => {
    try {
        console.log("Workspace id is : ",workspaceId);
        const response = await axios.put(`/workspaces/${workspaceId}/joinCode/reset` ,{}, {
            headers: {
                'x-access-token': token
            }
        });
    return response?.data?.data; 
    } catch (error) {
        console.log("Error in reseting the joinCode", error);
        throw error.response.data;
    }
}

export const addMemberToWorkspaceRequest = async ({ workspaceId, token }) => {
    try {
        
        const response = await axios.put(`/workspaces/${workspaceId}/members` ,{}, {
            headers: {
                'x-access-token': token
            }
        });
    return response?.data?.data; 
    } catch (error) {
        console.log("Error in adding member to  the workspace", error);
        throw error.response.data;
    }
}

export const joinWorkspaceRequest = async ({ workspaceId, joinCode, token }) => {
    try {
        
        const response = await axios.put(`/workspaces/${workspaceId}/join` ,{joinCode}, {
            headers: {
                'x-access-token': token
            }
        });
    return response?.data?.data; 
    } catch (error) {
        console.log("Error in adding member to  the workspace", error);
        throw error.response.data;
    }
}