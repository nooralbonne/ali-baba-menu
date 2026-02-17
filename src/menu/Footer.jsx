import { Phone, MapPin, Truck, Clock } from "lucide-react"
import { contactInfo } from "../lib/menu-data"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0V20C240 40 480 40 720 20C960 0 1200 0 1440 20V0H0Z"
            fill="var(--background)"
          />
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img
            src="/images/logo.jpg"
            alt="مطاعم السلطان علي بابا"
            className={styles.logo}
          />
          <h3 className={styles.brand}>مطاعم السلطان علي بابا</h3>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <MapPin className={styles.icon} />
            </div>
            <h4 className={styles.cardTitle}>العنوان</h4>
            <p className={styles.cardText}>{contactInfo.address}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Phone className={styles.icon} />
            </div>
            <h4 className={styles.cardTitle}>للطلب والتوصيل</h4>
            <div className={styles.phoneGrid}>
              {contactInfo.phones.map((phone, i) => (
                <a
                  key={i}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className={styles.phoneLink}
                  dir="ltr"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles.iconWrapperYellow}`}>
              <Truck className={styles.icon} />
            </div>
            <h4 className={styles.cardTitle}>التوصيل</h4>
            <p className={styles.deliveryText}>{contactInfo.delivery}</p>
            <div className={styles.deliveryTime}>
              <Clock className={styles.timeIcon} />
              <span>متاح يومياً</span>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} - مطاعم السلطان علي بابا
          </p>
        </div>
      </div>
    </footer>
  )
}