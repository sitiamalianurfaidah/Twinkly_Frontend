import React, { useEffect, useRef } from 'react';
import Product1 from '../assets/image17.jpg';
import Product2 from '../assets/image18.jpg';
import Product3 from '../assets/image19.jpg';
import Product4 from '../assets/image20.jpg';
import 'animate.css';

export default function FeaturedAffirmations() {
    const containerRef = useRef(null);

    const affirmations = [
        {
            title: 'You Are Enough',
            description: 'Believe in yourself, you are stronger than you think!',
            image: Product1
        },
        {
            title: 'Every Day is a Fresh Start',
            description: 'Embrace each new day as a new opportunity to grow.',
            image: Product3
        },
        {
            title: 'You Deserve the Best',
            description: 'You are worthy of happiness, success, and love.',
            image: Product2
        },
        {
            title: 'Be Your Own Motivation',
            description: 'Start from within and let your inner strength shine.',
            image: Product4
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    entry.target.classList.remove('opacity-0');
                }
            });
        }, {
            threshold: 0.2
        });

        const cards = containerRef.current?.querySelectorAll('.affirmation-card');
        cards?.forEach(card => observer.observe(card));

        return () => {
            cards?.forEach(card => observer.unobserve(card));
        };
    }, []);

    return (
        <section
            id="featured"
            className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 w-full py-20 px-6 text-gray-900 flex flex-col items-center"
        >
            <div className="max-w-7xl w-full flex flex-col items-center">
                <h2 className="text-4xl font-extrabold text-center mb-10 text-purple-900 drop-shadow-md">
                    Featured Affirmations
                </h2>

                <div
                    ref={containerRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
                >
                    {affirmations.map((affirmation, index) => (
                        <div
                            key={index}
                            className="affirmation-card opacity-0 bg-white rounded-xl shadow-lg p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <img
                                src={affirmation.image}
                                alt={affirmation.title}
                                className="w-full max-h-48 object-contain rounded-md mb-4"
                            />
                            <h3 className="text-lg font-semibold text-purple-700">{affirmation.title}</h3>
                            <p className="text-sm text-gray-600 mt-2 mb-4">{affirmation.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
