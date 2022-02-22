import React, { useState } from 'react'
import ItemList from '../common/ItemList'
import Category from '../categories/Category'
import Product from '../products/Product'
import Header from '../header/Header'
import { useMenu } from '../../contexts/menuContext'

const Menu = () => {
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

  return (
    <div>
      <Header
        label={category?.name}
        category={category}
        setCategory={setCategory}
      />
      {renderItemList()}
    </div>
  )
}

export default Menu
