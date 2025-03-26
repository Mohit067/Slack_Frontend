import { addMemberToWorkspaceRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth"
import { useMutation } from "@tanstack/react-query";

export const useAddMemberToWorkspace = (workspaceId) => {
    const { auth } = useAuth();

    const {mutateAsync: addMemberToWorkspaceMutation, isPending, isSuccess, error} = useMutation({
        mutationFn: () => addMemberToWorkspaceRequest({workspaceId, token: auth?.token}),
        onSuccess: () => {
            console.log('Member added successfully');
        },
        onError: () => {
            console.log('Error adding member to workspace');
        }
    });

    return {
        addMemberToWorkspaceMutation,
        isPending,
        isSuccess,
        error
    }
}