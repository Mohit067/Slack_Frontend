import axiosConfig from '@/config/axiosConfig';

export const getChannelById = async ({ channelId, token }) => {
    try {
        const response = await axiosConfig.get(`/channels/${channelId}`, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch(error) {
        console.log('Error in getChannelByIdRequest', error);
    }
};