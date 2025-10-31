import { useState } from "react";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { addMessage, addRecommendation } from "../../state/slices/coachSlice";
import { askCoach } from "../../api/services/coach";

// PUBLIC_INTERFACE
export default function ChatAssistant() {
  /** Simple chat UI stub calling mock service in absence of backend. */
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const send = async () => {
    if (!input.trim()) return;
    dispatch(addMessage({ role: "user", content: input }));
    const res = await askCoach(input);
    const reply = res.reply || "Keep a steady pace; you're doing great!";
    dispatch(addMessage({ role: "assistant", content: reply }));
    dispatch(addRecommendation({ text: reply }));
    setInput("");
  };

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8 }}>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask your coach..." style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", color: "inherit" }} />
        <Button onClick={send}>Send</Button>
      </div>
    </div>
  );
}
