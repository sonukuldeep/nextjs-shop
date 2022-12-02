import style from '../styles/Hero.module.scss'

const Hero = () => {
    const images = ["6.jpg", "2.jpg", "3.jpg", "4.jpg", "1.jpg", "5.jpg", "7.jpg", "8.jpg"]
    return (
        <>
            <div className={style.container}>
                {/* <p className={style.p}>christmas sale on selected items</p> */}
                <div className={`${style.mediaScroller} ${style.snapsInline}`}>
                    {images.map((img, index) => <div key={index} className={style.mediaElement}><img src={img} /></div>)}
                </div>
            </div>
        </>
    )
}

export default Hero