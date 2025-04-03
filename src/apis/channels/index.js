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

export const getPaginatedMessages = async ({ channelId, limit, offset, token }) => {
    try {
        console.log('Fetching messages');
        const response = await axiosConfig.get(`/messages/${channelId}`, {
            params: {
                limit: limit || 20,
                offset: offset || 0
            },
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch (error) {
        console.log('Error in getPaginatedMessageRequest', error);
    }
}