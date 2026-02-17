import { useRef, useEffect } from "react"
import { categories } from "../lib/menu-data"
import {
  Drumstick,
  Flame,
  UtensilsCrossed,
  Sandwich,
  Salad,
  Plus,
  IceCreamCone,
} from "lucide-react"
import styles from "./CategoryTabs.module.css"

const iconMap = {
  broasted: Drumstick,
  traditional: Flame,
  meals: UtensilsCrossed,
  shawarma: Sandwich,
  appetizers: Salad,
  extras: Plus,
  desserts: IceCreamCone,
}

export default function CategoryTabs({ activeCategory, onCategoryChange }) {
  const scrollRef = useRef(null)
  const activeRef = useRef(null)

  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current
      const activeEl = activeRef.current
      const containerRect = container.getBoundingClientRect()
      const activeRect = activeEl.getBoundingClientRect()

      const scrollLeft =
        activeRect.left - containerRect.left + container.scrollLeft - containerRect.width / 2 + activeRect.width / 2

      container.scrollTo({ left: scrollLeft, behavior: "smooth" })
    }
  }, [activeCategory])

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div ref={scrollRef} className={`hide-scrollbar ${styles.scrollArea}`}>
          {categories.map((cat) => {
            const Icon = iconMap[cat.id]
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                ref={isActive ? activeRef : null}
                onClick={() => onCategoryChange(cat.id)}
                className={`${styles.tab} ${isActive ? styles.tabActive : styles.tabInactive}`}
              >
                <Icon className={styles.icon} />
                <span>{cat.name}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}