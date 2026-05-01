// HomeClient is now a simple passthrough.
// The old typeof window check caused a full component swap on hydration
// which was the #1 cause of CLS 1.76 — server rendered <div>, client
// rendered <MotionDiv>, browser had to repaint the entire page.
import HomePage from "./Home";

export default function HomeClient() {
  return <HomePage />;
}