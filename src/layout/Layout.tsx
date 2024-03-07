import { FC, ReactNode } from "react";
import MainNavigation from "./MainNavigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <MainNavigation />
    <main className="min-h-[calc(100vh-18.5rem)]">{children}</main>
  </>
);

export default Layout;
