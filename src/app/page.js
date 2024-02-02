import Image from "next/image";
import logo from "../../public/codecanyon.png";
import {
  NavComponent,
  IntroComponent,
  HomeComponent,
  FeedBackComponent,
  ShopComponent,
} from "@/components";

export default function Home() {
  return (
    <>
      <header>
        <Image className="logo" src={logo} />
        <NavComponent />
      </header>
      <main>
        <HomeComponent />
        <IntroComponent />
        <FeedBackComponent />
        <ShopComponent />
      </main>
    </>
  );
}
