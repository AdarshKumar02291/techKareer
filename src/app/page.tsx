import Image from "next/image";
import { Header } from "./_components/Header";
import { DashBoard } from "./_components/Dashboard";
import { Main } from "./_components/Main";

export default function Home() {
  return (
    <div className=" w-screen max-w-[1728px]">
      <Header></Header>
      <DashBoard></DashBoard>
      <Main></Main>
    </div>
  );
}
