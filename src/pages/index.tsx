import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import NewsletterComponent from './newsletter';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './index.module.css';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5,
  cssEase: 'linear',
  pauseOnHover: true,
  arrows: false,
  variableWidth: true,
};

const slideLogos = [
  '/media/nasa.png',
  '/media/booz.png',
  '/media/d.png',
  '/media/nike.png',
  '/media/x.png',
  '/media/knime.png',
  '/media/FINAL USC.png',
  
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.backgroundContainer)}>
      <div className="container">
        <div className={styles.content}>
          <Heading as="h1" className={clsx('hero__title', styles.hero__title)}>
          </Heading>
          <p className={clsx('hero__subtitle', styles.hero__subtitle)}>
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
          <button className={styles.button} onClick={scrollToNewsletter}>Subscribe to our newsletter!</button>
          <button className={styles.button} onClick={goToRecForm}>E-BOARD Application Form - Deadline: Sept 15, 2024</button>
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutUsSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles['about-us-container']}>
      <div className={styles['about-us-image']}></div>
      <div className={styles['about-us']}>
        <h1>About Us</h1>
        <div className={styles['about-us-content']}>
          <p>
            Graduates Rising in Information and Data Science (GRIDS) is the first graduate student organization within the USC Viterbi School of Engineering’s Department of Computer Science. Our mission is to advance the academic and professional interests of Informatics, Data Science, and Computer Science students at USC through experiential learning, corporate partnerships, and engaging networking opportunities that build community.
          </p>
          <div>
            <button className={styles.aboutButton1} onClick={scrollToNewsletter}>Join our Newsletter</button><br />
            <button className={styles.aboutButton1} onClick={goToRecForm}>E-BOARD Application Form - Deadline: Sept 15, 2024</button>
          </div> 
        </div>
      </div>
    </div>
  );
}

function ImgSlider() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles['image-slider-container']}>
      <Slider {...sliderSettings}>
        {slideLogos.map((logo, index) => (
          <div key={index} className={clsx(styles.slide, 'slide')}>
            <img src={logo} alt={`Logo ${index + 1}`} className={styles['slide-image']} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function goToRecForm() {
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSeMyhMpfnzV8vRxBphvZuF2lVa6PZEwTA-A53yFHujqoBX-_g/viewform", "_blank")
}

function scrollToNewsletter() {
  const newsletterElement = document.querySelector(`.${styles['newsletter']}`);
  if (newsletterElement !== null) {
    newsletterElement.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="GRIDS - Graduates Rising in Data Science">
      <HomepageHeader />
      <main>
        <AboutUsSection />
        <ImgSlider />
        <div className={styles['newsletter']}>
          <NewsletterComponent />
        </div>
      </main>
    </Layout>
  );
}
