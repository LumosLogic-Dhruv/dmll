import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ChatMode = "selection" | "lead" | "advisor";

interface Message {
  id: number;
  type: "bot" | "user";
  text: string;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMode, setChatMode] = useState<ChatMode>("selection");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [leadStep, setLeadStep] = useState(0);
  const [leadData, setLeadData] = useState({
    businessType: "",
    budget: "",
    services: "",
    timeline: "",
    source: ""
  });

  const leadQuestions = [
    { key: "businessType", question: "What type of business do you have?", placeholder: "e.g., E-commerce, SaaS, Local Service" },
    { key: "budget", question: "What's your monthly marketing budget?", placeholder: "e.g., $5K-$10K" },
    { key: "services", question: "Which services are you interested in?", placeholder: "e.g., Google Ads, SEO, Social Media" },
    { key: "timeline", question: "When are you looking to start?", placeholder: "e.g., Immediately, Next month" },
    { key: "source", question: "How did you hear about us?", placeholder: "e.g., Google, Referral, LinkedIn" }
  ];

  const advisorResponses: { [key: string]: string } = {
    "google ads": "Google Ads works best when you have clear conversion tracking and a CPA target. Start with Search campaigns targeting high-intent keywords. Typical results: 2-4 weeks to see initial data, 6-8 weeks for optimization.",
    "meta ads": "Meta Ads (Facebook/Instagram) excel at audience targeting and creative testing. Best for B2C and visual products. Expect 2-3 weeks for initial results, 4-6 weeks for scaling. Focus on creative testing and audience layering.",
    "seo": "SEO is a long-term strategy. Technical SEO and on-page optimization show results in 3-6 months. Content strategy and link building take 6-12 months. Best for businesses with long sales cycles and high customer LTV.",
    "cpa": "To lower CPA: 1) Add negative keywords, 2) Improve Quality Score, 3) Optimize landing pages, 4) Use audience layering, 5) Test bid strategies. Expect 15-40% CPA reduction in 30 days with systematic optimization.",
    "roas": "To improve ROAS: 1) Focus on high-converting products/services, 2) Implement proper attribution, 3) Test creative variations, 4) Optimize for value not volume, 5) Use retargeting. Target 250-400% ROAS for most businesses.",
    "default": "I can help with questions about Google Ads, Meta Ads, SEO, CPA optimization, ROAS improvement, campaign strategy, and more. What specific marketing challenge are you facing?"
  };

  const handleModeSelect = (mode: "lead" | "advisor") => {
    setChatMode(mode);
    if (mode === "lead") {
      setMessages([
        { id: 1, type: "bot", text: "Great! I'll help you get started. Let me ask you a few quick questions." },
        { id: 2, type: "bot", text: leadQuestions[0].question }
      ]);
    } else {
      setMessages([
        { id: 1, type: "bot", text: "Hi! I'm your marketing advisor. Ask me anything about Google Ads, Meta Ads, SEO, CPA optimization, ROAS improvement, or campaign strategy." }
      ]);
    }
  };

  const handleLeadSubmit = () => {
    if (!inputValue.trim()) return;

    const currentQuestion = leadQuestions[leadStep];
    setLeadData({ ...leadData, [currentQuestion.key]: inputValue });
    
    setMessages([
      ...messages,
      { id: messages.length + 1, type: "user", text: inputValue }
    ]);

    if (leadStep < leadQuestions.length - 1) {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { id: prev.length + 1, type: "bot", text: leadQuestions[leadStep + 1].question }
        ]);
      }, 500);
      setLeadStep(leadStep + 1);
    } else {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { id: prev.length + 1, type: "bot", text: "Perfect! Thanks for the information. Our team will review your requirements and reach out within 24 hours with a customized strategy. Would you like to schedule a call now?" }
        ]);
      }, 500);
    }

    setInputValue("");
  };

  const handleAdvisorSubmit = () => {
    if (!inputValue.trim()) return;

    setMessages([
      ...messages,
      { id: messages.length + 1, type: "user", text: inputValue }
    ]);

    // Simple keyword matching for demo
    const query = inputValue.toLowerCase();
    let response = advisorResponses.default;

    for (const [key, value] of Object.entries(advisorResponses)) {
      if (query.includes(key)) {
        response = value;
        break;
      }
    }

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: prev.length + 1, type: "bot", text: response }
      ]);
    }, 800);

    setInputValue("");
  };

  const handleSubmit = () => {
    if (chatMode === "lead") {
      handleLeadSubmit();
    } else {
      handleAdvisorSubmit();
    }
  };

  const resetChat = () => {
    setChatMode("selection");
    setMessages([]);
    setLeadStep(0);
    setLeadData({ businessType: "", budget: "", services: "", timeline: "", source: "" });
    setInputValue("");
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-shadow"
            style={{ zIndex: 50 }}
            data-ai-assistant="true"
          >
            <Sparkles className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-card border border-border rounded-lg shadow-2xl flex flex-col overflow-hidden"
            style={{ zIndex: 50 }}
            data-ai-assistant="true"
          >
            {/* Header */}
            <div className="p-4 bg-primary text-primary-foreground flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <div>
                  <div className="font-semibold">AI Marketing Assistant</div>
                  <div className="text-xs opacity-80">
                    {chatMode === "selection" && "How can I help you?"}
                    {chatMode === "lead" && "Lead Qualification"}
                    {chatMode === "advisor" && "Marketing Advisor"}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-primary-foreground/10 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mode Selection */}
            {chatMode === "selection" && (
              <div className="flex-1 p-6 flex flex-col items-center justify-center gap-4">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">How can I assist you today?</h3>
                  <p className="text-sm text-muted-foreground">Choose an option to get started</p>
                </div>

                <button
                  onClick={() => handleModeSelect("lead")}
                  className="w-full p-6 bg-secondary hover:bg-secondary/80 border border-border rounded-lg transition-all hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-foreground mb-1">Get Started</div>
                      <div className="text-sm text-muted-foreground">Tell us about your business and get a custom strategy</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleModeSelect("advisor")}
                  className="w-full p-6 bg-secondary hover:bg-secondary/80 border border-border rounded-lg transition-all hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-foreground mb-1">Marketing Advice</div>
                      <div className="text-sm text-muted-foreground">Ask questions about campaigns, strategy, and optimization</div>
                    </div>
                  </div>
                </button>
              </div>
            )}

            {/* Chat Messages */}
            {chatMode !== "selection" && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-foreground"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                      placeholder={
                        chatMode === "lead" && leadStep < leadQuestions.length
                          ? leadQuestions[leadStep].placeholder
                          : "Type your message..."
                      }
                      className="flex-1"
                    />
                    <Button onClick={handleSubmit} size="icon" variant="cta">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <button
                    onClick={resetChat}
                    className="text-xs text-muted-foreground hover:text-foreground mt-2 transition-colors"
                  >
                    ← Start over
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
