import React from 'react';
import { 
  Shield, Lock, AlertTriangle, Eye, Code, Ban, UserX, MessageSquare,
  CheckCircle, Server, FileText, Info
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <a href="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
            CloseAI
          </span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">Our Solutions</a>
          <a href="#about-us" className="text-gray-600 hover:text-blue-600 transition-colors">About us</a>
          <a href="#contact-us" className="text-gray-600 hover:text-blue-600 transition-colors">Contact us</a>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all hover:scale-105">
            Try it Free
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <div className="text-center mb-16">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      Protect Your AI Applications
      <span className="text-blue-600"> with Confidence</span>
    </h1>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      A simple yet powerful security layer that keeps your data safe when using AI
    </p>
  </div>
);

const SecurityLayer = ({ title, description, icon: Icon, color, chart }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-all">
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2">
        <div className="flex items-center space-x-4 mb-6">
          <div className={`${color} p-3 rounded-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chart.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-gray-600">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 h-64">
        <ResponsiveContainer width="100%" height="100%">
          {chart.component}
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

const LLMSecurityPage = () => {
  const threatData = [
    { month: 'Jan', threats: 120, prevented: 118 },
    { month: 'Feb', threats: 150, prevented: 148 },
    { month: 'Mar', threats: 200, prevented: 195 },
    { month: 'Apr', threats: 180, prevented: 178 },
    { month: 'May', threats: 250, prevented: 245 }
  ];

  const complianceData = [
    { name: 'Data Protection', value: 35 },
    { name: 'Access Control', value: 25 },
    { name: 'Encryption', value: 20 },
    { name: 'Monitoring', value: 20 }
  ];

  const securityLayers = [
    {
      title: "Data Leak Shield",
      description: "Automatically detects and protects sensitive information like Aadhaar numbers, PAN cards, and banking details before they reach the AI model.",
      icon: Shield,
      color: "bg-blue-600",
      chart: {
        benefits: [
          "Automatic detection of sensitive data",
          "Real-time redaction",
          "Custom protection rules",
          "Zero data leakage"
        ],
        component: (
          <LineChart data={threatData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="threats" stroke="#ff6b6b" name="Threats" />
            <Line type="monotone" dataKey="prevented" stroke="#4dabf7" name="Prevented" />
          </LineChart>
        )
      }
    },
    {
      title: "Smart Access Guardian",
      description: "Controls who can access your AI system and what they can do, ensuring only authorized users can interact with sensitive features.",
      icon: Lock,
      color: "bg-indigo-600",
      chart: {
        benefits: [
          "Role-based access control",
          "Multi-factor authentication",
          "Session management",
          "Activity logging"
        ],
        component: (
          <BarChart data={threatData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="prevented" fill="#4c6ef5" name="Protected Requests" />
          </BarChart>
        )
      }
    },
    {
      title: "Compliance Assurance",
      description: "Ensures your AI operations comply with Indian data protection regulations, including PDPB requirements and industry standards.",
      icon: FileText,
      color: "bg-green-600",
      chart: {
        benefits: [
          "Automatic compliance checks",
          "Regular audits",
          "Policy enforcement",
          "Compliance reporting"
        ],
        component: (
          <PieChart>
            <Pie
              data={complianceData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#82ca9d"
              label
            >
              {complianceData.map((entry, index) => (
                <Cell key={index} fill={['#4c6ef5', '#82c91e', '#fab005', '#ff6b6b'][index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <HeroSection />
        
        <div className="space-y-8">
          {securityLayers.map((layer, index) => (
            <SecurityLayer key={index} {...layer} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Secure Your AI?</h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all">
              Start Free Trial
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMSecurityPage;