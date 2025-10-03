// pages/AboutPage.tsx
import Layout from "../components/layouts";
import About from "./About";
import Contact from "./Contact";

export default function AboutPage() {
  return (
    <Layout showNavbar={true}>  {/* Navbar only here */}
      <About />
      <Contact />
    </Layout>
  );
}
