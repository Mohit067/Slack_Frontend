import { addChannelToWorkspaceRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query"

export const useAddChannelToWokspace = () => {

    const {auth} = useAuth();
    const {isPending, isSuccess, error, mutateAsync: addChannelToWrkspaceMutation} = useMutation({
        mutationFn: ({ workspaceId, channelName}) => addChannelToWorkspaceRequest({ workspaceId, channelName, token: auth?.token}),
        onSuccess: (data) => {
            console.log("Channel added to workspace", data);
        },
        onError: (data) => {
            console.log("Error in adding channel to wokspace", data)
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        addChannelToWrkspaceMutation
    }
}