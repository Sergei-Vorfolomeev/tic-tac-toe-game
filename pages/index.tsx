import { Header } from "../components/header";
import { GameField, GameInfo, GameTitle } from "../components/game/index";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle />
        <GameInfo className={"mt-4"} />
        <GameField className={"mt-6"} />
      </main>
    </div>
  );
}
