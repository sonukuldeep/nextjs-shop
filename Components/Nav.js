import Link from 'next/link'
import styles from '../styles/Nav.module.scss'
import { useState, useRef, useEffect } from 'react'

const Nav = () => {
  const [toggleBtn1, setToggleBtn1] = useState(false)
  const [toggleBtn2, setToggleBtn2] = useState(false)
  const box1 = useRef(null);
  const box2 = useRef(null);

  useOutsideAlerter(box1,setToggleBtn1)
  useOutsideAlerter(box2,setToggleBtn2)
 
  return (
    <nav className={styles.nav}>
      <ul><li><Link href='/'><img src="/logo.png" alt="logo" /></Link></li></ul>
      <div ref={box1} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#FFF" d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z" /></svg>
        <ul className={toggleBtn1 ? styles.active : ""}>
          <li><Link href='/feature'>Featured Products</Link></li>
          <li>Categories</li>
        </ul>
      </div>
      <div ref={box2} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFF" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
        <ul className={toggleBtn2 ? styles.active : ""}>
          <li><Link href='/blog'>Tech Blog</Link></li>
          <li>Login</li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
      </div>
      <ul>
        <li><Link href='/feature'>Featured Products</Link></li>
        <li>|</li>
        <li>Categories</li>
        <li>|</li>
        <li><Link href='/blog'>Tech Blog</Link></li>
        <li>|</li>
        <li>Login</li>
        <li>|</li>
        <li><Link href='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav

function useOutsideAlerter(ref,setToggleBtn) {
  useEffect(() => {
    // Function for click event
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //clicked outside
        setToggleBtn(false)
      }else {
        //clicked inside
        setToggleBtn(preVal=>!preVal)
      }
    }

    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref]);
}