import Menu from '../components/menu/Menu'
import { MenuProvider } from '../contexts/menuContext'
import { firestore } from '../firebase/firebase'
import useQueryData from '../hooks/useQueryData'
import {
  COLL_ALLERGEN,
  COLL_CATEGORY,
  COLL_PRODUCT,
  COLL_SUBCATEGORY,
} from '../utils/constants'
// import data from '../utils/demoData.json'

const MenuContainer = () => {
  const productsQuery = useQueryData(COLL_PRODUCT, firestore)
  const categoriesQuery = useQueryData(COLL_CATEGORY, firestore, 'order')
  const subcategoriesQuery = useQueryData(COLL_SUBCATEGORY, firestore, 'order')
  const allergensQuery = useQueryData(COLL_ALLERGEN, firestore)

  const data = {
    products: productsQuery.data,
    categories: categoriesQuery.data,
    subcategories: subcategoriesQuery.data,
    allergens: allergensQuery.data,
    loadingCategories: categoriesQuery.isLoading,
    loadingProducts:
      productsQuery.isLoading ||
      allergensQuery.isLoading ||
      subcategoriesQuery.isLoading,
  }

  return (
    <MenuProvider value={data}>
      <Menu />
    </MenuProvider>
  )
}

export default MenuContainer
