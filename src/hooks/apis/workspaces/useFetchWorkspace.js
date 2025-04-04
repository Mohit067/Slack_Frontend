import { fetchAllWorkspaceRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useQuery } from "@tanstack/react-query";

export const useFetchWorkspace = () => {
    const { auth } = useAuth();

    const { isFetching, isSuccess, error, data} = useQuery({
        queryFn: () => fetchAllWorkspaceRequest({token: auth?.token}),
        queryKey: ['fetchWorkspaces'],
        staleTime: 30000
    });

    return {
        isFetching, 
        isSuccess, 
        error, 
        workspaces: data
    }
}