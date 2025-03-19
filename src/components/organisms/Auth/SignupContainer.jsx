import { useEffect, useState } from "react";
import { SignupCard } from "./SignupCard";
import { useSignUp } from "@/hooks/apis/auth/useSignUp";
import { useNavigate } from "react-router-dom";

export const SignupContainer = () => {
    const navigate = useNavigate();
    const [signupForm, setSignupForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    });

    const [validationError, setValidationError] = useState(null);

    const {isPending, isSuccess, error, signupMutation} = useSignUp();

    async function onSignupFormSubmit (e) {
        e.preventDefault();
        console.log("Signup form sumbitted", signupForm);

        if(!signupForm.email || !signupForm.password || !signupForm.confirmPassword || !signupForm.username){
            console.log("All fields are required");
            setValidationError({message: "All fields are required"});
            return;
        }
        if(signupForm.password !== signupForm.confirmPassword){
            console.log("Password do not match");
            setValidationError({message: "Password do not match"});
            return; 
        }

        setValidationError(null);
        await signupMutation({
            email: signupForm.email,
            password: signupForm.password,
            username: signupForm.username
        })
    }

    useEffect(() => {
        if(isSuccess){
            setTimeout(() => {
                navigate('/auth/signin');
            }, 3000);
        }
    }, [isSuccess, navigate])

    return (
        <SignupCard 
            error={error}
            isPending={isPending}
            isSuccess={isSuccess}
            signupForm={signupForm} 
            setSignupForm={setSignupForm} 
            validationError={validationError}
            onSignupFormSubmit={onSignupFormSubmit}
        />
    )
}