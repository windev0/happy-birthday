import React, { type ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      {/* You can add a header or sidebar here if needed */}
      <main>{children}</main>
      {/* You can add a footer here if needed */}
    </div>
  );
};

export default MainLayout;
