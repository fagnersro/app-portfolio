import Image from 'next/image'
import Button from '../../../components/Button/Button'
import styles from './page.module.css'

export default function Category({ params }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Protifólio</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            omnis quod porro cupiditate odio delectus qui, provident eos.
            Temporibus, animi illo, nobis velit dignissimos laborum molestiae
            ipsum veniam tenetur officia nemo. Mollitia nesciunt hic commodi
            illum beatae officiis eveniet deleniti! Ipsam, facere praesentium
            consectetur odit sapiente ullam harum quasi dolore!
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Protifólio</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            omnis quod porro cupiditate odio delectus qui, provident eos.
            Temporibus, animi illo, nobis velit dignissimos laborum molestiae
            ipsum veniam tenetur officia nemo. Mollitia nesciunt hic commodi
            illum beatae officiis eveniet deleniti! Ipsam, facere praesentium
            consectetur odit sapiente ullam harum quasi dolore!
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Protifólio</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            omnis quod porro cupiditate odio delectus qui, provident eos.
            Temporibus, animi illo, nobis velit dignissimos laborum molestiae
            ipsum veniam tenetur officia nemo. Mollitia nesciunt hic commodi
            illum beatae officiis eveniet deleniti! Ipsam, facere praesentium
            consectetur odit sapiente ullam harum quasi dolore!
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
