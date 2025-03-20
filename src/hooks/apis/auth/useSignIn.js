import { signInRquest } from "@/apis/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";


export const useSignin = () => {
    
    const { isPending, isSuccess, error, mutateAsync: signinMutation} = useMutation({
        mutationFn: signInRquest,
        onSuccess: (response) => {
            console.log("Successfully signed in", response);

            const userObject = JSON.stringify(response.data);
            localStorage.setItem('user', userObject);

            toast("Successfully signed in", {
                variant: "destructive",
                description: "You will be redirected to the home page in a few seconds.",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              });

        },
        onError: (error) => {
            console.log("Failed to sign in", error);
            toast("Failed to signed in", {
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
        signinMutation
    }
}