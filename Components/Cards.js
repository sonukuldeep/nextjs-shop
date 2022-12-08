import style from '../styles/Cards.module.scss'

const Cards = ({ cardsToDisplay, showRank = false, smallSquare = false, order = 0 }) => {

  return (
    <div className={smallSquare ? `${style.bigContainer_reverse}` : `${style.bigContainer}`}>
      {order === 1 ? <div className={style.plankCard}>
        <p>Order custom pc for any use case at an affordable price</p>
        <p>Have a broken laptop or pc? </p>
        <p>Or you want to sell your old computer?</p>
        <p>Call us or whatsApp us and we will take care of the rest</p>
        <p>Whatsapp number: 8270333710</p>
      </div> : ""}
      <div className={!smallSquare ? `${style.container}` : `${style.smallContainer}`}>
        {cardsToDisplay.map((card, index) => <div className={style.card} key={index}>{showRank ? <span>#{index + 1}</span> : ""}<img src={card.img} alt="card" /><span>{card.excerpt}</span></div>)}
      </div>
      {order === 2 ? <div className={style.plankCard}>
        <p>Online delivery within 30min</p>
        <p>Combo are also available for more than 1 device</p>
        <p>Call us or whatsApp us to get antivius/internet security immediately</p>
        <p>Whatsapp number: 8270333710</p>
      </div> : ""}
    </div>
  )
}

export default Cards