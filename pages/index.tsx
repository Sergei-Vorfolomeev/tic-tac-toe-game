import { Header } from "../components/header";
import { ReactNode } from "react";
import { Game } from "../components/game-new";

export default function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      <Game />
    </HomePageLayout>
  );
}

type HomePageLayoutPropsType = {
  header: ReactNode;
  children: ReactNode;
};

function HomePageLayout({ header, children }: HomePageLayoutPropsType) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
