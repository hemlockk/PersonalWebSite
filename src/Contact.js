import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send, Mail, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwldbna", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#0B0F14] text-[#E7ECF1] relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        .bg-grid {
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      <div className="fixed inset-0 -z-10 bg-grid" />
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(680px circle at 15% 0%, rgba(69,214,198,0.09), transparent 60%), radial-gradient(600px circle at 100% 20%, rgba(232,163,61,0.05), transparent 55%)",
        }}
      />

      <div className="max-w-xl mx-auto px-6 pt-20 pb-24">
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 text-sm text-[#8B97A3] hover:text-[#45D6C6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D6C6] rounded"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </button>

        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#45D6C6] mb-3">
          get in touch
        </p>
        <h1 className="font-display text-3xl font-semibold mb-8">Send me a message</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-[#C4CCD4]">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              required
              disabled={status === "sending"}
              className="w-full bg-[#0F151C] border border-[#232C35] rounded-md px-3 py-2.5 text-[#E7ECF1] placeholder:text-[#5C6672] focus:outline-none focus:border-[#45D6C6] focus:ring-1 focus:ring-[#45D6C6] transition-colors disabled:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-[#C4CCD4]">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              required
              disabled={status === "sending"}
              className="w-full bg-[#0F151C] border border-[#232C35] rounded-md px-3 py-2.5 text-[#E7ECF1] placeholder:text-[#5C6672] focus:outline-none focus:border-[#45D6C6] focus:ring-1 focus:ring-[#45D6C6] transition-colors disabled:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-[#C4CCD4]">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="What would you like to talk about?"
              rows={5}
              required
              disabled={status === "sending"}
              className="w-full bg-[#0F151C] border border-[#232C35] rounded-md px-3 py-2.5 text-[#E7ECF1] placeholder:text-[#5C6672] focus:outline-none focus:border-[#45D6C6] focus:ring-1 focus:ring-[#45D6C6] transition-colors resize-none disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full flex items-center justify-center gap-2 bg-[#45D6C6] text-[#0B0F14] font-medium px-4 py-2.5 rounded-md hover:bg-[#5EE0D2] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              "Sending…"
            ) : status === "sent" ? (
              <>
                <CheckCircle2 size={18} />
                Sent
              </>
            ) : (
              <>
                <Send size={18} />
                Send message
              </>
            )}
          </button>

          {status === "sent" && (
            <p className="text-sm text-[#45D6C6] text-center font-mono">
              Thanks — I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center justify-center gap-1.5 text-sm text-[#E86A5C] text-center font-mono">
              <AlertCircle size={14} />
              Something went wrong — try emailing me directly below.
            </p>
          )}
        </form>

        <div className="mt-10 pt-8 border-t border-[#1B222A] text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-[#8B97A3]">
            <Mail size={15} />
            Or email me directly at{" "}
            <a
              href="mailto:ali.yusuf01@hotmail.com"
              className="text-[#45D6C6] hover:underline"
            >
              ali.yusuf01@hotmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}