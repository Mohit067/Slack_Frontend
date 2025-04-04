import { updateWorkspaceRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useUpdateWorkspace = ( workspaceId ) => {

    const { auth } = useAuth();

    const { isPending, isSuccess, error, mutateAsync: updateWorkspaceMutation} = useMutation({
        mutationFn: (name) => updateWorkspaceRequest({ workspaceId, name, token: auth?.token }),
        onSuccess: () => {
            console.log("Workspace successfully uapdated");
        },
        onError: (error) => {
            console.log("Error in updating workspace", error)
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        updateWorkspaceMutation
    }
}