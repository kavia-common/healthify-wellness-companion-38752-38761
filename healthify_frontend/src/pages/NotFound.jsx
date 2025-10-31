import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <div className="container" style={{ display: "grid", placeItems: "center", height: "80vh", gap: 12 }}>
      <h1>404 - Not Found</h1>
      <Link to="/"><Button>Go Home</Button></Link>
    </div>
  );
}
