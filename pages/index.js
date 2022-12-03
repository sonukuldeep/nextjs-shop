import style from '../styles/Home.module.scss'
import Link from 'next/link'
import Hero from '../Components/Hero'
import Cards from '../Components/Cards'

export default function Home({articles}) {
  const welcomeText = "Christmas offers"
  const bestSellers = [
    { img: "/best-seller/antivirus.jpg", des: "Best in class Antivirus" },
    { img: "/best-seller/ink_catridge.jpg", des: "catrige for inkjet/deskjet" },
    { img: "/best-seller/keyboard.jpg", des: "soft touch keyboard" },
    { img: "/best-seller/mouse.jpg", des: "wire/wireless mouse" },
    { img: "/best-seller/pendrive.jpg", des: "fast pendrives" },
    { img: "/best-seller/headphone.jpg", des: "Affordable headphone" },
    { img: "/best-seller/harddrive.jpg", des: "external harddrive" },
    { img: "/best-seller/ups.jpg", des: "protect pc from power cuts" }]

  const repairAndCustomPC = [
    { img: "/repair/intel-pc-image-2.png", des: "Intel Custom PC" },
    { img: "/repair/amd-pc-image.png", des: "Amd Custom PC" },
    { img: "/repair/1.jpg", des: "Repair your PC" },
    { img: "/repair/2.jpg", des: "Repair your laptop" }]

  const antivirus = [
    { img: "/antivirus/1.jpg", des: "Affordable Antivirus" },
    { img: "/antivirus/2.jpg", des: "Best in class" },
    { img: "/antivirus/3.jpg", des: "All in one" },
    { img: "/antivirus/4.jpg", des: "Top rated Product" }]

  const spareParts = [
    {img: "/spare-parts/mb.jpg", des: "Gigabyte Motherboard"},
    {img: "/spare-parts/mb2.jpg", des: "Asus Motherboard"},
    {img: "/spare-parts/smps1.jpg", des: "Gaming smps"},
    {img: "/spare-parts/smps2.jpg", des: "Budget smps"},
    {img: "/spare-parts/laptop-screen.jpg", des: "Laptop screen replacement"},
    {img: "/spare-parts/laptop-keyboard.jpg", des: "Laptop keyboard replacement"},
    {img: "/spare-parts/cpu2.jpg", des: "budget CPU"},
    {img: "/spare-parts/cpu1.jpg", des: "highend cpu"},
    {img: "/spare-parts/img.jpg", des: "Desktop ram"},
    {img: "/spare-parts/laptop-ram.jpg", des: "laptop ram"},
    {img: "/spare-parts/mb.jpg", des: "Gigabyte Motherboard"},
    {img: "/spare-parts/cd1.jpg", des: "Dvd writer"}]

  return (
    <div >
      <main className={style.main} >
        <h1 className={style.h1}>{welcomeText}</h1>
        <Hero />
        <h3 className={style.h3}>Best sellers in Accessories</h3>
        <Cards cardsToDisplay={bestSellers} showRank={true} />
        <h3 className={style.h3}>Custom PC Built and Repair</h3>
        <Cards cardsToDisplay={repairAndCustomPC} />
        <h3 className={style.h3}>Protect your PC against Malware and Virus</h3>
        <Cards cardsToDisplay={antivirus} />
        <h3 className={style.h3}>Replacement Spare Parts</h3>
        <Cards cardsToDisplay={articles} />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const url = "http://localhost:3000/api/products"
  const res = await fetch(url)
  const data = await res.json()
    return {
      props: {articles: data}
    }
}