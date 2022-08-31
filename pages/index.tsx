import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/images/logo.png'
import img3 from '../public/images/hero_image1.png'
import img2 from '../public/images/hero_image2.png'
import img1 from '../public/images/hero_image3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skybox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <Image priority={true} src={logo} alt='Skybox'/>
        <a href=''>Get in touch</a>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          We fund the most <span>innovative</span> ideas
        </h1>

        <p className={styles.description}>
        Our mission at skybox is to provide capitals and networks to founders building on the blockchain.
        </p>

        
      </main>
      <div className={styles.hero_image}>
        <div>
        <div><Image src={img1} priority={true} alt='hero'/></div>
        <div className={styles.img2}><Image priority={true} src={img2} alt='hero'/></div>
        <div><Image priority={true} src={img3} alt='hero'/></div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.copy}>
            <small>&copy; 2022 skybox. All Right Reserved</small>
          </div>
        <div className={styles.info}>
          <div className={styles.mail}>
            <span>
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope}/>
            </span>
            <a href="mailto:info@defimentum.com">talk@skybox.vc</a>
          </div>
          <div className={styles.follow}>
            <span>Follow us on </span> <a className={styles.icon} href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
