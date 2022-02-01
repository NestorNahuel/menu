import Menu from '../components/Menu'
import { firestore } from '../firebase/firebase'
import useQueryData from '../hooks/useQueryData'
import { COLL_ALLERGEN, COLL_CATEGORY, COLL_PRODUCT } from '../utils/constants'
// import data from '../utils/demoData.json'

const MenuContainer = () => {
  const productsQuery = useQueryData(COLL_PRODUCT, firestore)
  const categoriesQuery = useQueryData(COLL_CATEGORY, firestore)
  const allergensQuery = useQueryData(COLL_ALLERGEN, firestore)

  const data = {
    products: productsQuery.data,
    categories: categoriesQuery.data,
    allergens: allergensQuery.data,
  }

  return (
    <Menu
      data={data}
      loadingCategories={categoriesQuery.isLoading}
      loadingProducts={productsQuery.isLoading || allergensQuery.isLoading}
    />
  )
}

export default MenuContainer
