import { useEffect, useState } from "react";

const Notifications = ()=>{
    const [visible, setVisible] = useState(true);

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setVisible(false);
        }, 2000)
        
        return ()=> clearTimeout(timeOut);

    }, [])

    return visible ? (
        <>
            <div class="bg-green-500 text-white p-4">
                <p class="font-bold">Success!</p>
                <p>Your action was completed successfully.</p>
            </div>
        </>
    ) : null;
}
export default Notifications;