import React, { useCallback, useState } from 'react'
import { Send } from 'lucide-react'

const WEBHOOK_URL = 'https://n8n.zudim.co.uk/webhook/173c259c-f3c7-48dd-914f-cb1f24b88add'

export default function ChatSection() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can we help?' }
  ])
  const [input, setInput] = useState('')

  const sendMessage = useCallback(async (e) => {
    e.preventDefault()
    if (!input.trim()) return
    const text = input.trim()
    setMessages(m => [...m, { sender: 'user', text }])
    setInput('')
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      })
      const data = await res.json().catch(() => ({}))
      let reply = data.output || data.reply || data.message
      if (!reply && typeof data === 'object') {
        reply = Object.values(data).find(v => typeof v === 'string')
      }
      setMessages(m => [...m, { sender: 'bot', text: reply || 'No response' }])
    } catch {
      setMessages(m => [...m, { sender: 'bot', text: 'Sorry, something went wrong.' }])
    }
  }, [input])

  return (
    <div className="max-w-lg rounded-2xl border border-sandstone/40 bg-obsidian/60 p-6 text-clay shadow-sm">
      <div className="mb-4 max-h-80 space-y-2 overflow-y-auto text-sm">
        {messages.map((m, i) => (
          <div key={i} className={m.sender === 'user' ? 'text-right' : 'text-left'}>
            <div className={`inline-block rounded-xl px-3 py-2 ${m.sender === 'user' ? 'bg-verdant text-clay' : 'bg-bronze/20 text-clay'}`}>{m.text}</div>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex items-center gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 rounded-xl border border-sandstone/40 bg-obsidian px-3 py-2 text-sm outline-none ring-verdant focus:ring"
          placeholder="Type a message..."
        />
        <button type="submit" className="rounded-xl bg-verdant p-2 text-clay hover:opacity-90">
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  )
}
