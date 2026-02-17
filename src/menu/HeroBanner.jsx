import { Search } from "lucide-react"
import styles from "./HeroBanner.module.css"

export default function HeroBanner({ searchQuery, onSearchChange }) {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img
          src="/images/hero-banner.jpg"
          alt="أشهى الأطباق العربية"
          className={styles.bannerImage}
        />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h2 className={styles.title}>أشهى المأكولات</h2>
          <p className={styles.subtitle}>مشاوي - بروستد - شاورما - منسف - أوزي</p>
          <div className={styles.deliveryBadge}>
            توصيل مجاني
          </div>
        </div>
      </div>

      <div className={styles.searchWrapper}>
        <Search className={styles.searchIcon} />
        <input
          type="text"
          placeholder="ابحث عن طبقك المفضل..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
        />
      </div>
    </div>
  )
}