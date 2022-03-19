import React from 'react'
import PropTypes from 'prop-types'
import ItemList from '../common/ItemList'
import { useMenu } from '../../contexts/menuContext'
import {
  getCategorySubcategories,
  groupListByKey,
  orderByField,
} from '../../utils/utils'
import SubcategoryHeader from '../subcategories/SubcategoryHeader'
import { EMPTY_GROUP_KEY } from '../../utils/constants'

const ProductList = ({ productList, categoryId, loading, error, ...props }) => {
  const { subcategories } = useMenu()

  const renderProductList = (list) => (
    <ItemList loading={loading} error={error} list={list} {...props} />
  )

  const renderSubCategoryHeader = (subcategory) => (
    <SubcategoryHeader subcategory={subcategory} />
  )

  const renderProductSubList = (subcategory, subList) => (
    <>
      {renderSubCategoryHeader(subcategory)}
      {renderProductList(subList)}
    </>
  )

  // Rendering

  const subcategoriesList = getCategorySubcategories(subcategories, categoryId)

  if (!subcategoriesList?.length || !productList?.length || loading || error) {
    return renderProductList(productList)
  }

  const productGroups = groupListByKey(
    orderByField(productList, 'subcategory'),
    'subcategory'
  )
  const subcategoryGroups = groupListByKey(subcategoriesList, '_id')
  const productsCategoriesId = Object.keys(productGroups)

  // If there is only a subcategory
  if (productsCategoriesId?.length && productsCategoriesId.length < 2) {
    return renderProductList(productList)
  }

  return productsCategoriesId.map((key) => {
    if (key === EMPTY_GROUP_KEY) return renderProductList(productGroups[key])
    return (
      subcategoryGroups[key] &&
      renderProductSubList(subcategoryGroups[key][0], productGroups[key])
    )
  })
}

ProductList.propTypes = {
  productList: PropTypes.array,
  categoryId: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool,
}

export default ProductList
