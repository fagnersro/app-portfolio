'use client'

import useSWR from 'swr'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  // método com useEffect
  // const [data, setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store',
  //     })

  //     if (!res.ok) {
  //       setErr(true)
  //     }

  //     const data = await res.json()

  //     setData(data)
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])

  const session = useSession()
  console.log(session)

  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher,
  )

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
  }

  if (session.status === 'authenticated') {
    return <div className={styles.container}>Dashboard</div>
  }
}
