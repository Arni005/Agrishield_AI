// src/components/SDGAlignment.jsx
// src/components/SDGAlignment.jsx
const SDGAlignment = () => {
  const sdgs = [
    {
      number: 2,
      title: "Zero Hunger",
      icon: (
        <div className="w-24 h-24 rounded-md overflow-hidden border">
          <img
            src="/zero-hunger-2.png"
            alt="Zero Hunger Logo"
            className="w-full h-full object-cover"
          />
        </div>
      ),
      color: "bg-[#1f3d2b]",
      description:
        "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture",
      alignment:
        "AgriShield AI directly contributes to SDG 2 by helping farmers reduce the risk of crop failure caused by adverse climate conditions. Through AI-driven climate risk assessment and crop suitability analysis, the platform enables farmers to make better-informed decisions regarding crop selection and seasonal planning."
    },
    {
      number: 13,
      title: "Climate Action",
      icon: (
        <div className="w-24 h-24 rounded-md overflow-hidden border">
          <img
            src="/climate-action-13.png"
            alt="Climate Action Logo"
            className="w-full h-full object-cover"
          />
        </div>
      ),
      color: "bg-[#1f3d2b]",
      description:
        "Take urgent action to combat climate change and its impacts",
      alignment:
        "AgriShield AI supports SDG 13 by enabling climate adaptation at the grassroots level. The platform analyzes rainfall variability and climate-related threats to help farmers understand how changing weather patterns may affect crop performance."
    }
  ];

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
        <div className="bg-white border border-gray-200 p-10">

          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-serif font-semibold mb-4">
              SDG Alignment
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              How AgriShield AI aligns with the United Nations Sustainable Development Goals
            </p>
            <p className="mt-3 text-sm text-gray-500 italic">
              United Nations 2030 Agenda
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-14 border border-gray-200 p-8 bg-[#f6f8f3]">
            <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1f3d2b]">
              Our Commitment to Sustainability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              AgriShield AI is designed in alignment with the United Nations 2030 Agenda for Sustainable Development. The platform addresses pressing challenges faced by small and marginal farmers due to climate variability, water stress, and unpredictable rainfall patterns. By combining artificial intelligence with climate-aware agricultural knowledge, AgriShield AI promotes informed decision-making that supports sustainable food systems and climate resilience.
              Rather than replacing traditional agricultural expertise, AgriShield AI acts as a decision-support system that enhances farmers’ ability to adapt to environmental risks while using available resources more efficiently.
            </p>
          </div>

          {/* SDG Cards */}
          <div className="space-y-10 mb-14">
            {sdgs.map((sdg, index) => (
              <div
                key={index}
                className="border border-gray-200 p-8 bg-white"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div>
                    {sdg.icon}
                    <div className={`mt-3 text-white text-sm px-3 py-1 text-center ${sdg.color}`}>
                      SDG #{sdg.number}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-1">
                      {sdg.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {sdg.description}
                    </p>

                    <div className="border border-gray-200 p-6 bg-[#f6f8f3]">
                      <h4 className="font-semibold mb-2 text-[#1f3d2b]">
                        How AgriShield Contributes
                      </h4>
                      <p className="text-gray-700">
                        {sdg.alignment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expected Impact */}
          <div className="border border-gray-200 p-10 mb-14 bg-[#f6f8f3]">
            <h2 className="text-3xl font-serif font-semibold text-center mb-10">
              Expected Impact
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border p-6 text-center">
                <h3 className="font-semibold mb-2">
                  Improved Water Awareness
                </h3>
                <p className="text-sm text-gray-600">
                  By highlighting rainfall risk and drought stress conditions
                </p>
              </div>

              <div className="bg-white border p-6 text-center">
                <h3 className="font-semibold mb-2">
                  Reduced Climate-Related Crop Risk
                </h3>
                <p className="text-sm text-gray-600">
                  By assessing crop - rainfall suitability using contextual knowledge
                </p>
              </div>

              <div className="bg-white border p-6 text-center">
                <h3 className="font-semibold mb-2">
                  Promotion of Sustainable Practices
                </h3>
                <p className="text-sm text-gray-600">
                  By recommending drought-tolerant alternatives where appropriate
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Supporting Sustainable Agriculture Through AI
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              This project demonstrates how AI-driven advisory systems can contribute to climate-resilient and sustainable agricultural practices.
            </p>

            <a
              href="/analyze"
              className="inline-block px-8 py-3 bg-lime-600 hover:bg-lime-700 text-white font-semibold rounded"
            >
              Start Demo Analysis
            </a>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1f3d2b] text-gray-200 py-6 text-center text-sm">
        <p> <strong>AgriShield AI</strong> - 1M1B Internship Project</p>
        <p className="text-gray-400 mt-1">
          Educational prototype - Powered by Ollama + RAG | FastAPI Backend | React Frontend
        </p>
      </div>
    </div>
  );
};

export default SDGAlignment;
