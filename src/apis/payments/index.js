import axiosConfig from "@/config/axiosConfig";

export const createOrderRequest = async ({ token, amount }) => {
    try {
        const response = await axiosConfig.post('/payments/order', {
            amount
        }, {
            headers: {
                'x-access-token': token
            }
        });
        console.log(response);
        return response?.data?.data;
    } catch (error) {
        console.log('Error in creating order', error);
    }
}

export const capturePaymentRequest = async({ token, orderId, status, paymentId }) => {
    try {
        console.log('Capture payment request', orderId, status, paymentId)
        const response = await axiosConfig.post('/payments/capture', {
            orderId,
            status,
            paymentId
        }, {
            headers: {
                'x-access-token': token
            }
        });
        console.log(response);
        return response?.data?.data;
    } catch (error) {
        console.log('Error in capturing order', error);
    }
}