import MenuItem from "./MenuItem"
import { menuItems } from "../lib/menu-data"
import { SearchX } from "lucide-react"
import styles from "./SearchResults.module.css"

export default function SearchResults({ query }) {
  const allItems = Object.values(menuItems).flat()
  const filtered = allItems.filter(
    (item) => item.name.includes(query) || item.description.includes(query)
  )

  console.log("Filtered items:", filtered); // للتأكد من وجود نتائج

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerBar} />
        <div>
          <h2 className={styles.title}>نتائج البحث</h2>
          <p className={styles.subtitle}>
            {filtered.length > 0
              ? `${filtered.length} نتيجة لـ "${query}"`
              : `لا توجد نتائج لـ "${query}"`}
          </p>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className={styles.grid}>
          {filtered.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <SearchX className={styles.emptyIcon} />
          <p className={styles.emptyTitle}>لم نجد ما تبحث عنه</p>
          <p className={styles.emptyText}>جرّب البحث بكلمة أخرى</p>
        </div>
      )}
    </section>
  )
}