import React from 'react';
import { Shield, Lock, AlertTriangle, Eye, Code, Ban, UserX, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ProtectAI</span>
          </a>
        </div>
        
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const SecurityLayerCard = ({ title, description, icon: Icon }) => (
  <Card className="w-64 h-72 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
    <CardContent className="p-6 flex flex-col items-center text-center h-full">
      <div className="mb-4 bg-blue-50 p-3 rounded-full">
        <Icon size={32} className="text-blue-600" />
      </div>
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const LLMSecurityPage = () => {
  const securityLayers = [
    {
      icon: Shield,
      title: "Data Leak Prevention",
      description: "Protect sensitive information like Aadhaar and PAN numbers from reaching the LLM through automatic redaction."
    },
    {
      icon: AlertTriangle,
      title: "Toxicity Detection",
      description: "Ensure AI responses remain professional and culturally appropriate for Indian users."
    },
    {
      icon: Lock,
      title: "Secrets Protection",
      description: "Safeguard API keys and credentials from exposure during LLM processing."
    },
    {
      icon: Eye,
      title: "Prompt Injection Shield",
      description: "Block malicious prompts that attempt to manipulate LLM responses."
    },
    {
      icon: UserX,
      title: "Smart Anonymization",
      description: "Automatically mask personal information while preserving context for AI processing."
    },
    {
      icon: Code,
      title: "Code Guardian",
      description: "Detect vulnerabilities in AI-generated code to ensure secure development."
    },
    {
      icon: Ban,
      title: "Topic Control",
      description: "Prevent disclosure of competitor information and maintain corporate compliance."
    },
    {
      icon: MessageSquare,
      title: "Hidden Text Defense",
      description: "Identify and block concealed instructions that could compromise security."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Enterprise-Grade Security for Your LLM Applications
          </h1>
          
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            ProtectAI's comprehensive security suite ensures your sensitive data remains protected 
            while maintaining full compliance with Indian regulations.
          </p>

          <div className="flex flex-col gap-8">
            {/* First Row */}
            <div className="flex flex-wrap justify-center gap-6">
              {securityLayers.slice(0, 4).map((layer, index) => (
                <SecurityLayerCard
                  key={index}
                  title={layer.title}
                  description={layer.description}
                  icon={layer.icon}
                />
              ))}
            </div>
            
            {/* Second Row */}
            <div className="flex flex-wrap justify-center gap-6">
              {securityLayers.slice(4, 8).map((layer, index) => (
                <SecurityLayerCard
                  key={index}
                  title={layer.title}
                  description={layer.description}
                  icon={layer.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LLMSecurityPage;