import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageCircle, X, Send, Loader2, Sparkles, Globe } from "lucide-react";
import { ChatMessage } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // We now use the global language context instead of local state for language selection
  const { language, toggleLanguage, projects, profile } = useLanguage();

  // Initial message depends on language
  const getInitMessage = (lang: "sv" | "en") => ({
    id: "init",
    role: "model" as const,
    text:
      lang === "sv"
        ? `Hej! Jag är ${
            profile.name.split(" ")[0]
          }s AI-assistent. Fråga mig gärna om mina projekt, min designprocess eller mina färdigheter!`
        : `Hi! I'm ${
            profile.name.split(" ")[0]
          }'s AI assistant. Feel free to ask me about my projects, design process, or skills!`,
  });

  const [messages, setMessages] = useState<ChatMessage[]>([
    getInitMessage(language),
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update welcome message if language changes and chat is empty (or just init)
  useEffect(() => {
    // If we only have the init message (or none), reset it when language changes
    if (messages.length <= 1) {
      setMessages([getInitMessage(language)]);
    }
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    // Vite använder `import.meta.env` för miljövariabler, och de måste börja med VITE_
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!inputValue.trim() || !apiKey) {
      console.error(
        "API-nyckel för Gemini är inte konfigurerad. Skapa en .env-fil med VITE_GEMINI_API_KEY."
      );
      return;
    }

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      text: inputValue,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Systeminstruktion för AI-assistenten
      const langContext =
        language === "sv" ? "Svara på Svenska." : "Answer in English.";

      // Construct system context from portfolio data
      const context = `
        System Instruction:
        You are an AI assistant for the UX Portfolio of ${profile.name}.
        ${langContext}
        
        Profile Data:
        ${JSON.stringify(profile)}

        Projects Data:
        ${JSON.stringify(projects)}

        Your goal is to answer questions about ${
          profile.name
        }'s work, skills, and specific projects professionally and enthusiastically.
        Keep answers concise (under 100 words) unless asked for details.
        If asked for contact info, refer to the contact section or ${
          profile.email
        }.
        Act as an extension of Nisse himself - friendly and helpful.
      `;

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-pro",
        systemInstruction: context,
      });

      const result = await model.generateContentStream(userMsg.text);

      let fullText = "";
      const modelMsgId = (Date.now() + 1).toString();

      // Add placeholder for stream
      setMessages((prev) => [
        ...prev,
        { id: modelMsgId, role: "model", text: "" },
      ]);
      for await (const chunk of result.stream) {
        const text = chunk.text();
        if (text !== undefined) {
          fullText += text;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === modelMsgId ? { ...m, text: fullText } : m
            )
          );
        }
      }
    } catch (error) {
      console.error("Gemini Error:", error);
      const errorMsg =
        language === "sv"
          ? "Jag har lite problem att koppla upp mig just nu. Försök igen om en liten stund."
          : "I'm having trouble connecting right now. Please try again in a moment.";
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: "model", text: errorMsg },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl transition-all duration-300 ${
          isOpen
            ? "scale-0 opacity-0"
            : "scale-100 opacity-100 bg-brand-600 text-white hover:bg-brand-500"
        }`}
      >
        <Sparkles size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-90 opacity-0 translate-y-10 pointer-events-none"
        }`}
        style={{ height: "500px" }}
      >
        {/* Header */}
        <div className="p-4 bg-brand-600 rounded-t-2xl flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <Sparkles size={18} />
            <span className="font-medium">AI Assistant</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded-md transition-colors flex items-center gap-1"
              title="Switch Language"
            >
              <Globe size={12} /> {language.toUpperCase()}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50 dark:bg-zinc-950/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-brand-600 text-white rounded-tr-none"
                    : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 shadow-sm border border-zinc-100 dark:border-zinc-700 rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-zinc-100 dark:border-zinc-700">
                <Loader2 className="animate-spin text-brand-500" size={16} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-b-2xl">
          <div className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-brand-100 dark:focus-within:ring-brand-900 focus-within:border-brand-300 dark:focus-within:border-brand-700 transition-all">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={
                language === "sv" ? "Ställ en fråga..." : "Ask a question..."
              }
              className="flex-1 bg-transparent outline-none text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="text-brand-600 dark:text-brand-400 disabled:text-zinc-300 dark:disabled:text-zinc-600 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
