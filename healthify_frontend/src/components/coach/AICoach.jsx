import Card from "../common/Card";
import RecommendationList from "./RecommendationList";
import ChatAssistant from "./ChatAssistant";

// PUBLIC_INTERFACE
export default function AICoach() {
  /** AI Coach high-level panel. */
  return (
    <Card title="AI Coach">
      <RecommendationList />
      <ChatAssistant />
    </Card>
  );
}
