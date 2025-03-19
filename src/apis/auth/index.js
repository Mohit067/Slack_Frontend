import axios from "@/config/axiosConfig";

export const signUpRquest = async ({ email, password, username}) => {
    try {
        const respose = await axios.post("/users/signup", {
            email,
            password,
            username
        });
        return respose.data;
    } catch (error) {
        console.error(error);
        throw error.respose.data;
    }
}

export const signInRquest = async ({ email, password}) => {
    try {
        const respose = await axios.post("/users/signin", {
            email,
            password,
        });
        return respose.data;
    } catch (error) {
        console.error(error);
        throw error.respose.data;
    }
}