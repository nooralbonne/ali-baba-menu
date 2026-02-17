import { useState, useCallback } from "react"
import Header from "./menu/Header"
import CategoryTabs from "./menu/CategoryTabs"
import HeroBanner from "./menu/HeroBanner"
import MenuSection from "./menu/MenuSection"
import SearchResults from "./menu/SearchResults"
import Footer from "./menu/Footer"
import { categories } from "./lib/menu-data"
import styles from "./App.module.css"

function App() {
  const [activeCategory, setActiveCategory] = useState("broasted")
  const [searchQuery, setSearchQuery] = useState("")

  const handleCategoryChange = useCallback((id) => {
    setActiveCategory(id)
    setSearchQuery("")
  }, [])

  const handleSearchChange = useCallback((query) => {
    setSearchQuery(query)
  }, [])

  const isSearching = searchQuery.trim().length > 0

  return (
    <div className={styles.app}>
      <Header />
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <main>
        <HeroBanner
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />

        {isSearching ? (
          <SearchResults query={searchQuery.trim()} />
        ) : (
          <>
            <MenuSection categoryId={activeCategory} />

            <div className={styles.otherCategories}>
              <div className={styles.otherCategoriesCard}>
                <h3 className={styles.otherCategoriesTitle}>
                  تصفح الأقسام الأخرى
                </h3>
                <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 ${styles.otherCategoriesGrid}`}>
                  {categories
                    .filter((c) => c.id !== activeCategory)
                    .map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={styles.categoryButton}
                      >
                        <span className={styles.categoryIcon}>{cat.icon}</span>
                        <span className={styles.categoryName}>{cat.name}</span>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App