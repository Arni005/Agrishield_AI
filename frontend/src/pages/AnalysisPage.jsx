import { useState } from 'react';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import ResultsDisplay from '../components/ResultsDisplay';
import HistoryPanel from '../components/HistoryPanel';
import Footer from '../components/Footer';

// ✅ Analysis Page with HomePage/SDGAlignment theme
const AnalysisPage = ({ onBackClick }) => {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const analyzeCrop = async (data) => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Analysis failed');

      const result = await response.json();
      const newAnalysis = {
        ...data,
        result: result.result,
        timestamp: new Date().toLocaleTimeString(),
        id: Date.now(),
        riskLevel: result.result.includes("High Risk") ? "High" : 
                  result.result.includes("Low Risk") ? "Low" : "Medium"
      };

      setAnalysis(newAnalysis);
      setHistory(prev => [newAnalysis, ...prev.slice(0, 4)]);
    } catch (error) {
      console.error('Failed to analyze crop:', error);
      alert(`Analysis failed: ${error.message}\n\nEnsure backend is running at http://127.0.0.1:8000`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f8f3] text-gray-900 relative overflow-hidden">

      {/* Background organic shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#1f3d2b]/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-lime-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-emerald-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Back Button */}
      {onBackClick && (
        <div className="absolute top-4 left-4 z-20">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-[#1f3d2b] hover:bg-gray-100 font-medium rounded-md shadow-sm"
          >
            ← Back to Home
          </button>
        </div>
      )}

      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Analysis Card */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d9f99d]/50 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gradient-to-br from-lime-500 to-emerald-600 flex items-center justify-center">
                      <img
                        src="/logo.jpeg"
                        alt="AgriShield AI Logo"
                        className="w-full h-full object-cover block"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1f3d2b] font-serif">Crop Risk Analysis</h2>
                    <p className="text-gray-700 mt-1 text-sm">AI-powered climate assessment for smart farming</p>
                  </div>
                </div>
                
                <InputForm onSubmit={analyzeCrop} loading={loading} />
              </div>
            </div>

            {/* History Panel */}
            <HistoryPanel history={history} onSelect={setAnalysis} />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Results Card */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="bg-[#1f3d2b] px-8 py-6 relative overflow-hidden rounded-t-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center"></div>
                    <div>
                      <h2 className="text-2xl font-bold text-white font-serif">Climate Risk Analysis</h2>
                      <p className="text-emerald-100">Intelligent insights for crop protection</p>
                    </div>
                  </div>
                  {analysis && (
                    <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm">Real-time AI Analysis</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-8">
                {analysis ? (
                  <ResultsDisplay analysis={analysis} />
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-lime-100 to-emerald-100 rounded-3xl mb-6">
                      <span className="text-5xl">🌱</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1f3d2b] mb-3 font-serif">Ready to Analyze</h3>
                    <p className="text-gray-700 max-w-md mx-auto">
                      Enter your crop details above to receive AI-powered climate risk assessment and actionable recommendations.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AnalysisPage;
