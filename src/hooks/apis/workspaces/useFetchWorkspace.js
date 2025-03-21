import { fetchAllWorkspaceRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useQuery } from "@tanstack/react-query";

export const useFetchWorkspace = () => {
    const { auth } = useAuth();

    const { isFetched, isSuccess, error, workspaces: data} = useQuery({
        queryFn: () => fetchAllWorkspaceRequest({token: auth?.token}),
        queryKey: 'fetchWorkspaces',
        staleTime: 30000
    });

    return {
        isFetched, 
        isSuccess, 
        error, 
        workspaces
    }
}