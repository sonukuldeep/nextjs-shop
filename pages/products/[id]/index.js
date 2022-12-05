import { useRouter } from 'next/router'
import style from '../../../styles/PerProduct.module.scss'

const product = ({ data }) => {

    // const router = useRouter() //helps gets the param as does context in getServerSideProps/getStaticProps... 
    // const {id} = router.query  //hence not needed in this case since i'm already uning getServerSideProps 

    return <div className={style.container}>
        <div><img src={data.img} /></div>
        <div className={style.feature}>
            <div className={style.cards}>
                <div className={style.title}>{data.desc[0].title}</div>
                <p className={style.desc}>{data.desc[0].desc}</p>
            </div>
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
