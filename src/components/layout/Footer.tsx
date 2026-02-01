import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary pt-16 pb-8 border-t border-secondary-dark/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-heading font-medium text-text-main">
                            Smart<span className="text-primary-dark">Studio</span>
                        </h3>
                        <p className="text-text-body leading-relaxed max-w-sm">
                            Capturing life's most precious moments with art and soul.
                            Specializing in maternity, newborn, and family photography studio
                            sessions that create lasting memories.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-text-body hover:text-primary-dark transition-colors" aria-label="Instagram">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-text-body hover:text-primary-dark transition-colors" aria-label="Facebook">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-text-body hover:text-primary-dark transition-colors" aria-label="YouTube">
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="md:pl-8">
                        <h4 className="text-lg font-heading font-semibold text-text-main mb-6">Quick Links</h4>
                        <nav className="flex flex-col space-y-3">
                            <Link to="/gallery" className="text-text-body hover:text-primary-dark transition-colors w-fit">
                                Gallery
                            </Link>
                            <Link to="/services" className="text-text-body hover:text-primary-dark transition-colors w-fit">
                                Services & Pricing
                            </Link>
                            <Link to="/about" className="text-text-body hover:text-primary-dark transition-colors w-fit">
                                About Us
                            </Link>
                            <Link to="/contact" className="text-text-body hover:text-primary-dark transition-colors w-fit">
                                Contact
                            </Link>
                            <Link to="/admin" className="text-text-body hover:text-primary-dark transition-colors w-fit">
                                Admin Login
                            </Link>
                        </nav>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold text-text-main mb-6">Contact Us</h4>
                        <address className="not-italic space-y-4 text-text-body">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary-dark mt-0.5 flex-shrink-0" />
                                <span>
                                    123 Photography Lane, Creative District<br />
                                    Bangalore, Karnataka 560001
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-primary-dark flex-shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-primary-dark transition-colors">
                                    +91 98765 43210
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary-dark flex-shrink-0" />
                                <a href="mailto:hello@smartstudio.com" className="hover:text-primary-dark transition-colors">
                                    hello@smartstudio.com
                                </a>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-secondary-dark/10 pt-8 text-center">
                    <p className="text-sm text-text-body">
                        &copy; {currentYear} Smart Photo Studio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
