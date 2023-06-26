import styles from './page.module.css'
import Image from 'next/image'
import Hero from 'public/hero.png'
import Button from '../components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We brin together the teams from the
          global tech indutry.
        </p>
        <Button
          className={styles.button}
          url="/portfolio"
          text="See Our Wors"
        />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  )
}
