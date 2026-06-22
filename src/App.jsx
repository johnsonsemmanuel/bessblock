import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import CookieConsent from './components/CookieConsent';
import BackToTop from './components/BackToTop';
import LiveChat from './components/LiveChat';

const About = lazy(() => import('./pages/About'));
const ManufacturingQuality = lazy(() => import('./pages/ManufacturingQuality'));
const Leadership = lazy(() => import('./pages/Leadership'));
const Products = lazy(() => import('./pages/Products'));
const PavingBlocks = lazy(() => import('./pages/PavingBlocks'));
const InterlockingPavingBlocks = lazy(() => import('./pages/InterlockingPavingBlocks'));
const RectangularPavingBlocks = lazy(() => import('./pages/RectangularPavingBlocks'));
const HexagonalPavingBlocks = lazy(() => import('./pages/HexagonalPavingBlocks'));
const Walling = lazy(() => import('./pages/Walling'));
const HollowConcreteBlocks = lazy(() => import('./pages/HollowConcreteBlocks'));
const SolidConcreteBlocks = lazy(() => import('./pages/SolidConcreteBlocks'));
const CeilingBlocks = lazy(() => import('./pages/CeilingBlocks'));
const RetainingWalls = lazy(() => import('./pages/RetainingWalls'));
const LRangeStandard = lazy(() => import('./pages/LRangeStandard'));
const LRangeRockFace = lazy(() => import('./pages/LRangeRockFace'));
const Terralite = lazy(() => import('./pages/Terralite'));
const FourByFourStepBlock = lazy(() => import('./pages/FourByFourStepBlock'));
const Terrafix = lazy(() => import('./pages/Terrafix'));
const Terracrete = lazy(() => import('./pages/Terracrete'));
const KerbsEdging = lazy(() => import('./pages/KerbsEdging'));
const RoadKerbs = lazy(() => import('./pages/RoadKerbs'));
const DemarcationKerbs = lazy(() => import('./pages/DemarcationKerbs'));
const GardenKerbs = lazy(() => import('./pages/GardenKerbs'));
const BarrierKerbs = lazy(() => import('./pages/BarrierKerbs'));
const GutterKerbs = lazy(() => import('./pages/GutterKerbs'));
const SlottedKerbs = lazy(() => import('./pages/SlottedKerbs'));
const PavingSlabs = lazy(() => import('./pages/PavingSlabs'));
const TexturedPavingSlabs = lazy(() => import('./pages/TexturedPavingSlabs'));
const SmoothPavingSlabs = lazy(() => import('./pages/SmoothPavingSlabs'));
const LargeFormatSlabs = lazy(() => import('./pages/LargeFormatSlabs'));
const StepRisers = lazy(() => import('./pages/StepRisers'));
const StandardStepRisers = lazy(() => import('./pages/StandardStepRisers'));
const WideTreadSteps = lazy(() => import('./pages/WideTreadSteps'));
const BullnoseSteps = lazy(() => import('./pages/BullnoseSteps'));
const ProjectsGallery = lazy(() => import('./pages/ProjectsGallery'));
const Insights = lazy(() => import('./pages/Insights'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const FAQs = lazy(() => import('./pages/FAQs'));
const Contact = lazy(() => import('./pages/Contact'));
const RequestQuote = lazy(() => import('./pages/RequestQuote'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const SearchResults = lazy(() => import('./pages/SearchResults'));

function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      <Footer />
      <CookieConsent />
      <BackToTop />
      <LiveChat />
    </>
  );
}

function AnimatedPage({ children }) {
  return (
    <Suspense fallback={<div className="page-loading"><div className="page-loading-spinner" /></div>}>
      <PageTransition>
        {children}
      </PageTransition>
    </Suspense>
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
          <Route path="/request-quote" element={<AnimatedPage><RequestQuote /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path="/privacy-policy" element={<AnimatedPage><PrivacyPolicy /></AnimatedPage>} />
          <Route path="/terms-conditions" element={<AnimatedPage><TermsConditions /></AnimatedPage>} />
          <Route path="/search" element={<AnimatedPage><SearchResults /></AnimatedPage>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AnimatePresence>
  );
}
