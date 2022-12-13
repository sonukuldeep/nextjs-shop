import Email from '../Components/Email'
import style from '../styles/Contacts.module.scss'

const contact = () => {
  return (
    <div className={style.container}>
      <h3>Get exclusive offers when purchasing from us!</h3>
      <p>Dial our Number or Email us or WhatsApp us for any queries. It absolutely free!</p>
      <h4>8270333710</h4>
      <Email/>
    </div>
  )
}

export default contact