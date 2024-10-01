import s from './styles.module.scss'
import NewsBanner from '@/components/NewsBanner/NewsBanner.jsx'
import { useEffect, useState } from 'react'
import { getNews } from '@/api/apiNews.js'
import NewsList from '@/components/NewsList/NewsList.jsx'
import Skeleton from '@/components/Skeleton/Skeleton.jsx'

const Main = () => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews()
        setIsLoading(true)
        setNews(response.news)
        console.log(response.news)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchNews()
  }, [])
  
  return (
   <main className={s.main}>
     {news.length > 0 && !isLoading
      ? <NewsBanner item={news[0]} />
      : <Skeleton count={1} type='banner' />
     }
     
     {!isLoading
      ? <NewsList news={news} />
      : <Skeleton count={10} type='item' />
     }
   </main>
  )
}

export default Main
