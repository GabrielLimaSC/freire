"use client";

import { SidebarDashboard } from "@/components/Sidebar.Dashboard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { PessoaContextProvider } from "@/contexts/pessoa-context";
import { SidebarContextProvider } from "@/contexts/sidebar-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PessoaContextProvider>
      <SidebarContextProvider>
        <SidebarProvider>
          <SidebarDashboard />
          <main className="w-full transition-all">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </SidebarContextProvider>
    </PessoaContextProvider>
  );
}
