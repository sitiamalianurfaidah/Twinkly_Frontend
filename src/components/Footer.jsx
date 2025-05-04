// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* About Twinkly */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">About Twinkly</h3>
                    <p className="text-sm">
                        Twinkly brings innovation and elegance to your lighting experience. 
                        Discover smart decorative lights designed to transform any space with color, animation, and ambiance.
                    </p>
                </div>

                {/* Product Categories */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Products</h3>
                    <ul className="text-sm">
                        <li><a href="#ledstrings" className="hover:text-blue-400">LED Strings</a></li>
                        <li><a href="#curtains" className="hover:text-blue-400">Curtain Lights</a></li>
                        <li><a href="#clusters" className="hover:text-blue-400">Cluster Lights</a></li>
                        <li><a href="#accessories" className="hover:text-blue-400">Accessories</a></li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Support</h3>
                    <ul className="text-sm">
                        <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
                        <li><a href="#warranty" className="hover:text-blue-400">Warranty & Returns</a></li>
                        <li><a href="#contact" className="hover:text-blue-400">Contact Us</a></li>
                        <li><a href="#appsupport" className="hover:text-blue-400">App Support</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Connect with Us</h3>
                    <ul className="text-sm">
                        <li><a href="https://www.instagram.com/twinkly/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a></li>
                        <li><a href="https://www.facebook.com/twinkly/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a></li>
                        <li><a href="https://www.youtube.com/c/TwinklyLED" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">YouTube</a></li>
                        <li><a href="https://www.tiktok.com/@twinklylights" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">TikTok</a></li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-sm mt-12">
                <p>&copy; 2025 Twinkly. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
