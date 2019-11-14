import Head from "next/head";
import Header from "./Header";

const Layout = props => (
  <div>
    <Head>
      <title>Raymond Kneipp - Web Developer</title>
      <link rel="shortcut icon" href="../static/images/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="format-detection" content="telephone=no" />

      <meta
        name="description"
        content="I am a freelance full stack web developer and programmer with over five
			years of experience. I am passionate about health, fitness and all
			things technology."
      />
      <meta
        name="og:title"
        property="og:title"
        content="Raymond Kneipp - Web Developer"
      />
      <meta
        name="og:description"
        property="og:description"
        content="I am a freelance full stack web developer and programmer with over five
			years of experience. I am passionate about health, fitness and all
			things technology."
      />
      <meta
        name="og:image"
        property="og:image"
        content="../static/images/rk-bg.png"
      />

      <script
        src="https://kit.fontawesome.com/c1c0c6f229.js"
        crossOrigin="anonymous"
      ></script>
    </Head>
    <Header />
    {props.children}
  </div>
);

export default Layout;
