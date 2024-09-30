import s from './styles.module.scss'
import { formatDateAgo } from '@/helpers/formatDateAgo.js'
import Image from '@/components/Image/Image.jsx'

const NewsBanner = ({ item }) => {
  return (
    <div className={s.banner}>
      <Image image={item?.image} />
      <h3 className={s.title}>{item.title}</h3>
      <p className={s.extra}>
        {formatDateAgo(item.published)} by {item.author}
      </p>
    </div>
  )
}

export default NewsBanner
