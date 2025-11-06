import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Applications from "./pages/Applications";
import About from "./pages/About";
import News from "./pages/News";
import Resources from "./pages/Resources";
import Policies from "./pages/Policies";
import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact2";
import ContactSW from "./pages/ContactSW";
import ContactGY from "./pages/ContactGY";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Join from "./pages/join";
import Help from "./pages/Help";
import Cpu from "./pages/Cpu";
import Documentation from "./pages/Documentation";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:type" element={<Products />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/help" element={<Help />} />
            <Route path="/cpu" element={<Cpu />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/sw" element={<ContactSW />} />
            <Route path="/contact/gy" element={<ContactGY />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;