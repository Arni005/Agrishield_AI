// src/components/Homepage.jsx
import { useState,  useEffect } from 'react';

import { 
  FaCloudRain, FaWater, FaSeedling,
  FaBars, FaTimes
} from 'react-icons/fa';

const Homepage = ({ onAnalyzeClick }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const heroImages = [
  "/farmers/farmer1.jpg",
  "/farmers/farmer2.jpg",
  "/farmers/farmer3.jpg"
];

const [currentHero, setCurrentHero] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentHero((prev) => (prev + 1) % heroImages.length);
  }, 4000); // change image every 4s

  return () => clearInterval(interval);
}, []);

  const features = [
    {
      icon: <FaCloudRain className="text-blue-600 text-2xl" />,
      title: "Rainfall Risk Assessment",
      description:
        "Demonstrates analysis of historical and public rainfall data to indicate potential drought or excess rainfall risks."
    },
    {
      icon: <FaWater className="text-cyan-600 text-2xl" />,
      title: "Water Advisory",
      description:
        "Provides indicative irrigation guidance based on climate patterns for efficient water usage."
    },
    {
      icon: <FaSeedling className="text-emerald-600 text-2xl" />,
      title: "Crop Suitability",
      description:
        "Suggests climate-aligned crops based on regional conditions using rule-based and AI-assisted logic."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f6f8f3] text-gray-900">

      {/* ================= NAVBAR ================= */}
<div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between h-20">

      {/* Logo + Title */}
      <div className="flex items-center gap-4">
        <img
          src="/logo.jpeg"
          alt="AgriShield AI"
          className="w-12 h-12 rounded-lg bg-white p-1 border border-gray-300"
        />
        <span className="text-xl font-semibold text-[#1f3d2b]">
          AgriShield AI
        </span>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        
        {/* Analysis Button */}
        <a
          href="/analyze"
          className="hidden md:inline-block px-5 py-2 bg-lime-600 hover:bg-lime-700 text-white text-sm font-semibold rounded-md"
        >
          Run Analysis
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="p-3 rounded-md hover:bg-gray-100"
        >
          {isNavOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isNavOpen && (
      <div className="py-4 border-t border-gray-200 flex flex-col gap-3">

        <button
          onClick={() => {
            setActivePage('home');
            setIsNavOpen(false);
          }}
          className="px-4 py-2 border text-left hover:bg-gray-100"
        >
          Home
        </button>

        <a href="/tech-stack" className="px-4 py-2 border hover:bg-gray-100">
          Tech Stack
        </a>

        <a href="/about" className="px-4 py-2 border hover:bg-gray-100">
          About
        </a>

        <a href="/sdg-alignment" className="px-4 py-2 border hover:bg-gray-100">
          SDG Alignment
        </a>

        {/* Mobile Analysis Button */}
        <a
          href="/analyze"
          className="px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white font-semibold text-center rounded-md"
        >
          Run Analysis
        </a>
      </div>
    )}
  </div>
</div>


      {/* ================= CONTENT ================= */}
      <div className="pt-16">

        {activePage === 'home' && (
          <>
            {/* ================= HERO ================= */}
<div className="relative h-[520px] overflow-hidden">

  {/* Sliding Background Images */}
  {heroImages.map((img, index) => (
    <div
      key={index}
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
        index === currentHero ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: `url(${img})` }}
    />
  ))}

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#1f3d2b]/75"></div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center text-white">
    <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
      AgrishieldAI - Predict. Protect. Prosper.
    </h1>

    <p className="text-lg text-gray-200 max-w-3xl mx-auto">
    1M1B internship project showcasing the application of AI-driven analysis and climate datasets to support early risk identification and decision-making in Indian agriculture.
    </p>

    <div className="flex justify-center mt-8">
      <a
        href="/analyze"
        className="px-8 py-3 bg-lime-600 hover:bg-lime-700 text-white font-semibold rounded"
      >
        Start Analysis
      </a>
    </div>

    
  </div>
</div>


  {/* ================= FARMER CHALLENGES ================= */}
<div className="max-w-7xl mx-auto px-6 mb-20">
  <div className="bg-white border border-gray-200 p-10 grid lg:grid-cols-2 gap-10 items-center">
    
    {/* LEFT: TEXT */}
    <div>
      <h2 className="text-3xl font-serif font-semibold text-[#1f3d2b] mb-4">
        Challenges Faced by Indian Farmers
      </h2>

      <p className="text-gray-600 text-base mb-8 leading-relaxed">
        Small and marginal farmers operate under significant uncertainty due to
        climate variability, limited access to timely information, and resource
        constraints. These challenges directly affect productivity and income stability.
      </p>

      <ul className="space-y-5 text-sm text-gray-700">
        <li className="flex gap-3">
          <span className="mt-1 w-2 h-2 bg-[#1f3d2b] rounded-full"></span>
          <div>
            <h3 className="font-semibold text-[#1f3d2b]">
              Climate Uncertainty
            </h3>
            <p className="mt-1 leading-relaxed">
              Irregular rainfall, temperature fluctuations, and extreme weather events
              make planning sowing, irrigation, and harvesting increasingly difficult.
            </p>
          </div>
        </li>

        <li className="flex gap-3">
          <span className="mt-1 w-2 h-2 bg-[#1f3d2b] rounded-full"></span>
          <div>
            <h3 className="font-semibold text-[#1f3d2b]">
              Limited Decision Support
            </h3>
            <p className="mt-1 leading-relaxed">
              Advisory services are often delayed or generalized, offering little
              location-specific guidance for climate risk management.
            </p>
          </div>
        </li>

        <li className="flex gap-3">
          <span className="mt-1 w-2 h-2 bg-[#1f3d2b] rounded-full"></span>
          <div>
            <h3 className="font-semibold text-[#1f3d2b]">
              Resource Constraints
            </h3>
            <p className="mt-1 leading-relaxed">
              Water scarcity, rising input costs, and limited access to technology
              restrict the ability to adapt to changing climate conditions.
            </p>
          </div>
        </li>

        <li className="flex gap-3">
          <span className="mt-1 w-2 h-2 bg-[#1f3d2b] rounded-full"></span>
          <div>
            <h3 className="font-semibold text-[#1f3d2b]">
              Regional Variability
            </h3>
            <p className="mt-1 leading-relaxed">
              Agricultural conditions vary widely across regions, making
              one-size-fits-all advisories ineffective.
            </p>
          </div>
        </li>
      </ul>
    </div>

    {/* RIGHT: IMAGE */}
    <div className="w-full">
      <img
        src="/farmers/challenges.jpg"
        alt="Indian farmers working in fields"
        className="w-full h-[360px] object-cover rounded-md border"
      />
      <p className="text-xs text-gray-500 mt-2 italic">
        Representative image - used for demonstration purposes
      </p>
    </div>

  </div>
</div>


            {/* ================= ADVISORY MODULES ================= */}
<div className="max-w-7xl mx-auto px-6 mb-24">

  <div className="text-center mb-12">
    <h2 className="text-3xl font-serif font-semibold mb-3">
      Advisory Modules (Prototype)
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      The following modules demonstrate how climate indicators can be
      translated into meaningful agricultural advisories using
      rule-based and AI-assisted logic.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Module 1 */}
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 mb-4">
        <FaCloudRain className="text-blue-600 text-2xl" />
      </div>
      <h3 className="text-lg font-semibold mb-2">
        Rainfall Risk Assessment
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Analyzes historical and publicly available rainfall patterns to
        indicate potential drought or excess rainfall conditions for a region.
      </p>
    </div>

    {/* Module 2 */}
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-50 mb-4">
        <FaWater className="text-cyan-600 text-2xl" />
      </div>
      <h3 className="text-lg font-semibold mb-2">
        Water Advisory
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Provides indicative irrigation guidance based on observed
        climate trends to promote efficient water usage.
      </p>

    </div>

    {/* Module 3 */}
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-50 mb-4">
        <FaSeedling className="text-emerald-600 text-2xl" />
      </div>
      <h3 className="text-lg font-semibold mb-2">
        Crop Suitability Insights
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Suggests climate-aligned crop categories for a region using
        simplified rules and AI-assisted reasoning.
      </p>
      
    </div>

  </div>
</div>


            {/* ================= WORKFLOW ================= */}
<div className="max-w-7xl mx-auto px-6 mb-20">
  <div className="bg-white border rounded-xl p-12">

    <h2 className="text-3xl font-serif font-semibold text-center mb-4">
      How the System Works
    </h2>

    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
      A simple three-step workflow demonstrating how climate data is processed
      into actionable agricultural advisories.
    </p>

    <div className="grid md:grid-cols-3 gap-10">
      
      {/* Step 1 */}
      <div className="relative bg-[#f6f8f3] border rounded-lg p-8 text-center">
        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#1f3d2b] text-white font-semibold">
          1
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Input Data
        </h3>
        <p className="text-sm text-gray-600">
          Simulated farm location and publicly available climate parameters
          are provided as inputs to the system.
        </p>
      </div>

      {/* Step 2 */}
      <div className="relative bg-[#f6f8f3] border rounded-lg p-8 text-center">
        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#1f3d2b] text-white font-semibold">
          2
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Climate Risk Analysis
        </h3>
        <p className="text-sm text-gray-600">
          The model processes rainfall trends, temperature patterns,
          and rule-based thresholds to assess potential risks.
        </p>
      </div>

      {/* Step 3 */}
      <div className="relative bg-[#f6f8f3] border rounded-lg p-8 text-center">
        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#1f3d2b] text-white font-semibold">
          3
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Advisory Output
        </h3>
        <p className="text-sm text-gray-600">
          The system generates qualitative risk levels and
          indicative advisories for academic demonstration.
        </p>
      </div>

    </div>
  </div>
</div>

            {/* ================= CTA ================= */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-semibold mb-4">
                Explore the Prototype
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Developed by a solo student developer as part of an academic internship
                to demonstrate applied AI concepts in agriculture.
              </p>

              <a
                href="/analyze"
                className="px-8 py-3 bg-lime-600 hover:bg-lime-700 text-white font-semibold rounded"
              >
                Run Demo Analysis
              </a>
            </div>
          </>
        )}

        {/* ================= FOOTER ================= */}
        <div className="bg-[#1f3d2b] text-gray-200 py-6 text-center text-sm">
          <p> <strong>AgriShield AI</strong> - 1M1B Internship Project</p>
          <p className="text-gray-400 mt-1">
            Powered by Ollama + RAG | FastAPI Backend | React Frontend
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
