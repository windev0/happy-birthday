import Navbar from "@/components/NavBar";
import { type ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <main>{children}</main>
      </body>
    </>
  );
};

export default MainLayout;
