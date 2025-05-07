import { useEffect } from 'react';

const AffirmationList = ({ affirmations, loading, onDelete, searchTerm }) => {
    const filteredAffirmations = affirmations.filter(item =>
        item.message.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (searchTerm && filteredAffirmations.length > 0) {
            const firstMatch = document.querySelector(`[data-title*="${searchTerm.toLowerCase()}"]`);
            if (firstMatch) {
                firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [searchTerm, filteredAffirmations]);
    

    return (
        <div className="mt-6 space-y-4">
            <h2 className="text-xl font-semibold">✨ Daftar Affirmations</h2>
            {loading ? (
                <p className="text-gray-500">Loading affirmations...</p>
            ) : filteredAffirmations.length === 0 ? (
                <p className="text-gray-500">Tidak ditemukan affirmation yang cocok 😔</p>
            ) : (
                filteredAffirmations.map((item) => (
                    <div
                        key={item.id}
                        className="p-4 border border-gray-200 rounded-md shadow-sm bg-gray-50"
                    >
                        <p className="text-gray-800">{item.message}</p>
                        <p className="text-sm text-gray-500 mt-1">📝 Dari: {item.user_name || "Anonim"}</p>
                        <button
                            onClick={() => onDelete(item.id)}
                            className="mt-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md"
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default AffirmationList;
