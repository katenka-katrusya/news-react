import s from './styles.module.scss'
import { formatDateAgo } from '@/helpers/formatDateAgo.js'

const NewsItem = ({ item }) => {
  return (
    <li className={s.item}>
      <div className={s.wrapper} style={{backgroundImage: `url(${item.image})`}} />
      <div className={s.info}>
        <h3 className={s.title}>{item.title}</h3>
        <p className={s.extra}>
          {formatDateAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  )
}

export default NewsItem
