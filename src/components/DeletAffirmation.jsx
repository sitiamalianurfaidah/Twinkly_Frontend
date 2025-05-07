import { useEffect, useState } from "react";
import { getAllAffirmations, deleteAffirmation } from "../actions/Affirmations.actions";

const AffirmationList = () => {
    const [affirmations, setAffirmations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(""); // state untuk error message

    const fetchAffirmations = async () => {
        setLoading(true);
        setError(""); // reset error message setiap mulai fetch
        const result = await getAllAffirmations();
        if (result.success) {
            setAffirmations(result.data);
        } else {
            setError("Gagal memuat affirmation, coba lagi nanti 😔");
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
            } else {
                setError("Gagal menghapus affirmation 😔");
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
            ) : error ? (
                <p className="text-red-500">{error}</p>
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
                        <button
                            onClick={() => handleDelete(item.id)}
                            className="mt-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md"
                        >
                            Hapus
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default AffirmationList;
