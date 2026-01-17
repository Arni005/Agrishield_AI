// src/components/TechStack.jsx
// src/components/TechStack.jsx
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaRobot,
  FaProjectDiagram,
} from "react-icons/fa";

const TechStack = () => {
  return (
    <div className="min-h-screen bg-[#f6f8f3] text-gray-900">

      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <a
          href="/"
          className="text-[#1f3d2b] hover:underline font-medium"
        >
          ← Back to Home
        </a>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-6 py-16">
        <h1 className="text-4xl font-serif font-semibold text-[#1f3d2b] mb-4">
          Technology Stack
        </h1>
        <p className="text-gray-700 text-lg">
          A practical, privacy-first AI architecture built for climate-resilient
          agriculture
        </p>
      </div>

      {/* Architecture Flow */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="bg-white border border-gray-200 rounded-xl p-10">
          <h2 className="text-2xl font-serif font-semibold text-[#1f3d2b] mb-8 flex items-center gap-3">
            <FaProjectDiagram className="text-[#1f3d2b]" />
            System Architecture
          </h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              { title: "Frontend UI", icon: <FaReact />, desc: "User input & visualization" },
              { title: "FastAPI", icon: <FaServer />, desc: "Request handling & validation" },
              { title: "Ollama LLM", icon: <FaRobot />, desc: "Local AI reasoning" },
              { title: "LangChain RAG", icon: <FaRobot />, desc: "Context grounding" },
              { title: "ChromaDB", icon: <FaDatabase />, desc: "Knowledge retrieval" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="text-3xl text-[#1f3d2b] mb-3 mx-auto">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#1f3d2b]">{item.title}</h3>
                <p className="text-gray-700 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stack Details */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 mb-20">
        {/* Frontend */}
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h3 className="text-3xl font-serif font-semibold mb-6 text-[#1f3d2b]">
            Frontend Layer
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#1f3d2b] rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-white">✓</span>
              </div>
              <div>
                <span className="font-semibold">React + Vite</span> — fast component-based UI
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#1f3d2b] rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-white">✓</span>
              </div>
              <div>
                <span className="font-semibold">Tailwind CSS</span> — responsive, utility-first styling
              </div>
            </li>
          </ul>
        </div>

        {/* Backend & AI */}
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h3 className="text-3xl font-serif font-semibold mb-6 text-[#1f3d2b]">
            Backend & AI Layer
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#1f3d2b] rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-white">✓</span>
              </div>
              <div>
                <span className="font-semibold">FastAPI</span> — high-performance Python backend
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#1f3d2b] rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-white">✓</span>
              </div>
              <div>
                <span className="font-semibold">Ollama (LLaMA)</span> — local large language model
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#1f3d2b] rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-white">✓</span>
              </div>
              <div>
                <span className="font-semibold">LangChain</span> — RAG pipeline & prompt orchestration
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#1f3d2b] rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-white">✓</span>
              </div>
              <div>
                <span className="font-semibold">ChromaDB</span> — vector storage for agricultural knowledge
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Workflow */}
<div className="max-w-6xl mx-auto px-6 mb-24">
  <div className=" rounded-xl p-10 text-white flex justify-center items-center">
    <img
      src="/workflow.png" // replace with your workflow image path
      alt="AgriShield AI Workflow"
      className="w-full h-auto object-contain rounded-xl"
    />
  </div>
</div>


      {/* Footer */}
      <div className="bg-[#1f3d2b] text-gray-200 py-8 mt-12 text-center text-sm">
        <p><strong>AgriShield AI</strong> - 1M1B Internship Project</p>
        <p className="text-gray-400 mt-1"> Powered by Ollama + RAG | FastAPI Backend | React Frontend</p>
      </div>
    </div>
  );
};

export default TechStack;
