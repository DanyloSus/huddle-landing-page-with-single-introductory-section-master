import BG from "./Element/BG";
import Content from "./Element/Content";

export default function App() {
  return (
    <main className="w-screen min-h-screen bg-violet relative ">
      <Content />
      <BG />
    </main>
  );
}
