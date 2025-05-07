import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profilePic from '../../assets/profile-pic.jpg';

const Profile = () => {
    const user = {
        name: 'Siti Amalia Nurfaidah',
        email: 'sitiamalianurfaidah@gmail.com',
        instagram: 'https://instagram.com/amaliaaanrf',
        linkedin: 'https://linkedin.com/in/siti-amalia-nurfaidah',
        profilePicture: profilePic,
        appName: 'Twinkly',
        appDescription: 'Twinkly is a platform designed to bring positivity into your life through personalized affirmations. Whether you need a quick boost of motivation or a reminder to stay positive, Twinkly helps you discover the power of words and their impact on mental well-being.',
        mission: 'To inspire and spread positivity through affirmations that encourage self-love, confidence, and resilience.',
        vision: 'To create a supportive community where everyone can access tools to uplift themselves and others through the power of words.',
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-200 to-indigo-200 py-8 flex justify-center">
            <div className="flex max-w-5xl w-full space-x-10">
                {/* Cute Left Section */}
                <div className="bg-pink-50 rounded-3xl shadow-xl p-8 w-1/3 space-y-6 border-2 border-pink-300">
                    <div className="flex justify-center">
                        <img
                            src={user.profilePicture || '/default-profile.png'}
                            alt="Profile"
                            className="w-48 h-48 rounded-full border-4 border-pink-400 shadow-md object-cover"
                        />
                    </div>
                    <h1 className="text-4xl font-extrabold text-center text-purple-700 font-serif">{user.name}</h1>
                    <div className="flex justify-center space-x-6 text-pink-500 text-xl">
                        <a href={`mailto:${user.email}`} className="hover:text-pink-700" title="Email">
                            <FaEnvelope />
                        </a>
                        <a href={user.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-700" title="Instagram">
                            <FaInstagram />
                        </a>
                        <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-pink-700" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Right Section: 3 cute separate boxes */}
                <div className="w-2/3 space-y-6">
                    {/* About */}
                    <div className="p-6 rounded-3xl bg-pink-100 shadow-md border border-pink-200 space-y-2">
                        <p className="text-2xl font-extrabold text-purple-700">About {user.appName}</p>
                        <p className="text-gray-700">{user.appDescription}</p>
                    </div>

                    {/* Mission */}
                    <div className="p-6 rounded-3xl bg-purple-100 shadow-md border border-purple-200 space-y-2">
                        <p className="text-2xl font-extrabold text-purple-700">Mission</p>
                        <p className="text-gray-700">{user.mission}</p>
                    </div>

                    {/* Vision */}
                    <div className="p-6 rounded-3xl bg-indigo-100 shadow-md border border-indigo-200 space-y-2">
                        <p className="text-2xl font-extrabold text-purple-700">Vision</p>
                        <p className="text-gray-700">{user.vision}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
