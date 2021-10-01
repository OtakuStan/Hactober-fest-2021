import Image from "next/image";
import Navbar from "src/components/Navbar";
import styles from "styles/Hero.module.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <Navbar />
      <div className={styles.hero}>
        <Image
          src="/images/hacktoberfest-logo.png"
          alt="Hero Image"
          width="500px"
          height="200px"
        />
      </div>
    </section>
  );
};

export default Hero;
