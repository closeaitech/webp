import React, { useState } from 'react';
import { Shield, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";


const NavSolutions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        className="px-6 py-2 rounded-full text-gray-600 hover:bg-white hover:shadow-sm transition-all flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 100)}
      >
        Our Solutions
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg py-2 w-48">
          <Link 
                to="/llm-security" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                LLM Security Layer
              </Link>


        </div>
      )}
    </div>
  );
};

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <button 
        onClick={onClick}
        className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-900">{question}</span>
          <ChevronDown 
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </div>
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [openFAQs, setOpenFAQs] = useState([]);

  const faqData = [
    {
      id: 1,
      question: "What types of sensitive data can CloseAI detect and protect?",
      answer: "CloseAI can detect and protect various types of sensitive data including Aadhaar numbers, PAN cards, financial credentials, API keys, database passwords, and personal identifiable information. Our system is specifically designed for Indian data formats and regulatory requirements."
    },
    {
      id: 2,
      question: "How does CloseAI ensure compliance with Indian regulations?",
      answer: "Our platform is built to comply with Indian data protection laws including the Personal Data Protection Bill (PDPB) and IT Rules 2021. We ensure that sensitive data never reaches the LLM and implement proper data anonymization techniques."
    },
    {
      id: 3,
      question: "What is prompt injection and how does CloseAI prevent it?",
      answer: "Prompt injection is a type of attack where malicious inputs manipulate the LLM to disclose confidential information. CloseAI identifies and blocks such attempts in real-time, preventing unauthorized access and maintaining the integrity of AI interactions."
    },
    {
      id: 4,
      question: "How does the toxicity detection feature work?",
      answer: "Our toxicity detection system analyzes AI-generated responses to ensure they are free from biased, offensive, or inappropriate language. It's specifically calibrated for India's diverse cultural context and helps maintain professional, respectful interactions."
    },
    {
      id: 5,
      question: "Can CloseAI be integrated with existing AI systems?",
      answer: "Yes, CloseAI is designed for seamless integration with existing AI systems. Our platform works as a security layer that sits between your application and the LLM, requiring minimal changes to your existing infrastructure."
    },
    {
      id: 6,
      question: "What industries can benefit from CloseAI?",
      answer: "CloseAI is particularly valuable for industries handling sensitive data, including banking and finance, healthcare, e-commerce, and customer service. Any organization using AI while dealing with personal or confidential information can benefit from our solution."
    }
  ];

  const toggleFAQ = (id) => {
    if (openFAQs.includes(id)) {
      setOpenFAQs(openFAQs.filter(faqId => faqId !== id));
    } else {
      setOpenFAQs([...openFAQs, id]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-semibold">CloseAI</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="bg-gray-100 rounded-full p-1 flex items-center space-x-2">
                <NavSolutions />
                <a href="#about" className="px-6 py-2 rounded-full text-gray-600 hover:bg-white hover:shadow-sm transition-all">
                  About Us
                </a>
                <a href="#contact" className="px-6 py-2 rounded-full text-gray-600 hover:bg-white hover:shadow-sm transition-all">
                  Contact Us
                </a>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-screen-2xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionizing LLM Security and Privacy
          </h1>
          <p className="text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
            Ensure your sensitive data never reaches LLMs while maintaining compliance with Indian regulations. 
            The most comprehensive security layer for AI interactions.
          </p>
          <Button className="h-14 px-10 text-lg bg-blue-600 hover:bg-blue-700 text-white">
            Book a Demo
          </Button>
        </div>
      </div>

      {/* Benefit Sections */}
      {/* Section 1: Data Protection */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-16">
            <div className="flex-1 pt-4">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Protecting Sensitive Data in AI Interactions</h2>
              <p className="text-xl text-blue-600 mb-4">Critical data like Aadhaar, PAN, and financial credentials are at risk during AI interactions</p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our advanced scanning system automatically detects and redacts sensitive information before it reaches the LLM. This ensures complete data isolation and prevents inadvertent exposure of private data.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With CloseAI, your organization can confidently leverage AI capabilities while maintaining the highest standards of data privacy and regulatory compliance.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/api/placeholder/800/500" 
                alt="Data Protection Illustration" 
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Regulatory Compliance */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-start gap-16">
            <div className="flex-1 pt-4">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Stay Compliant with Indian Regulations</h2>
              <p className="text-xl text-blue-600 mb-4">Navigate complex regulatory requirements with confidence</p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                India's evolving data protection laws, including PDPB and IT Rules 2021, demand robust privacy measures. CloseAI ensures your AI implementations meet all regulatory requirements.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Avoid severe legal and financial consequences while building trust with your users through demonstrated commitment to data protection.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/api/placeholder/800/500" 
                alt="Regulatory Compliance Illustration" 
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Security Integration */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-16">
            <div className="flex-1 pt-4">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Seamless Security Integration</h2>
              <p className="text-xl text-blue-600 mb-4">Enhance your AI security without disrupting operations</p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                CloseAI works as a comprehensive security layer that integrates smoothly with your existing AI infrastructure. No major changes to your current systems are required.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Start protecting your AI interactions immediately with our plug-and-play solution designed specifically for Indian enterprises.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/api/placeholder/800/500" 
                alt="Security Integration Illustration" 
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Business Growth */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-start gap-16">
            <div className="flex-1 pt-4">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Accelerate Business Growth</h2>
              <p className="text-xl text-blue-600 mb-4">Unlock new opportunities with secure AI implementations</p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Security-conscious enterprises often hesitate to adopt AI solutions without visible security assurances. CloseAI helps you build trust and expand your market reach.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join leading organizations like HDFC Bank and ICICI Bank in leveraging secure AI solutions for business growth and innovation.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/api/placeholder/800/500" 
                alt="Business Growth Illustration" 
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-12 text-center">Everything you need to know about CloseAI</p>
          
          <div className="space-y-4">
            {faqData.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQs.includes(faq.id)}
                onClick={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;