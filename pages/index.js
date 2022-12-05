import style from '../styles/Home.module.scss'
import Link from 'next/link'
import HeroStyled from '../Components/HeroStyled'
import Cards from '../Components/Cards'

export default function Home({spareParts, bestseller,custompcandrepair,antivirus}) {
  const welcomeText = "Christmas offers"

  return (
    <div >
      <main className={style.main} >
        <h1 className={style.h1}>{welcomeText}</h1>
        <HeroStyled />
        <h3 className={style.h3}>Best sellers in Accessories</h3>
        <Cards cardsToDisplay={bestseller} showRank={true} />
        <h3 className={style.h3}>Custom PC Built and Repair</h3>
        <Cards cardsToDisplay={custompcandrepair} />
        <h3 className={style.h3}>Protect your PC against Malware and Virus</h3>
        <Cards cardsToDisplay={antivirus} />
        <h3 className={style.h3}>Replacement Spare Parts</h3>
        <Cards cardsToDisplay={spareParts} />
      </main>
    </div>
  )
}

    //id 1-8 hero
    //id 9-16 best seller
    //id 17-20 custom ps and repair
    //id 21-24 antivirus
    //id 25-36 spare parts

export const getStaticProps = async () => {
    const spareParts = await fetchData("spareparts")
    const antivirus = await fetchData("antivirus")
    const bestseller = await fetchData("bestseller")
    const custompcandrepair = await fetchData("custompcandrepair")
    return {
      props: {
        antivirus,
        bestseller,
        custompcandrepair,
        spareParts,
      }
    }
}


async function fetchData(url) {
  const baseurl = `http://localhost:3000/api/products/${url}`
  const res = await fetch(baseurl)
  const result = await res.json()
  return result
}