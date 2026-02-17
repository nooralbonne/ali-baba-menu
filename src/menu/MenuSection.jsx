import MenuItem from "./MenuItem"
import { categories, menuItems } from "../lib/menu-data"
import styles from "./MenuSection.module.css"

export default function MenuSection({ categoryId }) {
  const category = categories.find((c) => c.id === categoryId)
  const items = menuItems[categoryId] || []

  if (!category || items.length === 0) return null

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerBar} />
        <div>
          <h2 className={styles.title}>{category.name}</h2>
          <p className={styles.subtitle}>
            {items.length} صنف متوفر
          </p>
        </div>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${styles.grid}`}>
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}