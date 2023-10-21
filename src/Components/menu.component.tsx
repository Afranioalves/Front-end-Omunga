import styles from "../styles/menu.module.css"
import Image from "next/image"
import Link from "next/link"

const Menu = (props:{page:string}) =>{
  const {page} = props
  return(
  <section className={styles.container}>
    <Image src='/images/logo.png' width={125} height={35} alt="omunga logo"/>
    <div className={styles.content}>
      <ul>
        <li className={page=='Home'?"link-selected":''}><Link href="#">Home</Link></li>
        <li><Link href="#">Artigos</Link></li>
        <li><Link href="#">Sobre</Link></li>
      </ul>
      <div className={styles.contentSignIn}>
        <Link href="#">
          <button>
            Login
            <i className='bx bx-chevron-right'></i>
          </button>
        </Link>
      </div>
    </div>
  </section>
  )
}
export default Menu