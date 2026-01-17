// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-300 bg-[#1f3d2b]">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-200">
          <p className="mb-2 text-sm">
            <strong>AgriShield AI</strong> - 1M1B Internship Project
          </p>
          <p className="text-xs text-gray-400">
            Powered by Ollama + RAG | FastAPI Backend | React Frontend
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
