import {useRouter} from 'next/router'

const product = ({data}) => {
    return <div>{data.id} <img src={data.img}/></div>
    // return <div>"hey"</div>
}

export default product

export const getServerSideProps = async (context) => {
    const url = `http://localhost:3000/api/products/${context.params.id}`
    const res = await fetch(url)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}
