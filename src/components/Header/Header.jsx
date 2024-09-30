import { formatDate } from '@/helpers/formatDate.js'
import s from './styles.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>NEWS</h1>
      <p className={s.date}>{formatDate(new Date())}</p>
    </header>
  )
}

export default Header
