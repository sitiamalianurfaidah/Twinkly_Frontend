import { useEffect, useState } from "react";
import { getAllAffirmations } from "../actions/Affirmations.actions";

const AffirmationList = () => {
    const [affirmations, setAffirmations] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAffirmations = async () => {
        setLoading(true);
        const result = await getAllAffirmations();
        if (result.success) {
        setAffirmations(result.data);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchAffirmations();
    }, []);

    return (
        <div className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold">✨ Daftar Affirmations</h2>
        {loading ? (
            <p className="text-gray-500">Loading affirmations...</p>
        ) : affirmations.length === 0 ? (
            <p className="text-gray-500">Belum ada affirmation 😔</p>
        ) : (
            affirmations.map((item) => (
            <div
                key={item.id}
                className="p-4 border border-gray-200 rounded-md shadow-sm bg-gray-50"
            >
                <p className="text-gray-800">{item.message}</p>
                <p className="text-sm text-gray-500 mt-1">🧠 User ID: {item.user_id}</p>
            </div>
            ))
        )}
        </div>
    );
};

export default AffirmationList;
