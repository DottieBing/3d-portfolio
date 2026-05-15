import { lazy, Suspense } from "react";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero"; // Hero stays eager — it's above fold

const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const FeatureCards   = lazy(() => import("./sections/FeatureCards"));
const Experience     = lazy(() => import("./sections/Experience"));
const TechStack      = lazy(() => import("./sections/TechStack"));
const Testimonials   = lazy(() => import("./sections/Testimonials"));
const Contact        = lazy(() => import("./sections/Contact"));
const Footer         = lazy(() => import("./sections/Footer"));

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Suspense fallback={null}>
      <ShowcaseSection />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </Suspense>
  </>
);

export default App;