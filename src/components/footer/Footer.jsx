import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Fagnersro. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="Fagnersro Dev"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/2.png"
          alt="Fagnersro Dev"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/3.png"
          alt="Fagnersro Dev"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/4.png"
          alt="Fagnersro Dev"
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </div>
  )
}
