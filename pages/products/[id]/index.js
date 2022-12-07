import { useRouter } from 'next/router'
import style from '../../../styles/PerProduct.module.scss'

const product = ({ data }) => {

    // const router = useRouter() //helps gets the param as does context in getServerSideProps/getStaticProps... 
    // const {id} = router.query  //hence not needed in this case since i'm already uning getServerSideProps 

    return <div className={style.container}>
        <div className={style.image_container}>
            <h1 className={style.h1}>{data.excerpt}</h1>
            <div className={style.flex_center_center}><img src={data.img} /></div>
        </div>
        <div className={style.feature}>
            {data.desc.map((desc, index) => {
                return (<div key={index} className={style.cards}>
                    <div className={style.title}>{desc.title}</div>
                    <p className={style.desc}>{desc.desc}</p>
                </div>)
            })}
        </div>
    </div>
    // return <div>"hey"</div>
}

export default product

export const getServerSideProps = async (context) => {

    const url = `http://localhost:3000/api/product/${context.params.id}`
    const res = await fetch(url)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}
