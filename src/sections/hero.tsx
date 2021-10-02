import Image from "next/image";

import styles from "styles/Hero.module.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className={styles.hero}>
        <div className={styles.hero__container}>
          <div className={styles.leftImage}>
            <Image
              src="/images/os-logo.png"
              alt="Hero Image"
              width="350px"
              height="370px"
            />
          </div>
          <div>
            <h1>X</h1>
          </div>
          <div className={styles.rightImage}>
            <Image
              src="/images/hacktoberfest-logo.png"
              alt="Hero Image"
              width="500px"
              height="200px"
            />
          </div>
        </div>

        <h4>An Open event for everyone to make positive contributions to an ever-growing developer community</h4>

        <button className={styles.cta__btn} onClick={() => window.open("https://hacktoberfest.digitalocean.com/", "_blank")}>Start Hacking</button>
      </div>
    </section>
  );
};

export default Hero;
