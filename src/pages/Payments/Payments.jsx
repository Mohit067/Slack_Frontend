import { RenderRazorpayPopup } from "@/components/molecules/RenderRazorpayPopup/RenderRazorpayPopup";
import { useCreateOrder } from "@/hooks/apis/payments/useCreateOrder";
import { useState } from "react";

export const Payments = () => {

    const [amount, setAmount] = useState('');
    const [orderResponse, setOrderResponse] = useState(null);

    const {createOrderMutation, isPending, isSuccess, error} = useCreateOrder();

    async function handleFormSubmit(e) {
        e.preventDefault();
        const response = await createOrderMutation(amount * 100);
        console.log('Order response', response);
        setOrderResponse(response);
    }

    return (

    

        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-semibold mb-6 text-center">💳 Payment Page</h2>

                <form 
                    className="flex flex-col gap-4"
                    onSubmit={handleFormSubmit}    
                >
                <input
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount (₹)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg"
                >
                    Pay Now 💰
                </button>
                { isSuccess && <RenderRazorpayPopup
                    amount={amount}
                    orderId={orderResponse?.id}
                    keyId={import.meta.env.VITE_RAZORPAY_KEY_ID}
                    currency={"INR"}
                />}
                </form>
            </div>
        </div>
    );
};
  
