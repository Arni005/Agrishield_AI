// src/components/About.jsx
const About = () => {
  return (
    <div className="min-h-screen bg-[#f6f8f3] text-gray-900">

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-[#1f3d2b] hover:underline font-medium"
        >
          ← Back to Home
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white border border-gray-200 p-10 rounded-xl">

          {/* Hero Section */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-lg border border-gray-300 mb-6 overflow-hidden">
              <img 
                src="/logo.jpeg" 
                alt="AgriShield AI Logo" 
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl font-serif font-semibold mb-4 text-[#1f3d2b]">
              AgriShield AI
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              AgriShield AI is an internship project prototype developed by a single student developer to explore how artificial intelligence can support climate-aware agricultural decision-making in India. The project focuses on demonstrating the use of AI, Retrieval-Augmented Generation (RAG), and modern web technologies to address real-world sustainability challenges in agriculture.
            </p>
          </div>

          {/* Project Objective */}
          <div className="mb-10 bg-white border border-gray-200 rounded-xl p-8">
            <h2 className="text-3xl font-serif font-semibold mb-4 text-[#1f3d2b]">
              Project Objective
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The primary objective of AgriShield AI is to design a decision-support system that helps farmers and agricultural stakeholders understand potential climate risks related to crop cultivation. The project aims to showcase how AI-driven insights can assist in reducing uncertainty caused by changing rainfall patterns and climate variability. This project was developed as part of an AI for Sustainability internship, with an emphasis on responsible AI use rather than real-world deployment.
            </p>
          </div>

          {/* What We Do */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Prototype Demonstrates */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f3d2b]">
                What the Prototype Demonstrates
              </h2>
              <p className="text-gray-600 mb-6">Core Functional Capabilities</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1f3d2b] rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1f3d2b]">Climate Risk Assessment</h3>
                    <p className="text-gray-600 text-sm">
                      Analyzes rainfall conditions and crop sensitivity to identify potential climate-related risks such as drought stress.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1f3d2b] rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1f3d2b]">Crop-Specific Advisory Insights</h3>
                    <p className="text-gray-600 text-sm">
                      Provides crop-aware recommendations based on contextual agricultural knowledge retrieved from curated documents.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1f3d2b] rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1f3d2b]">Action-Oriented Suggestions</h3>
                    <p className="text-gray-600 text-sm">
                      Generates practical, easy-to-understand advisory outputs intended for awareness and learning purposes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Focus on Indian Agriculture */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f3d2b]">
                Focus on Indian Agriculture
              </h2>
              <p className="text-gray-600 mb-6">Designed with local relevance in mind</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1f3d2b] rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1f3d2b]">Region-Aware Reasoning</h3>
                    <p className="text-gray-600 text-sm">
                      The system accounts for regional climatic differences within India at a conceptual level.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1f3d2b] rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1f3d2b]">Language Expansion (Planned)</h3>
                    <p className="text-gray-600 text-sm">
                      Future improvements may include multilingual support (Hindi and regional languages) to improve accessibility.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1f3d2b] rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1f3d2b]">Low-Resource Friendly Design</h3>
                    <p className="text-gray-600 text-sm">
                      Built to work with minimal infrastructure, demonstrating suitability for areas with limited connectivity (conceptual).
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Expected Impact */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-semibold text-center mb-8 text-[#1f3d2b]">
              Expected Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border p-6 text-center rounded-xl">
                <h3 className="font-semibold mb-2 text-[#1f3d2b]">Increase awareness of climate risks in agriculture</h3>
                <p className="text-gray-600 text-sm">
                  Educating about climate challenges and crop impacts
                </p>
              </div>
              <div className="bg-white border p-6 text-center rounded-xl">
                <h3 className="font-semibold mb-2 text-[#1f3d2b]">Encourage climate-resilient crop choices</h3>
                <p className="text-gray-600 text-sm">
                  Promoting climate-adapted crop selection
                </p>
              </div>
              <div className="bg-white border p-6 text-center rounded-xl">
                <h3 className="font-semibold mb-2 text-[#1f3d2b]">Support sustainable decision-making</h3>
                <p className="text-gray-600 text-sm">
                  Foundation for informed agricultural choices
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-10">
            <h2 className="text-3xl font-serif font-semibold mb-6 text-center text-[#1f3d2b]">The Vision</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
              The long-term vision of AgriShield AI is to serve as a learning and research foundation for future climate-aware agricultural AI systems. With further development, real-world data integration, and expert validation, such systems could play a meaningful role in supporting farmers facing climate uncertainty.
              AgriShield AI represents a step toward exploring how responsible AI design can contribute to sustainable agriculture and climate adaptation.
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1f3d2b] text-gray-200 py-6 text-center text-sm">
        <p><strong>AgriShield AI</strong> - 1M1B Internship Project</p>
        <p className="text-gray-400 mt-1">Powered by Ollama + RAG | FastAPI Backend | React Frontend</p>
      </div>

    </div>
  );
};

export default About;
