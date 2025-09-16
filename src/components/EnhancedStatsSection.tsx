import { useEffect, useState } from 'react';
import { Users, Award, BookOpen, Heart } from 'lucide-react';

const stats = [
  {
    title: 'তরুণ সদস্য',
    value: 2500,
    suffix: '+',
    icon: Users,
    description: 'আমাদের সাথে যুক্ত সক্রিয় তরুণ',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'সফল প্রজেক্ট',
    value: 150,
    suffix: '+',
    icon: Award,
    description: 'সম্পন্ন উন্নয়নমূলক কর্মকাণ্ড',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'ফ্রি ট্রেনিং',
    value: 300,
    suffix: '+',
    icon: BookOpen,
    description: 'বিনামূল্যে প্রশিক্ষণ কর্মসূচি',
    color: 'from-purple-500 to-violet-500'
  },
  {
    title: 'মানসিক সাপোর্ট',
    value: 1000,
    suffix: '+',
    icon: Heart,
    description: 'কাউন্সেলিং সেশন সম্পন্ন',
    color: 'from-pink-500 to-rose-500'
  }
];

const EnhancedStatsSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, 30);
      });
    }
  }, [isVisible]);

  return (
    <section 
      id="stats-section"
      className="relative py-20 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-bg opacity-95" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="relative section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            আমাদের প্রভাব
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            পরিসংখ্যানের মাধ্যমে দেখুন আমরা কীভাবে বাংলাদেশের তরুণ সমাজে ইতিবাচক পরিবর্তন আনছি
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stats-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counters[index].toLocaleString('bn-BD')}
                <span className="text-white/80">{stat.suffix}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {stat.title}
              </h3>
              
              <p className="text-white/80 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full floating" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full floating" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default EnhancedStatsSection;