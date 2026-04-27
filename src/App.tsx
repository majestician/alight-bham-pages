import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const getRouterBasename = () => {
  const viteBase = import.meta.env.BASE_URL;

  if (viteBase && viteBase !== "/") {
    return viteBase.replace(/\/$/, "");
  }

  if (typeof window !== "undefined" && window.location.hostname.endsWith("github.io")) {
    const [repoName] = window.location.pathname.split("/").filter(Boolean);
    return repoName ? `/${repoName}` : "/";
  }

  return "/";
};

const routerBasename = getRouterBasename();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
