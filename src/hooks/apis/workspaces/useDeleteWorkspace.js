import { delteWorkspaceRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query"

export const useDeleteWorkspace = ( workspaceId ) => {
   
    const { auth } = useAuth();

    const { isPending, isSuccess, error, mutateAsync: deleteWorkspaceMutation} = useMutation({
        mutationFn: () => delteWorkspaceRequest({ workspaceId, token: auth?.token }),
        onSuccess: () => {
            console.log("Workspace successfully deleted");
        },
        onError: (error) => {
            console.log("Error in deleting workspace", error)
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        deleteWorkspaceMutation
    }
}