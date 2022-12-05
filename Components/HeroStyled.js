import { useRef, useState, useEffect } from 'react'
import style from '../styles/HeroStyled.module.scss'

function HeroStyled() {
  const [toggle, setToggle] = useState(false)
  const carousel__slide_syle_1 = useRef()
  const carousel__slide_syle_2 = useRef()
  const carousel__slide_syle_3 = useRef()
  const carousel__slide_syle_4 = useRef()
  const carousel__slide_syle_5 = useRef()
  const carousel__track_ref = useRef()
  const [slides, setSlides] = useState(0)
  const [carousel__track, setCarousel__track] = useState()
  const [carousel__slide_width, setCarousel__slide_width] = useState([{}, {}, {}, {}, {}])
  const [current_slide, setCurrent_slide] = useState([{ backgroundColor: 'rgba(0,0,0,0.7)', border: '1px solid #fff' }, {}, {}, {}, {}])
  const [numberOfSlides, setNumberOfSlides] = useState(slides.length)
  const [nextSlide, setNextSlide] = useState(0)
  const posOrNeg = useRef({posOrNeg: 1})

  useEffect(() => {
    setSlides(carousel__track_ref.current.children)
    setNumberOfSlides(carousel__track_ref.current.children.length)
  }, [])

  useEffect(() => {
    if (nextSlide > numberOfSlides -2) {
      posOrNeg.current.posOrNeg = -1
    }
    if (nextSlide < 1) {
      posOrNeg.current.posOrNeg = 1
    }   
    setNextSlide(pre=> pre + posOrNeg.current.posOrNeg)  
  }, [toggle])



  useEffect(() => {
    const amountToMove = carousel__slide_width[nextSlide]?.width
    amountToMove ? setCarousel__track({ transform: 'translateX(-' + amountToMove + ')' }) : ""
    const current_slide_template = current_slide.map((slide,index)=>{
      return (index === nextSlide) ? { backgroundColor: '#003366', border: '1px solid #fff' } : {}
    })
    setCurrent_slide(current_slide_template)
  }, [nextSlide])

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(pre => !pre)
    }, 3000);
    return () => clearInterval(interval);
  }, []);


useEffect(() => {
  const onPageLoad = () => {
    const style_1 = carousel__slide_syle_1.current.getBoundingClientRect().width * 0 + "px"
    const style_2 = carousel__slide_syle_2.current.getBoundingClientRect().width * 1 + "px"
    const style_3 = carousel__slide_syle_3.current.getBoundingClientRect().width * 2 + "px"
    const style_4 = carousel__slide_syle_4.current.getBoundingClientRect().width * 3 + "px"
    const style_5 = carousel__slide_syle_5.current.getBoundingClientRect().width * 4 + "px"
    setCarousel__slide_width([{ width: style_1 }, { width: style_2 }, { width: style_3 },{ width: style_4 }, { width: style_5 }])
  };

  if (document.readyState === 'complete') {
    onPageLoad();
  } else {
    window.addEventListener('load', onPageLoad);
    return () => window.removeEventListener('load', onPageLoad);
  }
}, []);

  return (
    <div className={style.container}>
      <div className={style.carousel}>
        <div className={style.carousel__track_container}>
          <ul ref={carousel__track_ref} className={style.carousel__track} style={carousel__track}>
            <li ref={carousel__slide_syle_1} className={style.carousel__slide}><img className={style.carousel_img} src="/1.png" alt="" /></li>
            <li ref={carousel__slide_syle_2} className={style.carousel__slide}><img className={style.carousel_img} src="/2.png" alt="" /></li>
            <li ref={carousel__slide_syle_3} className={style.carousel__slide}><img className={style.carousel_img} src="/3.png" alt="" /></li>
            <li ref={carousel__slide_syle_4} className={style.carousel__slide}><img className={style.carousel_img} src="/4.png" alt="" /></li>
            <li ref={carousel__slide_syle_5} className={style.carousel__slide}><img className={style.carousel_img} src="/5.png" alt="" /></li>
          </ul>
        </div>
        <div className={style.carousel__nav}>
          <button className={style.carousel__indicator} onClick={()=>{setNextSlide(0)}} style={current_slide[0]}></button>
          <button className={style.carousel__indicator} onClick={()=>{setNextSlide(1)}} style={current_slide[1]}></button>
          <button className={style.carousel__indicator} onClick={()=>{setNextSlide(2)}} style={current_slide[2]}></button>
          <button className={style.carousel__indicator} onClick={()=>{setNextSlide(3)}} style={current_slide[3]}></button>
          <button className={style.carousel__indicator} onClick={()=>{setNextSlide(4)}} style={current_slide[4]}></button>
        </div>
      </div>
    </div>
  )
}

export default HeroStyled