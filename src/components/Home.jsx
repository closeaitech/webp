import React from 'react';
import { Shield, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-950 flex flex-col items-center justify-center text-white p-4">
      <main className="text-center space-y-12 max-w-4xl w-full">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-blue-300">Close AI Tech</h1>
          <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl">
            <Shield className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
            <p className="font-light">Securing the Future of Gen AI</p>
          </div>
        </div>
        <div className="bg-blue-900/50 rounded-2xl p-8 backdrop-blur-md shadow-lg">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-300">Coming Soon</h2>
          <p className="text-blue-100 text-lg">
            Our innovative security platform for gen AI is almost ready. We're redefining the landscape of AI security
            with cutting-edge solutions.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xl font-light">Ready to secure your AI? Let's talk.</p>
          <a
            href="mailto:hello@closeaitech.in"
            className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>hello@closeaitech.in</span>
          </a>
        </div>
      </main>
      <footer className="mt-16 text-sm text-blue-300">
        &copy; {new Date().getFullYear()} Close AI Tech. All rights reserved.
      </footer>
    </div>
  );
}