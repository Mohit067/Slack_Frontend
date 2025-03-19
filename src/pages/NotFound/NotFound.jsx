import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-screen w-full bg-gray-100 text-gray-800">
            <Card className="text-center shadow-lg p-6 ">
                <CardHeader>
                    <h1 className="text-4xl font-bold">404</h1>
                </CardHeader>
                <CardContent>
                    
                    <p className="text-lg mt-4">Oops! Page not found.</p>
                    <img 
                        src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-
                        illustration_114360-7899.jpg?t=st=1742370242~exp=1742373842~hmac=5c9a0046519e9e
                        14b831fb27e03bd2ee3fef25bf1aeebf0054765e6dfc509796&w=826"
                        alt="404 Not Found"
                        className="mx-auto w-120 h-100 object-contain rounded-lg shadow-lg"
                    />
                    <Button variant="outline" className="mt-4" onClick={() => navigate(-1)}>
                        Go Back
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};
