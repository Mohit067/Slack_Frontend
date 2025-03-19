import { signUpRquest } from "@/apis/auth"
import { useMutation } from "@tanstack/react-query"

export const useSignUp = () => {
    const { isPending, isSuccess, error, mutate: signupMutation} = useMutation({
        mutationFn: signUpRquest,
        onSuccess: (data) => {
            console.log("Successfully signed up", data);
        },
        onError: (error) => {
            console.log("Failed to sign up", error);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    }
}