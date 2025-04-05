import axiosConfig from "@/config/axiosConfig";
import axios from "axios"

export const uploadImageToAWSPresignedUrl = async ({ url, file }) => {
    try {
        const response = await axios.put(url, file, {
            headers: {
                'Content-Type': file.type
            }
        });
        console.log("Response in uploading image to s3", response);
        return response;
    } catch (error) {
        console.log("Error in uploading immage to s3", error)
    }
}

export const getPaginetUrl = async ({ token }) => {
    try {
        const response = await axiosConfig.get('/messages/pre-signed-url', {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;      
    } catch (error) {
        console.log("Error in getPaginetUrl immage to s3", error)
    }
}