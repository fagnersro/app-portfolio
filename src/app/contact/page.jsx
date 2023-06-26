import Image from 'next/image'
import styles from './page.module.css'
import Button from '../../components/Button/Button'

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            cols="30"
            placeholder="message"
            rows="10"
            className={styles.textArea}
          />
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}
