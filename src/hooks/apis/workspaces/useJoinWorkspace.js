import { joinWorkspaceRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth"
import { useMutation } from "@tanstack/react-query";

export const useJoinWorkspace = (workspaceId) => {
    const { auth } = useAuth();
    const {mutateAsync: joinWorkspaceMutation, isPending, isSuccess, error} = useMutation({
        mutationFn: (joinCode) => joinWorkspaceRequest({workspaceId, joinCode, token: auth?.token}),
        onSuccess: () => {
            console.log('Join workspace successfully');
        },
        onError: (error) => {
            console.log('Error in joining to workspace', error);
        }
    });

    return {
        joinWorkspaceMutation,
        isPending, 
        isSuccess,
        error
    }
}