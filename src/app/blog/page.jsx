import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  })

  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

export default async function Blog() {
  const data = await getData()

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => {
        return (
          <Link
            href={`/blog/${item._id}`}
            className={styles.container}
            key={item.id}
            passHref
          >
            <div className={styles.imageContainer}>
              <Image
                src={item.img}
                alt=""
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        )
      })}

      {/* <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/246658/pexels-photo-246658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Develleper</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            labore illum aliquam expedita, ratione maiores, provident ad vel
            blanditiis cupiditate, quia voluptatum doloremque dolor quasi
            obcaecati quos sequi? Ipsum nemo saepe qui molestias blanditiis
            ipsam explicabo ab illo neque reprehenderit excepturi officia est
            totam maiores, nam, voluptatibus quidem voluptas quae?
          </p>
        </div>
      </Link> */}
    </div>
  )
}
