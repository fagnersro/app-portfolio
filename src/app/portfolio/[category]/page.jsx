import Image from 'next/image'
import Button from '../../../components/Button/Button'
import styles from './page.module.css'

import { items } from './data.js'
import { notFound } from 'next/navigation'

function getData(cat) {
  const data = items[cat]

  if (data) {
    return data
  }

  return notFound()
}

export const metadata = {
  title: 'Fagner | Works',
  description: 'The Front End Works',
}

export default function Category({ params }) {
  const data = getData(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  )
}
