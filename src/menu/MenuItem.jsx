import { Star, Phone } from "lucide-react"
import styles from "./MenuItem.module.css"

export default function MenuItem({ item }) {
  const handleOrder = () => {
    const message = encodeURIComponent(
      `مرحبا، أريد طلب: ${item.name}${item.price ? ` - ${item.price} د.أ` : ""}`
    )
    window.open(`https://wa.me/962797111655?text=${message}`, "_blank")
  }

  return (
    <div className={styles.card}>
      {item.popular && (
        <div className={styles.popularBadge}>
          <Star className={styles.starIcon} />
          <span>الأكثر طلباً</span>
        </div>
      )}

      {item.offer && (
        <div className={styles.offerBadge}>
          عرض خاص
        </div>
      )}

      <div className={styles.imageWrapper}>
        <img
          src={item.image}
          alt={item.name}
          className={styles.image}
        />
        <div className={styles.imageOverlay} />

        <div className={styles.priceWrapper}>
          {item.price ? (
            <div className={styles.price}>
              <span className={styles.priceValue}>{item.price.toFixed(2)}</span>
              <span className={styles.priceCurrency}>د.أ</span>
            </div>
          ) : (
            <div className={styles.priceTextWrapper}>
              <span className={styles.priceText}>{item.priceText}</span>
            </div>
          )}
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.description}>{item.description}</p>

        <button onClick={handleOrder} className={styles.orderButton}>
          <Phone className={styles.orderIcon} />
          <span>اطلب الآن</span>
        </button>
      </div>
    </div>
  )
}