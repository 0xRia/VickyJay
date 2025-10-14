import {
  Navbar,
  Contact,
  Footer,
  Hero,
  Projects,
  Services,
  Skills,
  SEO,
} from "../components";

function Home() {
  return (
    <>
      <SEO
        title="Gloria"
        description="I enjoy building security systems to safeguard digital assets and data."
      />
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
