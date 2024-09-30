import s from './styles.module.scss'
import NewsItem from '@/components/NewsItem/NewsItem.jsx'

const NewsList = ({ news }) => {
  return (
    <ul className={s.list}>
      {
        news.map((item) => (
          <NewsItem key={item.id} item={item} />
        ))
      }
    </ul>
  )
}

export default NewsList
