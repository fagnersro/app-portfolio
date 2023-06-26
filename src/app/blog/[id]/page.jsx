import Image from 'next/image'
import styles from './page.module.css'

export default function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At impedit
            enim, ea recusandae possimus provident temporibus maxime quaerat
            accusantium numquam incidunt architecto veritatis voluptas delectus
            non vitae molestiae earum eveniet!
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/259984/pexels-photo-259984.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Fagnersro</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/259984/pexels-photo-259984.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          praesentium voluptas dolore sequi, quos possimus tempore quisquam
          autem provident commodi totam quibusdam voluptatibus doloremque velit
          odio expedita eum, eligendi corrupti.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          voluptatem iure quidem, veniam veritatis eligendi velit, vel cumque
          blanditiis voluptas non fugiat amet accusamus ab cum minus saepe
          facere eos!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga,
          ipsa temporibus cum minus maxime dolor accusamus qui, rem consequuntur
          asperiores voluptatem reiciendis iste quasi accusantium nesciunt. Est
          nisi iusto laudantium aspernatur iste, dignissimos unde debitis
          exercitationem nihil, deserunt expedita, illo voluptatum? Voluptates
          labore odit excepturi impedit sit? Maiores placeat voluptas dolorem.
          Ducimus provident eius dolores sapiente repellendus possimus. Aperiam
          consequatur illo esse dolor asperiores ea accusamus impedit vel quo
          laborum? A nam pariatur atque ut assumenda aut qui fuga dicta natus
          iusto reprehenderit sapiente eligendi, quis voluptate exercitationem
          reiciendis quisquam, quas odit possimus? Placeat a eaque suscipit cum
          velit, aliquam quidem, quasi, consequatur natus facilis consectetur
          aspernatur ducimus numquam temporibus soluta voluptas alias
          repellendus! Velit odit quod, vel eaque deserunt exercitationem
          tenetur sequi fugit a aliquam aut. Facilis culpa ducimus numquam, odio
          porro officiis maiores corrupti! Quos eaque id quis magni ad veritatis
          officia mollitia autem! Assumenda, officia repellendus. Quisquam, rem
          quibusdam? Voluptatem explicabo quisquam cupiditate obcaecati
          accusamus quasi modi numquam nemo, sit dignissimos repellendus dolorum
          commodi consectetur praesentium, vero repudiandae laudantium? Quia id
          natus provident alias at quas praesentium molestias officiis iure,
          quasi reiciendis quidem maiores obcaecati eos, beatae atque sunt,
          velit dignissimos. Doloremque veritatis hic corrupti consectetur.
        </p>
      </div>
    </div>
  )
}
