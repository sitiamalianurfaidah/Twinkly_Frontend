import Navbar from '../components/Navbar';
import FeaturedAffirmations from '../components/FeaturedAffirmations';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import AffirmationList from "../components/AffirmationList";
import CreateAffirmation from "../components/createAffirmation";
import { useEffect, useRef, useState } from 'react';
import { getAllAffirmations } from '../actions/Affirmations.actions';


export default function Home() {
    const featuredAffirmationsRef = useRef(null);
    const [affirmations, setAffirmations] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = "123e4567-e89b-12d3-a456-426614174000";


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

    const handleSearch = (searchTerm) => {
        console.log('Search term:', searchTerm);
    };

    const scrollToFeaturedAffirmations = () => {
        if (featuredAffirmationsRef.current) {
            featuredAffirmationsRef.current.scrollIntoView({
                behavior: 'smooth', 
                block: 'start', 
            });
        }
    };
    

    return (
        <div className="home font-sans text-purple-900">
            {/* Navbar */}
            <Navbar onSearch={handleSearch} />

            {/* Hero Section */}
            <section
                id="hero"
                className="w-full h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 text-center flex flex-col justify-center items-center animate__animated animate__fadeIn"
            >
                <div className="px-6 max-w-2xl">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                        Welcome to Twinkly ✨
                    </h1>
                    <p className="text-lg mb-6 animate__animated animate__fadeInUp animate__delay-2s">
                        Your Source of Daily Inspiration & Positive Affirmations
                    </p>
                    <button
                        className="bg-purple-800 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-pink-400 transition duration-300 animate__animated animate__zoomIn animate__delay-3s"
                        onClick={scrollToFeaturedAffirmations} // Tambahkan onClick untuk scroll
                    >
                        Explore Affirmations
                    </button>
                </div>
            </section>

            {/* Featured Affirmations */}
            <section
                id="featured"
                ref={featuredAffirmationsRef} // Menambahkan ref pada bagian Featured Products
                className="py-12 px-4 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 animate__animated animate__fadeIn"
            >
                <FeaturedAffirmations />
            </section>

            {/* Categories Section*/}
            <section
                id="categories"
                className="py-12 px-4 bg-gradient-to-br from-pink-100 via-indigo-100 to-purple-100 animate__animated animate__fadeIn animate__delay-1s"
            >
                <Categories />
            </section>

            {/*Form*/}
            <section
                id="form"
                className="py-12 px-4 bg-gradient-to-br from-pink-100 via-indigo-100 to-purple-100 animate__animated animate__fadeIn animate__delay-1s"
            >
                <CreateAffirmation userId={userId} onSuccess={fetchAffirmations} />
                </section>

            {/*List*/}
            <section
                id="form"
                className="py-12 px-4 bg-gradient-to-br from-pink-100 via-indigo-100 to-purple-100 animate__animated animate__fadeIn animate__delay-1s"
            >
                <AffirmationList affirmations={affirmations} loading={loading} />
                </section>

            {/* Footer Section */}
            <Footer />
        </div>
    );
}
