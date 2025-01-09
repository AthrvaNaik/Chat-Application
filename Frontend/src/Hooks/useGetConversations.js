import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/users");
                if (!res.ok) {
                    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
                }
                const data = await res.json();
                //console.log("API Response:", data); // Debugging the response

                // Ensure the data is an array before updating state
                if (Array.isArray(data)) {
                    setConversations(data);
                } else {
                    throw new Error("API did not return an array");
                }
            } catch (error) {
                toast.error(error.message);
                console.error("getConversations Error:", error);
            } finally {
                setLoading(false);
            }
        };
        getConversations();
    }, []);

    return { conversations, loading };
};

export default useGetConversations;
