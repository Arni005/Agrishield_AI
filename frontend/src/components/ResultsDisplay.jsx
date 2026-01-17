import { useState, useEffect } from 'react';
import { 
  FaDownload, FaCopy, FaExclamationTriangle, FaCheckCircle, 
  FaInfoCircle, FaWater, FaThermometer, FaShieldAlt, 
  FaLeaf, FaLightbulb, FaClock, FaTools, FaDollarSign, 
  FaBullseye, FaCloudRain, FaSeedling 
} from 'react-icons/fa';

// Simple markdown to HTML converter
const MarkdownRenderer = ({ text }) => {
  if (!text) return null;
  
  // Convert markdown to HTML
  const convertMarkdown = (md) => {
    let html = md;
    
    // Convert headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>');
    
    // Convert bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>');
    
    // Convert bullet points
    html = html.replace(/^\* (.*$)/gim, '<li class="ml-4 mb-1">$1</li>');
    html = html.replace(/^- (.*$)/gim, '<li class="ml-4 mb-1">$1</li>');
    
    // Wrap consecutive list items in <ul>
    html = html.replace(/(<li>.*<\/li>)/g, '<ul class="list-disc pl-6 my-2">$1</ul>');
    
    // Convert line breaks to <br>
    html = html.replace(/\n\n/g, '</p><p class="my-2">');
    html = html.replace(/\n/g, '<br/>');
    
    // Wrap in paragraph if not already wrapped
    if (!html.startsWith('<')) {
      html = `<p class="my-2">${html}</p>`;
    }
    
    return html;
  };
  
  const html = convertMarkdown(text);
  
  return (
    <div 
      className="prose prose-sm max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

const ResultsDisplay = ({ analysis }) => {
  const [parsedResult, setParsedResult] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Parse the AI response into structured data
  useEffect(() => {
    if (!analysis?.result) return;

    const parseAIResponse = (text) => {
      const result = {
        riskLevel: '',
        climateThreats: [],
        recommendations: [],
        immediateActions: [],
        shortTermSolutions: [],
        longTermStrategies: [],
        resources: [],
        costImpact: '',
        expectedOutcome: '',
        notes: [],
        rawText: text
      };

      // Extract risk level (remove ** from markdown)
      const riskMatch = text.match(/\*\*Risk Level:\*\*\s*([^\n]+)/i);
      if (riskMatch) {
        result.riskLevel = riskMatch[1].trim().replace(/\*\*/g, '');
      }

      // Extract primary threat (remove ** from markdown)
      const threatMatch = text.match(/\*\*Primary Threat:\*\*\s*([^\n]+)/i);
      if (threatMatch) {
        result.climateThreats = [threatMatch[1].trim().replace(/\*\*/g, '')];
      }

      // Extract urgency
      const urgencyMatch = text.match(/\*\*Urgency:\*\*\s*([^\n]+)/i);
      if (urgencyMatch) {
        result.urgency = urgencyMatch[1].trim().replace(/\*\*/g, '');
      }

      // Extract cost impact
      const costMatch = text.match(/\*\*Cost Impact:\*\*\s*([^\n]+)/i);
      if (costMatch) {
        result.costImpact = costMatch[1].trim().replace(/\*\*/g, '');
      }

      // Extract expected outcome
      const outcomeMatch = text.match(/\*\*Expected Outcome:\*\*\s*([^\n]+)/i);
      if (outcomeMatch) {
        result.expectedOutcome = outcomeMatch[1].trim().replace(/\*\*/g, '');
      }

      // Extract bullet points (clean up markdown)
      const lines = text.split('\n');
      let currentSection = '';
      
      lines.forEach(line => {
        const trimmedLine = line.trim();
        
        // Detect sections
        if (trimmedLine.includes('Immediate Actions') || trimmedLine.includes('Immediate actions')) {
          currentSection = 'immediate';
        } else if (trimmedLine.includes('Short-Term Solutions') || trimmedLine.includes('Short-term solutions')) {
          currentSection = 'shortTerm';
        } else if (trimmedLine.includes('Long-Term Strategies') || trimmedLine.includes('Long-term strategies')) {
          currentSection = 'longTerm';
        } else if (trimmedLine.includes('Required Resources') || trimmedLine.includes('Resources Needed')) {
          currentSection = 'resources';
        }
        
        // Extract bullet points (remove * and clean)
        if (trimmedLine.startsWith('*')) {
          const content = trimmedLine.substring(1).trim().replace(/\*\*/g, '');
          if (content.length > 5) {
            if (currentSection === 'immediate') {
              result.immediateActions.push(content);
            } else if (currentSection === 'shortTerm') {
              result.shortTermSolutions.push(content);
            } else if (currentSection === 'longTerm') {
              result.longTermStrategies.push(content);
            } else {
              result.recommendations.push(content);
            }
          }
        }
        
        // Extract resources (with - or *)
        if ((trimmedLine.startsWith('-') || trimmedLine.startsWith('*')) && currentSection === 'resources') {
          const resource = trimmedLine.substring(1).trim().replace(/\*\*/g, '');
          if (resource) {
            result.resources.push(resource);
          }
        }
      });

      // Fallback: if no sections detected, extract any bullet points
      if (result.immediateActions.length === 0 && result.recommendations.length === 0) {
        const bulletRegex = /\*\s+([^\n]+)/g;
        let match;
        while ((match = bulletRegex.exec(text)) !== null) {
          const content = match[1].trim().replace(/\*\*/g, '');
          if (content.length > 10) {
            result.recommendations.push(content);
          }
        }
      }

      // Combine all recommendations
      result.recommendations = [
        ...result.immediateActions,
        ...result.shortTermSolutions,
        ...result.longTermStrategies
      ].filter((item, index, self) => 
        item && self.indexOf(item) === index
      ).slice(0, 8); // Limit to 8

      return result;
    };

    setParsedResult(parseAIResponse(analysis.result));
  }, [analysis]);

  // Get risk styling
  const getRiskConfig = (riskText) => {
    if (!riskText) return { 
      color: 'text-gray-600', 
      bg: 'bg-gray-100', 
      border: 'border-gray-200', 
      icon: <FaInfoCircle />,
      label: 'Assessing...'
    };
    
    const riskLower = riskText.toLowerCase();
    const isHigh = riskLower.includes('high');
    const isLow = riskLower.includes('low');
    
    if (isHigh) {
      return { 
        color: 'text-red-600', 
        bg: 'bg-gradient-to-r from-red-50 to-red-100', 
        border: 'border-red-200', 
        icon: <FaExclamationTriangle className="text-red-600" />,
        label: 'High Risk',
        bgClass: 'bg-red-500'
      };
    } else if (isLow) {
      return { 
        color: 'text-green-600', 
        bg: 'bg-gradient-to-r from-green-50 to-green-100', 
        border: 'border-green-200', 
        icon: <FaCheckCircle className="text-green-600" />,
        label: 'Low Risk',
        bgClass: 'bg-green-500'
      };
    } else {
      return { 
        color: 'text-yellow-600', 
        bg: 'bg-gradient-to-r from-yellow-50 to-yellow-100', 
        border: 'border-yellow-200', 
        icon: <FaInfoCircle className="text-yellow-600" />,
        label: 'Medium Risk',
        bgClass: 'bg-yellow-500'
      };
    }
  };

  const riskConfig = getRiskConfig(parsedResult?.riskLevel || analysis?.riskLevel);

  // If no parsed result, show raw text with markdown rendering
  if (!parsedResult || parsedResult.recommendations.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Analysis Results</h3>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${riskConfig.bg} ${riskConfig.border} border`}>
            {riskConfig.icon}
            <span className={`font-bold ${riskConfig.color}`}>
              {riskConfig.label}
            </span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <MarkdownRenderer text={analysis?.result || 'No analysis available'} />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header with Risk Badge */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Risk Analysis Report</h2>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-600">
            <div className="flex items-center gap-1">
              <FaShieldAlt className="text-gray-400" />
              <span>{analysis?.location || 'Location not specified'}</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden md:block"></div>
            <div className="flex items-center gap-1">
              <FaLeaf className="text-gray-400" />
              <span>{analysis?.crop || 'Crop not specified'}</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden md:block"></div>
            <div className="flex items-center gap-1">
              <FaCloudRain className="text-gray-400" />
              <span>{analysis?.rainfall || 'Rainfall data not available'}</span>
            </div>
          </div>
        </div>
        
        <div className={`flex items-center gap-3 px-6 py-3 rounded-xl ${riskConfig.bg} ${riskConfig.border} border-2`}>
          {riskConfig.icon}
          <div>
            <div className="text-sm font-medium text-gray-600">Risk Level</div>
            <div className={`text-xl font-bold ${riskConfig.color}`}>
              {parsedResult.riskLevel || riskConfig.label}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs for different sections */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {['overview', 'actions', 'resources', 'full'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-1 font-medium text-sm border-b-2 transition ${
                activeTab === tab
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab === 'overview' && 'Overview'}
              {tab === 'actions' && 'Action Plan'}
              {tab === 'resources' && 'Resources'}
              {tab === 'full' && 'Full Report'}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Climate Threats */}
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FaExclamationTriangle className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Climate Threats Identified</h3>
                  <p className="text-gray-600">Primary risks for your crop selection</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {parsedResult.climateThreats.map((threat, index) => {
                  const isDrought = threat.toLowerCase().includes('drought') || threat.toLowerCase().includes('water');
                  const isHeat = threat.toLowerCase().includes('heat') || threat.toLowerCase().includes('temperature');
                  const isFlood = threat.toLowerCase().includes('flood') || threat.toLowerCase().includes('rain');
                  
                  return (
                    <div key={index} className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border shadow-sm">
                      {isDrought ? <FaWater className="text-blue-500" /> : 
                       isHeat ? <FaThermometer className="text-orange-500" /> :
                       isFlood ? <FaCloudRain className="text-blue-700" /> :
                       <FaExclamationTriangle className="text-gray-500" />}
                      <span className="font-medium text-gray-800">{threat}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {parsedResult.urgency && (
                <div className="bg-gradient-to-r from-amber-50 to-white rounded-2xl border border-amber-100 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <FaClock className="text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Urgency</h4>
                      <p className="text-2xl font-bold text-amber-700">{parsedResult.urgency}</p>
                    </div>
                  </div>
                </div>
              )}

              {parsedResult.costImpact && (
                <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl border border-purple-100 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <FaDollarSign className="text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Cost Impact</h4>
                      <p className="text-2xl font-bold text-purple-700">{parsedResult.costImpact}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-gradient-to-r from-green-50 to-white rounded-2xl border border-green-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaLightbulb className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Total Actions</h4>
                    <p className="text-2xl font-bold text-green-700">{parsedResult.recommendations.length}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top 3 Recommendations */}
            
          </div>
        )}

        {/* ACTIONS TAB */}
        {activeTab === 'actions' && (
          <div className="space-y-6">
            {/* Immediate Actions */}
            {parsedResult.immediateActions.length > 0 && (
              <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl border border-red-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <FaClock className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Immediate Actions</h3>
                    <p className="text-gray-600">To be taken within 7 days</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {parsedResult.immediateActions.map((action, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-white rounded-xl border hover:border-red-200 transition">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <span className="text-red-700 font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800">{action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Short-term Solutions */}
            {parsedResult.shortTermSolutions.length > 0 && (
              <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaTools className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Short-Term Solutions</h3>
                    <p className="text-gray-600">To be implemented within 30 days</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {parsedResult.shortTermSolutions.map((solution, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-white rounded-xl border hover:border-blue-200 transition">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-700 font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800">{solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Long-term Strategies */}
            {parsedResult.longTermStrategies.length > 0 && (
              <div className="bg-gradient-to-r from-emerald-50 to-white rounded-2xl border border-emerald-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <FaSeedling className="text-emerald-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Long-Term Strategies</h3>
                    <p className="text-gray-600">For next season and beyond</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {parsedResult.longTermStrategies.map((strategy, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-white rounded-xl border hover:border-emerald-200 transition">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <span className="text-emerald-700 font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800">{strategy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* RESOURCES TAB */}
        {activeTab === 'resources' && (
          <div className="space-y-6">
            {/* Required Resources */}
            {parsedResult.resources.length > 0 && (
              <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl border border-purple-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FaTools className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Required Resources</h3>
                    <p className="text-gray-600">Tools, materials, and support needed</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {parsedResult.resources.map((resource, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-800">{resource}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Expected Outcome */}
            {parsedResult.expectedOutcome && (
              <div className="bg-gradient-to-r from-green-50 to-white rounded-2xl border border-green-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <FaBullseye className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Expected Outcome</h3>
                    <p className="text-gray-600">What implementing these actions will achieve</p>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg border">
                  <p className="text-gray-800 text-lg">{parsedResult.expectedOutcome}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* FULL REPORT TAB */}
        {activeTab === 'full' && (
          <div className="bg-white rounded-2xl border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Full Analysis Report</h3>
              <div className={`px-4 py-2 rounded-lg ${riskConfig.bg} ${riskConfig.color} font-bold`}>
                {parsedResult.riskLevel}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <MarkdownRenderer text={parsedResult.rawText} />
            </div>
          </div>
        )}
      </div>

      {/* Export Options */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white rounded-2xl border p-6">
        <div>
          <h3 className="font-bold text-gray-900">Export Analysis</h3>
          <p className="text-sm text-gray-600">Save or share this report</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => {
              const summary = `AgriShield AI Analysis\n\nLocation: ${analysis.location}\nCrop: ${analysis.crop}\nRainfall: ${analysis.rainfall}\nRisk Level: ${parsedResult.riskLevel}\n\nClimate Threats: ${parsedResult.climateThreats.join(', ')}\n\nImmediate Actions:\n${parsedResult.immediateActions.map((r, i) => `${i+1}. ${r}`).join('\n')}\n\nShort-term Solutions:\n${parsedResult.shortTermSolutions.map((r, i) => `${i+1}. ${r}`).join('\n')}\n\nLong-term Strategies:\n${parsedResult.longTermStrategies.map((r, i) => `${i+1}. ${r}`).join('\n')}`;
              navigator.clipboard.writeText(summary);
              alert('Analysis copied to clipboard!');
            }}
            className="flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-medium transition"
          >
            <FaCopy />
            Copy Summary
          </button>
          
          <button
            onClick={() => {
              const report = {
                project: "AgriShield AI",
                location: analysis.location,
                crop: analysis.crop,
                rainfall: analysis.rainfall,
                timestamp: analysis.timestamp || new Date().toISOString(),
                risk_level: parsedResult.riskLevel,
                climate_threats: parsedResult.climateThreats,
                urgency: parsedResult.urgency,
                immediate_actions: parsedResult.immediateActions,
                short_term_solutions: parsedResult.shortTermSolutions,
                long_term_strategies: parsedResult.longTermStrategies,
                resources_needed: parsedResult.resources,
                cost_impact: parsedResult.costImpact,
                expected_outcome: parsedResult.expectedOutcome,
                full_analysis: parsedResult.rawText
              };
              
              const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `agrishield_${analysis.crop}_${analysis.location}_${Date.now()}.json`;
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white rounded-xl font-medium transition shadow-lg"
          >
            <FaDownload />
            Download Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;