import { signUpRquest } from "@/apis/auth"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner";


export const useSignUp = () => {
    
    const { isPending, isSuccess, error, mutateAsync: signupMutation} = useMutation({
        mutationFn: signUpRquest,
        onSuccess: (data) => {
            console.log("Successfully signed up", data);
            toast("Successfully signed up", {
                variant: "destructive",
                description: "You will be redirected to the login page in a few seconds.",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              });

        },
        onError: (error) => {
            console.log("Failed to sign up", error);
            toast("Failed to signed up", {
                description: "Something went wrong",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
            });
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    }
}