import style from '../styles/Cards.module.scss'

const Cards = ({cardsToDisplay, showRank=false}) => {
    
  return (
    <div className={style.container}>
        {cardsToDisplay.map((card,index)=><div className={style.card} key={index}>{showRank ? <span>#{index+1}</span> : ""}<img src={card.img} alt="card" /><span>{card.des}</span></div>)}
    </div>
  )
}

export default Cards