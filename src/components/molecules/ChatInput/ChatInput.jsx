import { Editor } from '@/components/atoms/Editor/Editor';
 
export const ChatInput = () => {

    async function hadleSubmit({ body }) {
        console.log(body);
    }

    return (
        <div
            className="px-5 w-full"
        >
            <Editor 
                placeholder="Type a message..."
                onSubmit={hadleSubmit}
                onCancel={() => {}}
                disabled={false}
                defaultValue=""
            />
        </div>
    );
};