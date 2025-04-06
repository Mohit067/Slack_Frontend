import { capturePaymentRequest } from "@/apis/payments";
import { useAuth } from "@/hooks/context/useAuth"
import { useMutation } from "@tanstack/react-query";

export const useCaptureOrder = () => {
    const { auth } = useAuth();
    const {mutateAsync: captureOrderMutation, isPending, isSuccess, error} = useMutation({
        mutationFn: ({orderId, status, paymentId}) => capturePaymentRequest({ token: auth?.token, orderId, status, paymentId}),
        onSuccess: () => {
            console.log("Order capture successfully");
        },
        onError: () => {
            console.log("Error capturing in order", error);
        }
    });

    return {
        captureOrderMutation,
        isPending,
        isSuccess,
        error
    }
}