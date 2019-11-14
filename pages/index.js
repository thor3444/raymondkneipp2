import Layout from "../components/Layout";
import Landing from "../components/Landing";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => (
	<Layout>
		<Landing />
		<About />
		<Skills />
		<Projects />
		<Contact />
		<Footer />
	</Layout>
);

export default Index;
