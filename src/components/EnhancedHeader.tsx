import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { 
    name: 'হোম', 
    href: '/' 
  },
  { 
    name: 'আমাদের সম্পর্কে', 
    href: '/about' 
  },
  {
    name: 'সেবাসমূহ',
    href: '#',
    dropdown: [
      { name: 'ক্যারিয়ার গাইডেন্স', href: '/career' },
      { name: 'মানসিক স্বাস্থ্য', href: '/mental-health' },
      { name: 'ইভেন্ট ও ওয়ার্কশপ', href: '/events' },
      { name: 'কমিউনিটি ফোরাম', href: '/community' },
      { name: 'ফ্রি রিসোর্স', href: '/resources' },
    ]
  },
  { 
    name: 'সাকসেস স্টোরি', 
    href: '/success-stories' 
  },
  { 
    name: 'গ্যালারি', 
    href: '/gallery' 
  },
  { 
    name: 'যোগাযোগ', 
    href: '/contact' 
  },
];

const EnhancedHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform">
              YH
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}>
                Youth Hope
              </span>
              <span className={`text-sm opacity-80 transition-colors ${
                scrolled ? 'text-muted-foreground' : 'text-white/80'
              }`}>
                Bangladesh
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 font-medium transition-colors hover:text-primary ${
                        scrolled ? 'text-foreground' : 'text-white hover:text-white/80'
                      }`}
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown */}
                    <div 
                      className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border py-2 transition-all duration-200 ${
                        dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                      scrolled ? 'text-foreground' : 'text-white hover:text-white/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/volunteer" 
              className="button-secondary text-sm"
            >
              ভলান্টিয়ার হন
            </Link>
            <Link 
              to="/donate" 
              className="button-primary text-sm"
            >
              ডোনেট করুন
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-border/20">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="space-y-2">
                    <span className={`block px-4 py-2 font-medium ${
                      scrolled ? 'text-muted-foreground' : 'text-white/80'
                    }`}>
                      {item.name}
                    </span>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className={`block px-6 py-2 transition-colors hover:bg-muted ${
                          scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-4 py-2 font-medium transition-colors hover:bg-muted ${
                      scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA buttons */}
            <div className="pt-4 px-4 space-y-3 border-t border-border/20">
              <Link 
                to="/volunteer" 
                className="block w-full text-center button-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                ভলান্টিয়ার হন
              </Link>
              <Link 
                to="/donate" 
                className="block w-full text-center button-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                ডোনেট করুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EnhancedHeader;