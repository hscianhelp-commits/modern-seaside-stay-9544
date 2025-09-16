import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  // Array of high-quality youth empowerment images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  return (
    <section className="hero-section relative">
      {/* Enhanced background slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 hero-slide"
            style={{
              backgroundImage: `url(${image})`,
              animationDelay: `${index * 4}s`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      
      <div className="hero-content animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block">Youth Hope</span>
          <span className="block gradient-text">Bangladesh</span>
        </h1>
        <p className="text-xl md:text-3xl mb-4 font-light">আমরা তরুণদের ভবিষ্যৎ গড়ি</p>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
          শিক্ষা, ক্যারিয়ার গাইডেন্স, মানসিক স্বাস্থ্য এবং দক্ষতা উন্নয়নের মাধ্যমে 
          বাংলাদেশের তরুণদের সফল ভবিষ্যৎ গড়তে সাহায্য করি
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <Link 
            to="/about" 
            className="button-primary group"
            aria-label="আমাদের সম্পর্কে জানুন"
          >
            <span>আমাদের সম্পর্কে জানুন</span>
            <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link 
            to="/donate" 
            className="button-secondary group"
            aria-label="আমাদের সাপোর্ট করুন"
          >
            <span>আমাদের সাপোর্ট করুন</span>
            <svg className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
