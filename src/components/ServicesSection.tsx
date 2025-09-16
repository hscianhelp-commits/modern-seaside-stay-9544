
import { Link } from 'react-router-dom';
import { Book, Briefcase, Heart, Calendar, Users, Trophy, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'ক্যারিয়ার গাইডেন্স',
    description: 'পেশাগত পথপ্রদর্শন, দক্ষতা উন্নয়ন এবং চাকরির সুযোগ সৃষ্টিতে বিশেষজ্ঞ সহায়তা।',
    features: ['রিজিউমে তৈরি', 'ইন্টারভিউ প্রস্তুতি', 'নেটওয়ার্কিং গাইড'],
    icon: Briefcase,
    link: '/career',
    color: 'from-blue-500 to-purple-600'
  },
  {
    title: 'মানসিক স্বাস্থ্য',
    description: 'পেশাদার কাউন্সেলিং, মানসিক সহায়তা এবং মনোবৈজ্ঞানিক সেবা সকল তরুণের জন্য।',
    features: ['ওয়ান-টু-ওয়ান কাউন্সেলিং', 'গ্রুপ থেরাপি', '২৪/৭ সাপোর্ট'],
    icon: Heart,
    link: '/mental-health',
    color: 'from-pink-500 to-red-500'
  },
  {
    title: 'ইভেন্ট ও ওয়ার্কশপ',
    description: 'ব্যবহারিক দক্ষতা, নেতৃত্ব উন্নয়ন এবং পেশাদারীত্ব বৃদ্ধির জন্য নিয়মিত কর্মশালা।',
    features: ['স্কিল ওয়ার্কশপ', 'লিডারশিপ ট্রেনিং', 'নেটওয়ার্কিং ইভেন্ট'],
    icon: Calendar,
    link: '/events',
    color: 'from-green-500 to-teal-600'
  },
  {
    title: 'কমিউনিটি ফোরাম',
    description: 'তরুণদের মধ্যে সংযোগ, অভিজ্ঞতা ভাগাভাগি এবং পারস্পরিক সহযোগিতার প্ল্যাটফর্ম।',
    features: ['পিয়ার সাপোর্ট', 'মেন্টরশিপ', 'প্রজেক্ট কোলাবরেশন'],
    icon: Users,
    link: '/community',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    title: 'ফ্রি রিসোর্স',
    description: 'শিক্ষা, দক্ষতা উন্নয়ন এবং ক্যারিয়ার গঠনের জন্য বিনামূল্যে উচ্চমানের সম্পদ।',
    features: ['ই-বুক লাইব্রেরি', 'অনলাইন কোর্স', 'টেমপ্লেট ও টুলস'],
    icon: Book,
    link: '/resources',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    title: 'সাকসেস স্টোরি',
    description: 'আমাদের সাথে যুক্ত হয়ে সফল হওয়া তরুণদের অনুপ্রেরণাদায়ক গল্প ও অভিজ্ঞতা।',
    features: ['রিয়েল স্টোরি', 'মেন্টরশিপ', 'ক্যারিয়ার জার্নি'],
    icon: Trophy,
    link: '/success-stories',
    color: 'from-purple-500 to-pink-600'
  }
];

const ServicesSection = () => {
  return (
    <section className="section-container bg-gradient-to-br from-slate-50 to-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">আমাদের সেবাসমূহ</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          বাংলাদেশের তরুণদের সামগ্রিক উন্নয়নের জন্য আমরা যুগোপযোগী এবং কার্যকর সেবা প্রদান করি, 
          যা তাদের ব্যক্তিগত ও পেশাগত জীবনে স্থায়ী পরিবর্তন আনতে সক্ষম।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <service.icon className="h-8 w-8" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {service.description}
            </p>
            
            <ul className="space-y-2 mb-8">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link 
              to={service.link} 
              className="inline-flex items-center text-primary hover:text-primary/80 font-semibold group-hover:translate-x-2 transition-all duration-300"
            >
              আরো জানুন
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg">
          <span className="text-lg font-medium">প্রশ্ন আছে?</span>
          <Link 
            to="/contact" 
            className="button-primary text-sm"
          >
            যোগাযোগ করুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
