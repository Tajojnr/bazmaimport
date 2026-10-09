'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X, Sparkles } from 'lucide-react'
import { getBotResponse } from '@/lib/chatbot'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  time: string
  quickReplies?: string[]
}

export function BazmaChatbot() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  // Prevent SSR/Hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping, isOpen])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true)
      const timer = setTimeout(() => {
        setIsTyping(false)
        setMessages([
          {
            id: '1',
            text: "Hi there! 👋 I'm **Baz**, your Bazma Technologies assistant! 🤖\n\nAsk me about iPhone pricing, bulk quotes, or order tracking!",
            sender: 'bot',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            quickReplies: ['Browse iPhones 📱', 'Track order 📦', 'About Bazma 🏢']
          }
        ])
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [isOpen, messages.length])

  if (!mounted) return null

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input.trim()
    if (!text) return

    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setInput('')
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      const res = getBotResponse(text)
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: res.text,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          quickReplies: res.quickReplies
        }
      ])
    }, 1000)
  }

  return (
    <>
      {/* Floating Launcher Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white p-3 md:p-4 rounded-full shadow-2xl flex items-center gap-3 border-2 border-white/20"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
              <img src="/bot/baz-avatar-idle.svg" alt="Baz" className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <span className="font-bold text-sm hidden md:inline pr-2">Chat with Baz 🤖</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.9 }}
            className="fixed bottom-0 right-0 md:bottom-6 md:right-6 z-50 w-full md:w-96 h-[580px] bg-white md:rounded-3xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full p-1 shadow-md">
                  <img src="/bot/baz-avatar-idle.svg" alt="Baz" className="w-full h-full" />
                </div>
                <div>
                  <h3 className="font-bold text-base flex items-center gap-1">
                    Baz AI Assistant <Sparkles className="w-4 h-4 text-yellow-300" />
                  </h3>
                  <p className="text-xs text-red-100">Bazma Technologies • Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((m) => (
                <div key={m.id} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                      m.sender === 'user'
                        ? 'bg-red-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">{m.time}</span>

                  {/* Quick Replies */}
                  {m.quickReplies && m.sender === 'bot' && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {m.quickReplies.map((qr) => (
                        <button
                          key={qr}
                          onClick={() => handleSend(qr)}
                          className="text-xs bg-white text-red-600 border border-red-200 hover:bg-red-50 px-3 py-1 rounded-full font-medium transition"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 bg-white border border-gray-100 p-3 rounded-2xl w-24">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="p-3 bg-white border-t flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Baz anything..."
                className="flex-1 bg-gray-100 text-sm px-4 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="bg-red-600 text-white p-2.5 rounded-full hover:bg-red-700 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}