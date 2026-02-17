import { Phone, MapPin, Truck } from "lucide-react"
import styles from "./Heade.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.pattern} />
      
      <div className={styles.container}>
        <div className={styles.topBar}>
          <a href="tel:064200261" className={styles.contactLink}>
            <Phone className={styles.icon} />
            <span>06 4200261</span>
          </a>
          <span className={styles.separator}>|</span>
          <a href="tel:0797111655" className={styles.contactLink}>
            <Phone className={styles.icon} />
            <span>0797 111 655</span>
          </a>
          <span className={styles.separator}>|</span>
          <div className={styles.delivery}>
            <Truck className={styles.icon} />
            <span className={styles.deliveryText}>توصيل مجاني للمنطقة</span>
          </div>
        </div>

        <div className={styles.logoSection}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoGlow} />
            <img
              src="/images/logo.jpg"
              alt="مطاعم السلطان علي بابا"
              className={styles.logo}
            />
          </div>
          <div className={styles.titleSection}>
            <h1 className={styles.titleMain}>مطاعم السلطان</h1>
            <h2 className={styles.titleSub}>علي بابا</h2>
            <div className={styles.address}>
              <MapPin className={styles.iconSmall} />
              <span>حي نزال - شارع الدستور</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wave}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40V20C240 0 480 0 720 20C960 40 1200 40 1440 20V40H0Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </header>
  )
}