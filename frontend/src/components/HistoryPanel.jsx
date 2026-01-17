import { FaClockRotateLeft, FaClock } from 'react-icons/fa6'; // Changed from FaHistory

const HistoryPanel = ({ history, onSelect }) => {
  if (history.length === 0) return null;

  const formatTime = (timestamp) => {
    return timestamp.split(':').slice(0, 2).join(':');
  };

  return (
    <div className="bg-[#f6f8f3] rounded-2xl shadow-lg p-6 border border-gray-300">
      <div className="flex items-center mb-4">
        <FaClockRotateLeft className="text-emerald-600 mr-2" />
        <h3 className="text-lg font-semibold text-[#1f3d2b]">Recent Analysis</h3>
      </div>
      
      <div className="space-y-3">
        {history.slice(0, 5).map((item) => (
          <div 
            key={item.id}
            className="border border-gray-200 rounded-xl p-3 hover:border-lime-600 hover:bg-lime-50 transition cursor-pointer"
            onClick={() => onSelect(item)}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-[#1f3d2b]">{item.crop}</span>
              <div className="flex items-center text-sm text-gray-500">
                <FaClock className="mr-1 text-gray-400" size={12} />
                {formatTime(item.timestamp)}
              </div>
            </div>
            <div className="text-sm text-[#1f3d2b]">
              <span className="inline-block bg-white/50 border border-gray-200 rounded px-2 py-1 mr-2">
                📍 {item.location}
              </span>
              <span className="inline-block bg-white/50 border border-gray-200 rounded px-2 py-1">
                🌧️ {item.rainfall}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2 truncate">
              {item.result.substring(0, 80)}...
            </p>
          </div>
        ))}
      </div>
      
      <p className="text-xs text-gray-400 mt-4 text-center">
        Click any analysis to view details
      </p>
    </div>
  );
};

export default HistoryPanel;
