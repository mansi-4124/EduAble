import React from "react";
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const navigate = useNavigate();
  return (
<div id="webcrumbs"> 
          <div className="w-[1280px] font-sans">
    {/* Landing Page */}
  
    {/* Hero Section */}
    <section className="py-16 px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-primary-600">AI-Powered</span> Inclusive Education for All
          </h1>
          <p className="text-lg mb-8 text-gray-600">
            Making education accessible for learners with disabilities through intelligent, personalized, and adaptive tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md">
              Get Started for Free
            </button>
            <button className="border-2 border-primary-600 text-primary-600 font-bold py-3 px-8 rounded-lg hover:bg-primary-50 transition-all duration-300 flex items-center justify-center">
              <span className="material-symbols-outlined mr-2">play_circle</span>
              Watch Demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://thumbs.dreamstime.com/b/disabled-persons-education-composition-classroom-disabilities-students-teacher-wallpaper-posters-furniture-88325607.jpg" 
            alt="Students using EduAccess" 
            className="rounded-xl shadow-2xl w-full h-auto transform hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  
    {/* Features Section */}
    <section id="features" className="py-16 px-8 bg-gray-50 rounded-xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our AI-powered tools are designed to make learning accessible, personalized, and empowering for all students.
        </p>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl">psychology</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">AI Chat Tutor</h3>
          <p className="text-gray-600">Understand complex topics explained in simple language tailored to your learning style.</p>
        </div>
  
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl">mic</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:underline" onClick={() => navigate("/speech-to-text")}>Speech-to-Text</h3>
          <p className="text-gray-600">Real-time voice transcription for better comprehension during lectures and discussions.</p>
        </div>
  
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl">volume_up</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Text-to-Speech</h3>
          <p className="text-gray-600">Lessons spoken out loud with natural-sounding voices for easier understanding.</p>
        </div>
  
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl">auto_awesome</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
          <p className="text-gray-600">Smart recommendations based on your progress to help you learn at your own pace.</p>
        </div>
  
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl">image</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Image & Video Descriptions</h3>
          <p className="text-gray-600">Understand visuals through AI-generated captions that describe content in detail.</p>
        </div>
  
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl">sign_language</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Sign Language Support</h3>
          <p className="text-gray-600">Visual assistance and translation for hearing-impaired users to enhance communication.</p>
        </div>
  
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl">text_format</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Simplified Text</h3>
          <p className="text-gray-600">Easier reading for learners with cognitive challenges through text simplification.</p>
        </div>
  
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl">sentiment_satisfied</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Emotion Detection</h3>
          <p className="text-gray-600">Get help when the system senses confusion through facial expression analysis.</p>
        </div>
      </div>
    </section>
  
    {/* How It Works */}
    <section id="how-it-works" className="py-16 px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">How EduAccess Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our platform adapts to your unique learning needs with personalized AI assistance
        </p>
      </div>
  
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Student using EduAccess platform" 
            className="rounded-xl shadow-lg w-full h-auto"
            keywords="accessibility technology, education platform, assistive tech"
          />
        </div>
        <div className="md:w-1/2 space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
              <p className="text-gray-600">Set up your accessibility preferences and learning goals to personalize your experience.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Connect Learning Materials</h3>
              <p className="text-gray-600">Upload or link your course materials, textbooks, and assignments to the platform.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">AI Adapts Content</h3>
              <p className="text-gray-600">Our AI processes and transforms content into your preferred accessible format.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center shrink-0">
              4
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Learn Your Way</h3>
              <p className="text-gray-600">Study with personalized assistance, at your own pace, with tools that adapt to your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    {/* Testimonials */}
    <section id="testimonials" className="py-16 px-8 bg-gray-50 rounded-xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hear from students and educators who have transformed their learning experience with EduAccess
        </p>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzQ3OTc4MzkwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Sarah J." 
              className="w-14 h-14 rounded-full mr-4 object-cover"
              keywords="student portrait, testimonial"
            />
            <div>
              <h3 className="font-semibold">Sarah J.</h3>
              <p className="text-gray-500 text-sm">Visually impaired student</p>
            </div>
          </div>
          <p className="text-gray-600 italic">
            "EduAccess changed everything for me. The image descriptions and text-to-speech features help me fully engage with my courses. I'm finally able to keep up with my classmates without constant assistance."
          </p>
          <div className="flex text-yellow-400 mt-4">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
          </div>
        </div>
  
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <img 
              src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwyfHxzdHVkZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzQ3OTc4MzkwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Michael T." 
              className="w-14 h-14 rounded-full mr-4 object-cover"
              keywords="student portrait, testimonial"
            />
            <div>
              <h3 className="font-semibold">Michael T.</h3>
              <p className="text-gray-500 text-sm">Student with dyslexia</p>
            </div>
          </div>
          <p className="text-gray-600 italic">
            "The simplified text feature and AI tutor have been game-changers for me. I can finally understand complex topics without struggling through dense text. My grades have improved dramatically!"
          </p>
          <div className="flex text-yellow-400 mt-4">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
          </div>
        </div>
  
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzQ3OTc4NDExfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Dr. Emily R." 
              className="w-14 h-14 rounded-full mr-4 object-cover"
              keywords="teacher portrait, testimonial"
            />
            <div>
              <h3 className="font-semibold">Dr. Emily R.</h3>
              <p className="text-gray-500 text-sm">Special Education Teacher</p>
            </div>
          </div>
          <p className="text-gray-600 italic">
            "As an educator, I've seen firsthand how EduAccess levels the playing field for students with different abilities. It's revolutionized my classroom and allowed all my students to participate equally."
          </p>
          <div className="flex text-yellow-400 mt-4">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star_half</span>
          </div>
        </div>
      </div>
    </section>
  
    {/* Pricing */}
    <section id="pricing" className="py-16 px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the plan that works best for your needs
        </p>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
          <h3 className="text-xl font-bold mb-2">Basic</h3>
          <div className="text-primary-600 text-4xl font-bold mb-2">Free</div>
          <p className="text-gray-600 mb-6">For individuals getting started</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="material-symbols-outlined text-green-500 mr-2">check_circle</span>
              <span>AI Chat Tutor (limited)</span>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-green-500 mr-2">check_circle</span>
              <span>Text-to-Speech</span>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-green-500 mr-2">check_circle</span>
              <span>Basic Content Adaptation</span>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-green-500 mr-2">check_circle</span>
              <span>Community Support</span>
            </li>
          </ul>
          <button className="w-full py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-300">
            Get Started
          </button>
        </div>
  
        <div className="bg-primary-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-primary-900 text-sm font-bold py-1 px-4 rounded-full">
            Most Popular
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Premium</h3>
          <div className="text-white text-4xl font-bold mb-2">$9.99<span className="text-base font-normal">/month</span></div>
          <p className="text-primary-100 mb-6">For students and individual learners</p>
          <ul className="space-y-3 mb-8 text-white">
            <li className="flex items-center">
              <span className="material-symbols-outlined text-primary-200 mr-2">check_circle</span>
              <span>Full AI Chat Tutor Access</span>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-primary-200 mr-2">check_circle</span>
              <span>Speech-to-Text & Text-to-Speech</span>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-primary-200 mr-2">check_circle</span>
              <span>Advanced Content Adaptation</span>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-primary-200 mr-2">check_circle</span>
              <span>Image & Video Descriptions</span>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-primary-200 mr-2">check_circle</span>
              <span>Simplified Text Options</span>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-primary-200 mr-2">check_circle</span>
              <span>Email Support</span>
            </li>
          </ul>
          <button className="w-full py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-300">
            Start Free Trial
          </button>
        </div>
  
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
          <h3 className="text-xl font-bold mb-2">Institution</h3>
          <div className="text-primary-600 text-4xl font-bold mb-2">Custom</div>
          <p className="text-gray-600 mb-6">For schools and organizations</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="material-symbols-outlined text-green-500 mr-2">check_circle</span>
              <span>All Premium Features</span>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-green-500 mr-2">check_circle</span>
              <span>Multiple User Accounts</span>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-green-500 mr-2">check_circle</span>
              <span>Admin Dashboard</span>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-green-500 mr-2">check_circle</span>
              <span>Progress Tracking</span>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-green-500 mr-2">check_circle</span>
              <span>Custom Integration</span>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-green-500 mr-2">check_circle</span>
              <span>Dedicated Support Manager</span>
            </li>
          </ul>
          <button className="w-full py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  
    {/* CTA */}
    <section className="py-16 px-8 bg-gradient-to-r from-primary-700 to-primary-900 rounded-xl text-white text-center my-8">
      <h2 className="text-3xl font-bold mb-4">Ready to Make Learning Accessible for All?</h2>
      <p className="max-w-2xl mx-auto mb-8 text-primary-100">
        Join thousands of students and educators already using EduAccess to transform their educational experience
      </p>
      <button className="bg-white text-primary-700 font-bold py-3 px-8 rounded-lg hover:bg-primary-100 transition-all duration-300 transform hover:-translate-y-1 shadow-md">
        Start Your Free Trial Today
      </button>
      <p className="mt-4 text-primary-200">No credit card required. Cancel anytime.</p>
    </section>
  
    {/* Footer */}
    <footer className="py-12 px-8 bg-gray-100 rounded-t-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <svg className="w-8 h-8 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z" fill="currentColor" />
              <path d="M2 14.5L12 19.5L22 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            
  <h3 className="text-xl font-bold text-primary-600">EduAble</h3>
  
          </div>
          
  <p className="text-gray-600 mb-4">
    AI-powered inclusive education platform built to support learners with disabilities.
  </p>
  
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-300">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-300">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-300">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-300">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Platform</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">How It Works</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Pricing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Testimonials</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">FAQs</a></li>
          </ul>
        </div>
  
        <div>
          <h3 className="font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Guides</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Webinars</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Case Studies</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Support Center</a></li>
          </ul>
        </div>
  
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Careers</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Partners</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Contact Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
  
      <div className="pt-8 border-t border-gray-200 text-center text-gray-500">
        
  <p>&copy; 2023 EduAble. All rights reserved.</p>
      </div>
    </footer>
  
    {/* Login Modal */}
    <div className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      </div></div> 
        </div>
  )
}
export default HeroSection;

