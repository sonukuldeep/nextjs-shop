import style from '../styles/Home.module.scss'
import Link from 'next/link'
import Hero from '../Components/Hero'
import Cards from '../Components/Cards'

export default function Home() {
  const welcomeText = "Christmas offers"
  const bestSellers = [
    {img:"/best-seller/antivirus.jpg", des: "Best in class Antivirus"},
    {img:"/best-seller/ink_catridge.jpg", des: "catrige for inkjet/deskjet"},
    {img:"/best-seller/keyboard.jpg", des: "soft touch keyboard"},
    {img:"/best-seller/mouse.jpg", des: "wire/wireless mouse"},
    {img:"/best-seller/pendrive.jpg", des: "fast pendrives"},
    {img:"/best-seller/headphone.jpg", des: "Affordable headphone"},
    {img:"/best-seller/harddrive.jpg", des: "external harddrive"},
    {img:"/best-seller/ups.jpg", des: "protect pc from power cuts"}]

    const repairAndCustomPC = [
      {img:"/repair/intel-pc-image-2.png", des: "Intel Custom PC"},
      {img:"/repair/amd-pc-image.png", des: "Amd Custom PC"},
      {img:"/repair/1.jpg", des: "Repair your PC"},
      {img:"/repair/2.jpg", des: "Repair your laptop"}]

      const antivirus = [
        {img:"/antivirus/1.jpg", des: "Affordable Antivirus"},
        {img:"/antivirus/2.jpg", des: "Best in class"},
        {img:"/antivirus/3.jpg", des: "All in one"},
        {img:"/antivirus/4.jpg", des: "Top rated Product"}]

  return (
    <div >
      <main className={style.main} >
        <h1 className={style.h1}>{welcomeText}</h1>
        <Hero/>
        <h3 className={style.h3}>Best sellers in Accessories</h3>
        <Cards cardsToDisplay={bestSellers} showRank={true}/>
        <h3 className={style.h3}>Custom PC Built and Repair</h3>
        <Cards cardsToDisplay={repairAndCustomPC}/>
        <h3 className={style.h3}>Protect your PC against Malware and Virus</h3>
        <Cards cardsToDisplay={antivirus}/>
        <Link href='/about'>Go to about</Link>
      </main>   
    </div>
  )
}
