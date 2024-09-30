import s from './styles.module.scss'
import NewsBanner from '@/components/NewsBanner/NewsBanner.jsx'
import { useEffect, useState } from 'react'
import { getNews } from '@/api/apiNews.js'
import NewsList from '@/components/NewsList/NewsList.jsx'

const Main = () => {
  const [news, setNews] = useState([])
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews()
        setNews(response.news)
        console.log(response.news)
      } catch (error) {
        console.log(error)
      }
    }
    
    fetchNews()
  }, [])
  
  return (
   <main className={s.main}>
     {news.length > 0 && <NewsBanner item={news[0]} />}
     <NewsList news={news} />
   </main>
  )
}

export default Main
