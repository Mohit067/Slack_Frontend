import { createWorkspaceRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useCreateWorkspace = () => {
    const { auth } = useAuth();

    const { isSuccess, isPending, error, mutateAsync: createWorkspaceMutation} = useMutation({
        mutationFn: (data) =>  createWorkspaceRequest({ ...data, token: auth?.token }),
        onSuccess: (data) => {
            console.log("Successfully create workspace", data);
        },
        onError: (error) => { 
            console.log("Failed to create workspace", error);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        createWorkspaceMutation
    }
}