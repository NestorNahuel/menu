import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ItemList from './ItemList'
import Category from './Category'
import Product from './Product'

const Menu = ({ loadingProducts, loadingCategories, data, error }) => {
  // agregar el fade in y pade up wrapeando el itemlist

  const [category, setCategory] = useState(null)

  // Render the category list if there is not a category selected
  if (!category) {
    return (
      <ItemList
        loading={loadingCategories}
        error={error}
        component={Category}
        list={data.categories}
        onClick={setCategory}
      />
    )
  }
  // Render the product list if there is a selected category
  return (
    <ItemList
      loading={loadingProducts}
      error={error}
      component={Product}
      list={data.products}
    />
  )
}

Menu.propTypes = {
  loadingProducts: PropTypes.bool,
  loadingCategories: PropTypes.bool,
  data: PropTypes.object,
  error: PropTypes.bool,
}

export default Menu
