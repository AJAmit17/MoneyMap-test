// import Sidebar from "@/components/sidebar/Sidebar";
import Main from "@/components/chat/main";
import ContextProvider from "@/components/context";

export default function Home() {
  return (
    <ContextProvider>
      <main
        className="flex min-h-screen animate-[fadeIn_1.5s]
    dark:bg-dark "
      >
        {/* <Sidebar/> */}
        <Main />
      </main>
    </ContextProvider>
  );
}
