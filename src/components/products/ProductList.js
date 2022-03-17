import React from 'react'
import PropTypes from 'prop-types'
import ItemList from '../common/ItemList'
import { useMenu } from '../../contexts/menuContext'
import { groupListByKey } from '../../utils/utils'
import SubcategoryHeader from '../subcategories/SubcategoryHeader'

const ProductList = ({ productList, loading, error, ...props }) => {
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

  if (!subcategories?.length || !productList?.length || loading || error) {
    return renderProductList(productList)
  }

  const productGroups = groupListByKey(productList, 'subcategory')
  const subcategoryGroups = groupListByKey(subcategories, '_id')
  const productsCategoriesId = Object.keys(productGroups)

  // If there is only a subcategory
  if (productsCategoriesId?.length && productsCategoriesId.length < 2) {
    return renderProductList(productList)
  }

  return productsCategoriesId.map((key) =>
    renderProductSubList(subcategoryGroups[key][0], productGroups[key])
  )
}

ProductList.propTypes = {
  productList: PropTypes.array,

  loading: PropTypes.bool,
  error: PropTypes.bool,
}

export default ProductList
