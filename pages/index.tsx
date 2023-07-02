import { Header } from "../components/header";
import { ReactNode } from "react";
import { Game } from "../components/game-new";
import { UiTextField } from "../components/uikit/ui-text-field";

export default function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      {/*<UiTextField*/}
      {/*  label={"Label"}*/}
      {/*  placeholder={"Placeholder"}*/}
      {/*  required*/}
      {/*  helperText={"Helper Text"}*/}
      {/*  errorMessage={""}*/}
      {/*/>*/}
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
