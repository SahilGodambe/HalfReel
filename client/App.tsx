// client/src/App.tsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./global.css";
import Index from "./pages/Index";
import About from "./pages/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";

// import Team from "./pages/Team";
// import Career from "./pages/Career";
// import IOCL from "./pages/Work/WorkDetails/IOCL";

import TATA from "./pages/Work/WorkDetails/TATA";
import Zoya from "./pages/Work/WorkDetails/Zoya";
import CountryDelight from "./pages/Work/WorkDetails/Country Delight";
import MGHector from "./pages/Work/WorkDetails/MGHector";
import MansWorld from "./pages/Work/WorkDetails/Man'sWorld";
import Whisper from "./pages/Work/WorkDetails/Whisper";
import Freakins from './pages/Work/WorkDetails/Freakins';
import ICONiQ from "./pages/Work/WorkDetails/ICONiQ";
import FRENCHESSENCE from "./pages/Work/WorkDetails/FRENCH ESSENCE";
import PlusPoint from "./pages/Work/WorkDetails/PlusPoint";
import Jazz from "./pages/Work/WorkDetails/Jazz";
import CRISIL from "./pages/Work/WorkDetails/Crisil";
import AshapuraRealty from "./pages/Work/WorkDetails/Ashapura Realty"
import KesariyaFarm from "./pages/Work/WorkDetails/Kesariya Farm";
import PoddarRealty from "./pages/Work/WorkDetails/Poddar Realty";
import Seekho from "./pages/Work/WorkDetails/Seekho";
import NUA from "./pages/Work/WorkDetails/NUA";

function ForceTopOnRoute() {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    // If you ever use hash anchors, let them work; otherwise always go top.
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, search, hash]);

  return null;
}
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ForceTopOnRoute />
      {/* <Router> */}
      {/* Global Navigation */}
      {/* <Navigation /> */}
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/Career" element={<Career/>} /> */}
        {/* <Route path="/Work/IOCL" element={<IOCL />} /> */}
        {/* <Route path="/Team" element={<Team />} /> */}

        <Route path="/Work/TATA" element={<TATA />} />
        <Route path="/Work/Zoya" element={<Zoya />} />
        <Route path="/Work/Country Delight" element={<CountryDelight />} />
        <Route path="/Work/MgHector" element={<MGHector />} />
        <Route path="/Work/Man'sWorld" element={<MansWorld />} />
        <Route path="/Work/Whisper" element={<Whisper />} />
        <Route path="/Work/Freakins" element={<Freakins />} />
        <Route path="/Work/ICONiQ" element={<ICONiQ />} />
        <Route path="/Work/FRENCHESSENCE" element={<FRENCHESSENCE />} />
        <Route path="/Work/PlusPoint" element={<PlusPoint />} />
        <Route path="/Work/Jazz" element={<Jazz />} />
        <Route path="/Work/CRISIL" element={<CRISIL />} />
        <Route path="/Work/Ashapura Realty" element={<AshapuraRealty />} />
        <Route path="/Work/Kesariya Farm" element={<KesariyaFarm />} />
        <Route path="/Work/Poddar Realty" element={<PoddarRealty />} />
        <Route path="/Work/Seekho" element={<Seekho />} />
        <Route path="/Work/NUA" element={<NUA />} />
      </Routes>
      {/* </Router> */}
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
