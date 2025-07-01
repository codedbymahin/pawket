
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Academy from "./pages/Academy";
import Adopt from "./pages/Adopt";
import Sharing from "./pages/Sharing";
import Vet from "./pages/Vet";
import Shop from "./pages/Shop";
import LostFound from "./pages/LostFound";
import Courier from "./pages/Courier";
import PetProfile from "./pages/PetProfile";
import VetProfile from "./pages/VetProfile";
import ProductProfile from "./pages/ProductProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/sharing" element={<Sharing />} />
          <Route path="/vet" element={<Vet />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/lost-found" element={<LostFound />} />
          <Route path="/courier" element={<Courier />} />
          <Route path="/pet/:type/:id" element={<PetProfile />} />
          <Route path="/vet/:id" element={<VetProfile />} />
          <Route path="/product/:id" element={<ProductProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
