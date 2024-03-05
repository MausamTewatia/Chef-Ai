import Image from "next/image";
import Chat from "./assistant";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">Chef AI</h1>
      <Chat />
    </main>
  );
}
