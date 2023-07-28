import React from "react";
import Header from "./Header";
import SideBar from "./Sidebar/SideBar";
import ShortcutKeysPanel from "./ShortCutKeysPanel";

export default function OuterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow">
        <Header />
        <div className="flex">
          <main className="flex-grow overflow-y-scroll h-[calc(100vh-63px)]">
            {children}
          </main>
          <aside className="bg-blue-50 my-2 rounded hidden lg:block overflow-y-scroll h-[calc(100vh-70px)] pb-4">
            <ShortcutKeysPanel />
          </aside>
        </div>
      </div>
    </div>
  );
}
