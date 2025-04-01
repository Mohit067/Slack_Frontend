import Quill from "quill"
import { useEffect, useRef, useState } from "react"

export const MessageRenderer = ({ value }) => {

    console.log("value:::", value);

    const rendererRef = useRef(null);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        if(!rendererRef.current) return;
        
        const quill = new Quill(document.createElement('div'), {
            theme: 'snow'
        });

        // editing disabled
        quill.disable();

        const content = JSON.parse(value);
        console.log('content : ', quill.root.innerHTML);
        quill.setContents(content);

        const isContendEmpty = quill.getText().trim().length === 0;
        setIsEmpty(isContendEmpty);

        rendererRef.current.innerHTML = quill.root.innerHTML;

    }, [value])

    if(isEmpty) return null;

    return (
        <div ref={rendererRef} className="ql-editor ql-renderer"/>
    )
}