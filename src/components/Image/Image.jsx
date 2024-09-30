import s from './styles.module.scss'

const Image = ({ image }) => {
  return (
    <div className={s.wrapper}>
      {
        image && <img src={image} alt='news' className={s.image} />
      }
    </div>
  )
}

export default Image
