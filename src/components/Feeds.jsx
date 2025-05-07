import { useEffect, useState } from "react";
import { getAllAffirmations } from "../actions/Affirmations.actions";
import { deleteAffirmation } from "../actions/Affirmations.actions";

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
    

    const handleDelete = async (id) => {
        if (window.confirm("Yakin ingin menghapus affirmation ini?")) {
            const result = await deleteAffirmation(id);
            if (result.success) {
                setAffirmations((prevAffirmations) =>
                    prevAffirmations.filter((item) => item.id !== id)
                );
            } 
        }
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
                <p className="text-sm text-gray-500 mt-1">📝 Dari: {item.user_name || "Anonim"}</p>
                <button onClick={() => handleDelete(item.id)}  className="mt-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md">Delete</button>
            </div>
            ))
        )}
        </div>
    );
};

export default AffirmationList;
