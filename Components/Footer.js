import style from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.logo}><img src="/logo.png" alt="logo"/></div>
            <ul className={style.productList}>
                <li>Products
                    <ul>
                        <li>Antivirus</li>
                        <li>Printer Catridge</li>
                        <li>Softwares</li>
                        <li>Computer Accessories</li>
                    </ul>
                </li>
                <li>Services
                    <ul>
                        <li>Laptop repair</li>
                        <li>Pc repair</li>
                        <li>Software services</li>
                        <li>Pc build</li>
                    </ul>
                </li>
                <li>Contact
                    <ul>
                        <li><img src="/whatsapp.png"/></li>
                        <li><img src="/facebook.png"/></li>
                        <li><img src="/insta.png"/></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Footer