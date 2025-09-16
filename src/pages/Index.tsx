import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import EnhancedStatsSection from '../components/EnhancedStatsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import CallToAction from '../components/CallToAction';

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>Youth Hope Bangladesh - তরুণদের ভবিষ্যৎ গড়ি | Career Guidance & Mental Health</title>
      <meta 
        name="description" 
        content="Youth Hope Bangladesh তরুণদের ক্যারিয়ার গাইডেন্স, মানসিক স্বাস্থ্য সেবা, ফ্রি ট্রেনিং এবং কমিউনিটি সাপোর্ট প্রদান করে। আমাদের সাথে যুক্ত হয়ে আপনার স্বপ্নের ক্যারিয়ার গড়ুন।" 
      />
      <meta name="keywords" content="youth development bangladesh, career guidance, mental health support, free training, community forum, success stories" />
      <meta property="og:title" content="Youth Hope Bangladesh - তরুণদের ভবিষ্যৎ গড়ি" />
      <meta property="og:description" content="বাংলাদেশের তরুণদের সামগ্রিক উন্নয়নের জন্য ক্যারিয়ার গাইডেন্স, মানসিক স্বাস্থ্য এবং দক্ষতা উন্নয়ন সেবা।" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://youthhopebangladesh.org" />
      
      <Layout>
        <HeroSection />
        
        {/* Enhanced Video Section */}
        <section className="section-container bg-gradient-to-br from-slate-50 to-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">আমাদের গল্প</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              কীভাবে আমরা বাংলাদেশের তরুণদের জীবনে ইতিবাচক পরিবর্তন আনছি তা জানুন
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 p-2">
              <div className="relative pb-[56.25%] h-0 bg-black rounded-2xl overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/cKwXmNDWJHM?autoplay=0&rel=0&modestbranding=1" 
                  frameBorder="0" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                  title="Youth Hope Bangladesh - আমাদের গল্প"
                />
              </div>
            </div>
          </div>
        </section>

        <EnhancedStatsSection />
        <ServicesSection />
        <TestimonialSection />
        <CallToAction />
      </Layout>
    </>
  );
};

export default Index;
