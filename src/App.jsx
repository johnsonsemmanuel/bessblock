import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import ManufacturingQuality from './pages/ManufacturingQuality';
import Leadership from './pages/Leadership';
import Products from './pages/Products';
import PavingBlocks from './pages/PavingBlocks';
import InterlockingPavingBlocks from './pages/InterlockingPavingBlocks';
import RectangularPavingBlocks from './pages/RectangularPavingBlocks';
import HexagonalPavingBlocks from './pages/HexagonalPavingBlocks';
import Walling from './pages/Walling';
import HollowConcreteBlocks from './pages/HollowConcreteBlocks';
import SolidConcreteBlocks from './pages/SolidConcreteBlocks';
import CeilingBlocks from './pages/CeilingBlocks';
import RetainingWalls from './pages/RetainingWalls';
import LRangeStandard from './pages/LRangeStandard';
import LRangeRockFace from './pages/LRangeRockFace';
import Terralite from './pages/Terralite';
import FourByFourStepBlock from './pages/FourByFourStepBlock';
import Terrafix from './pages/Terrafix';
import Terracrete from './pages/Terracrete';
import KerbsEdging from './pages/KerbsEdging';
import RoadKerbs from './pages/RoadKerbs';
import DemarcationKerbs from './pages/DemarcationKerbs';
import GardenKerbs from './pages/GardenKerbs';
import BarrierKerbs from './pages/BarrierKerbs';
import GutterKerbs from './pages/GutterKerbs';
import SlottedKerbs from './pages/SlottedKerbs';
import PavingSlabs from './pages/PavingSlabs';
import TexturedPavingSlabs from './pages/TexturedPavingSlabs';
import SmoothPavingSlabs from './pages/SmoothPavingSlabs';
import LargeFormatSlabs from './pages/LargeFormatSlabs';
import StepRisers from './pages/StepRisers';
import StandardStepRisers from './pages/StandardStepRisers';
import WideTreadSteps from './pages/WideTreadSteps';
import BullnoseSteps from './pages/BullnoseSteps';
import ProjectsGallery from './pages/ProjectsGallery';
import Insights from './pages/Insights';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CookieConsent from './components/CookieConsent';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieConsent />
    </>
  );
}

function AnimatedPage({ children }) {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Layout key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />

          <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
          <Route path="/about/manufacturing" element={<AnimatedPage><ManufacturingQuality /></AnimatedPage>} />
          <Route path="/about/leadership" element={<AnimatedPage><Leadership /></AnimatedPage>} />

          <Route path="/products" element={<AnimatedPage><Products /></AnimatedPage>} />

          <Route path="/products/paving-blocks" element={<AnimatedPage><PavingBlocks /></AnimatedPage>} />
          <Route path="/products/paving-blocks/interlocking" element={<AnimatedPage><InterlockingPavingBlocks /></AnimatedPage>} />
          <Route path="/products/paving-blocks/rectangular" element={<AnimatedPage><RectangularPavingBlocks /></AnimatedPage>} />
          <Route path="/products/paving-blocks/hexagonal" element={<AnimatedPage><HexagonalPavingBlocks /></AnimatedPage>} />

          <Route path="/products/walling" element={<AnimatedPage><Walling /></AnimatedPage>} />
          <Route path="/products/walling/hollow-concrete-blocks" element={<AnimatedPage><HollowConcreteBlocks /></AnimatedPage>} />
          <Route path="/products/walling/solid-concrete-blocks" element={<AnimatedPage><SolidConcreteBlocks /></AnimatedPage>} />
          <Route path="/products/walling/ceiling-blocks" element={<AnimatedPage><CeilingBlocks /></AnimatedPage>} />
          <Route path="/products/walling/retaining-walls" element={<AnimatedPage><RetainingWalls /></AnimatedPage>} />
          <Route path="/products/walling/l-range-standard" element={<AnimatedPage><LRangeStandard /></AnimatedPage>} />
          <Route path="/products/walling/l-range-rock-face" element={<AnimatedPage><LRangeRockFace /></AnimatedPage>} />
          <Route path="/products/walling/terralite" element={<AnimatedPage><Terralite /></AnimatedPage>} />
          <Route path="/products/walling/4x4-step-block" element={<AnimatedPage><FourByFourStepBlock /></AnimatedPage>} />
          <Route path="/products/walling/terrafix" element={<AnimatedPage><Terrafix /></AnimatedPage>} />
          <Route path="/products/walling/terracrete" element={<AnimatedPage><Terracrete /></AnimatedPage>} />

          <Route path="/products/kerbs-edging" element={<AnimatedPage><KerbsEdging /></AnimatedPage>} />
          <Route path="/products/kerbs-edging/road-kerbs" element={<AnimatedPage><RoadKerbs /></AnimatedPage>} />
          <Route path="/products/kerbs-edging/demarcation-kerbs" element={<AnimatedPage><DemarcationKerbs /></AnimatedPage>} />
          <Route path="/products/kerbs-edging/garden-kerbs" element={<AnimatedPage><GardenKerbs /></AnimatedPage>} />
          <Route path="/products/kerbs-edging/barrier-kerbs" element={<AnimatedPage><BarrierKerbs /></AnimatedPage>} />
          <Route path="/products/kerbs-edging/gutter-kerbs" element={<AnimatedPage><GutterKerbs /></AnimatedPage>} />
          <Route path="/products/kerbs-edging/slotted-kerbs" element={<AnimatedPage><SlottedKerbs /></AnimatedPage>} />

          <Route path="/products/paving-slabs" element={<AnimatedPage><PavingSlabs /></AnimatedPage>} />
          <Route path="/products/paving-slabs/textured" element={<AnimatedPage><TexturedPavingSlabs /></AnimatedPage>} />
          <Route path="/products/paving-slabs/smooth" element={<AnimatedPage><SmoothPavingSlabs /></AnimatedPage>} />
          <Route path="/products/paving-slabs/large-format" element={<AnimatedPage><LargeFormatSlabs /></AnimatedPage>} />

          <Route path="/products/step-risers" element={<AnimatedPage><StepRisers /></AnimatedPage>} />
          <Route path="/products/step-risers/standard" element={<AnimatedPage><StandardStepRisers /></AnimatedPage>} />
          <Route path="/products/step-risers/wide-tread" element={<AnimatedPage><WideTreadSteps /></AnimatedPage>} />
          <Route path="/products/step-risers/bullnose" element={<AnimatedPage><BullnoseSteps /></AnimatedPage>} />

          <Route path="/projects" element={<AnimatedPage><ProjectsGallery /></AnimatedPage>} />
          <Route path="/insights" element={<AnimatedPage><Insights /></AnimatedPage>} />
          <Route path="/insights/blog" element={<AnimatedPage><Blog /></AnimatedPage>} />
          <Route path="/insights/blog/:slug" element={<AnimatedPage><BlogPost /></AnimatedPage>} />
          <Route path="/faqs" element={<AnimatedPage><FAQs /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path="/privacy-policy" element={<AnimatedPage><PrivacyPolicy /></AnimatedPage>} />
          <Route path="/terms-conditions" element={<AnimatedPage><TermsConditions /></AnimatedPage>} />
        </Routes>
      </Layout>
    </AnimatePresence>
  );
}
