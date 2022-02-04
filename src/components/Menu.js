import React, { useState } from 'react'
import ItemList from './ItemList'
import Category from './Category'
import Product from './Product'
import Header from './Header'
import { useMenu } from '../contexts/menuContext'

const Menu = () => {
  // agregar el fade in y pade up wrapeando el itemlist

  const menuData = useMenu()

  const [category, setCategory] = useState(null)

  const renderItemList = () => {
    // Render the category list if there is not a category selected
    if (!category) {
      return (
        <ItemList
          loading={menuData.loadingCategories}
          error={menuData.error}
          component={Category}
          list={menuData.categories}
          onClick={(category) => setCategory(category)}
        />
      )
    }
    // Render the product list if there is a selected category
    return (
      <ItemList
        loading={menuData.loadingProducts}
        error={menuData.error}
        component={Product}
        list={menuData.products}
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

export default Menu
