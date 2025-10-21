"use client";
import { useState } from "react";

export default function Dashboard() {
  const [channelId, setChannelId] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendMessage = async () => {
    setStatus("⏳ Mengirim...");
    console.log(channelId, message);
    try {
      const res = await fetch("http://localhost:3000/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ channelId, content: message }),
      });

      const data = await res.json();
      setStatus(data.success ? "✅ Berhasil!" : `❌ ${data.error}`);
    } catch (err) {
      console.error(err);
      setStatus("❌ Gagal mengirim pesan (API error)");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard Bot Discord</h1>
      <input
        placeholder="Channel ID"
        value={channelId}
        onChange={(e) => setChannelId(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        placeholder="Pesan"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white p-2 rounded"
      >
        Kirim Pesan
      </button>
      <p className="mt-3">{status}</p>
    </div>
  );
}
