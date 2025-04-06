import { createOrderRequest } from "@/apis/payments";
import { useAuth } from "@/hooks/context/useAuth"
import { useMutation } from "@tanstack/react-query";

export const useCreateOrder = () => {
    const { auth } = useAuth();
    const {mutateAsync: createOrderMutation, isPending, isSuccess, error} = useMutation({
        mutationFn: (amount) => createOrderRequest({ token: auth?.token, amount}),
        onSuccess: (data) => {
            console.log("Order create successfully", data);
        },
        onError: () => {
            console.log("Error creating in order", error);
        }
    });

    return {
        createOrderMutation,
        isPending,
        isSuccess,
        error
    }
}