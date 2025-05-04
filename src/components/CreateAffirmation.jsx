import { useState } from "react";
import { createAffirmation } from "../actions/Affirmations.actions";

const CreateAffirmation = ({ userId, onSuccess }) => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg("");
        setSuccessMsg("");

        if (message.trim().length < 5) {
            setErrorMsg("Tolong tulis affirmation yang lebih panjang ✨");
            setLoading(false);
            return;
        }

        const input = {
            message,
            user_id: userId,
        };

        const result = await createAffirmation(input);

        if (result.success) {
            setMessage("");
            setSuccessMsg("Berhasil disimpan! 🌈");
            if (onSuccess) onSuccess();
            setTimeout(() => setSuccessMsg(""), 3000);
        } else {
            setErrorMsg("Gagal menambahkan affirmation 😢");
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3 p-4 border rounded-lg shadow-md bg-white">
            <textarea
                aria-label="Form input affirmation"
                className="w-full p-2 border rounded-md resize-none"
                rows="3"
                placeholder="Tulis affirmasimu di sini..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
            {successMsg && <p className="text-green-600 text-sm">{successMsg}</p>}
            <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 text-white rounded-md ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
            >
                {loading ? "Menyimpan..." : "Tambah Affirmation"}
            </button>
        </form>
    );
};

export default CreateAffirmation;
