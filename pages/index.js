import style from '../styles/Home.module.scss'
import HeroStyled from '../Components/HeroStyled'
import Cards from '../Components/Cards'
import Email from '../Components/Email'
import { useEffect,useContext } from 'react'
import ScrollContext from '../Components/ScrollContext'

export default function Home({spareParts, bestseller,custompcandrepair,antivirus}) {
  const welcomeText = "Christmas offers"
  const {scrollY, setScrollY} = useContext(ScrollContext)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);
  
  useEffect(()=>{
    window.scrollTo(0,scrollY)
  },[])

  return (
    <div >
      <main className={style.main} >
        <h1 className={style.h1}>{welcomeText}</h1>
        <HeroStyled />
        <h3 className={style.h3}>Best sellers in Accessories</h3>
        <Cards cardsToDisplay={bestseller} showRank={true} />
        <h3 className={style.h3}>Contact Us</h3>
        <Email/>
        <h3 className={style.h3}>Custom PC Built and Repair</h3>
        <Cards cardsToDisplay={custompcandrepair} smallSquare={true} order={1}/>
        <h3 className={style.h3}>Protect your PC against Malware and Virus</h3>
        <Cards cardsToDisplay={antivirus} smallSquare={true} order={2}/>
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