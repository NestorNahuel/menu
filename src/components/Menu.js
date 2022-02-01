import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ItemList from './ItemList'
import Category from './Category'
import Product from './Product'
import Header from './Header'

const Menu = ({ loadingProducts, loadingCategories, data, error }) => {
  // agregar el fade in y pade up wrapeando el itemlist

  const [category, setCategory] = useState(null)

  const renderItemList = () => {
    // Render the category list if there is not a category selected
    if (!category) {
      return (
        <ItemList
          loading={loadingCategories}
          error={error}
          component={Category}
          list={data.categories}
          onClick={(category) => setCategory(category)}
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
        allergens={data.allergens}
      />
    )
  }

  const onReturn = category && (() => setCategory(null))

  return (
    <div>
      <Header label={category?.name} onReturn={onReturn} />
      {renderItemList()}
    </div>
  )
}

Menu.propTypes = {
  loadingProducts: PropTypes.bool,
  loadingCategories: PropTypes.bool,
  data: PropTypes.object,
  error: PropTypes.bool,
}

export default Menu
