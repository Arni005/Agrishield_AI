// src/components/Header.jsx
const Header = () => {
  return (
    <header className="relative overflow-hidden border-b border-gray-300 bg-[#f6f8f3] backdrop-blur-sm">
      {/* Back to Home Link */}
      <div className="max-w-7xl mx-auto px-4 pt-4 z-20 relative">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#1f3d2b] hover:underline font-medium"
        >
          ← Back to Home
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-lime-100/50 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-100/50 to-transparent rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-lime-500 to-emerald-600">
                <img
                  src="/logo.jpeg"
                  alt="AgriShield AI Logo"
                  className="w-full h-full object-cover block"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-lime-400 rounded-full border-2 border-white shadow"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-emerald-300 rounded-full border-2 border-white shadow"></div>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-[#1f3d2b] font-serif tracking-tight">
                AgriShield <span className="text-emerald-700">AI</span>
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-700">Climate-Aware Crop Protection</span>
                <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
                <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                  AI-Powered
                </span>
              </div>
            </div>
          </div>

          {/* Stats/Tagline */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <div className="text-center">
                <div className="text-xl font-bold text-emerald-700">RAG</div>
                <div className="text-xs text-gray-500">Knowledge Base</div>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-emerald-700">LLM</div>
                <div className="text-xs text-gray-500">AI Model</div>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-emerald-700">Real-time</div>
                <div className="text-xs text-gray-500">Analysis</div>
              </div>
            </div>
            
            <div className="px-4 py-2 bg-gradient-to-r from-lime-100/50 to-emerald-100/50 rounded-full border border-gray-300">
              <span className="text-sm text-[#1f3d2b]">🌱 1M1B Internship Project</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
