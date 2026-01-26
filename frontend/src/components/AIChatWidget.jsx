import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Bot, X, Send, Minimize2 } from 'lucide-react';

const AIChatWidget = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  
  if (isAdmin) return null;
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'How can we help you today?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages([...messages, { id: messages.length + 1, text: inputValue, sender: 'user' }]);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: inputValue, sender: 'user' },
        {
          id: messages.length + 2,
          text: 'Thank you for your inquiry. Our team will get back to you shortly. For immediate assistance, please contact us at info@greenlifepharma.com or call +234 (0) 1 234 5678.',
          sender: 'bot',
        },
      ]);
    }, 1000);

    setInputValue('');
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full glass-card flex items-center justify-center shadow-xl border-2 border-[#059669]/20"
          style={{
            boxShadow: '0 0 20px rgba(5, 150, 105, 0.3)',
          }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Bot className="text-[#059669]" size={28} />
          </motion.div>
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed bottom-8 right-8 z-50 ${
              isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
            } glass-card rounded-2xl shadow-2xl border border-white/20 flex flex-col transition-all duration-300`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#059669]/10 flex items-center justify-center">
                  <Bot className="text-[#059669]" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tighter text-slate-900">AI Assistant</h3>
                  <p className="text-xs text-slate-600">Greenlife Pharmaceuticals</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                >
                  <Minimize2 size={18} className="text-slate-600" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                >
                  <X size={18} className="text-slate-600" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-[#059669] text-white'
                            : 'bg-white/50 text-slate-900'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <form onSubmit={handleSend} className="p-4 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 bg-white/50 border border-white/20 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#059669] text-sm"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-[#059669] text-white rounded-lg hover:bg-emerald-600 transition-colors"
                    >
                      <Send size={18} />
                    </motion.button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;
