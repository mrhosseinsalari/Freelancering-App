import { DarkModeProvider } from "../context/DarkModeContext";
import { SidebarProvider } from "../context/SidebarContext";

function AppProviders({ children }) {
  return (
    <DarkModeProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </DarkModeProvider>
  );
}

export default AppProviders;
