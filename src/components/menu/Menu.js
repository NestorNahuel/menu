import React, { useState } from 'react'
import ItemList from '../common/ItemList'
import Category from '../categories/Category'
import Product from '../products/Product'
import Header from '../header/Header'
import { useMenu } from '../../contexts/menuContext'
import LanguageModal from '../languages/LanguageModal'
import { useLanguage } from '../../contexts/languageContext'
import { getCategoryProducts } from '../../utils/utils'
import CategoryHeader from '../categories/CategoryHeader'
import ProductList from '../products/ProductList'

const Menu = () => {
  const menuData = useMenu()

  const [category, setCategory] = useState(null)
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)
  const [languageList] = useLanguage()

  const renderCategoryHeader = () => {
    if (category?.description || category?.price) {
      return <CategoryHeader category={category} />
    }
  }

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
      <>
        {renderCategoryHeader()}
        <ProductList
          loading={menuData.loadingProducts}
          error={menuData.error}
          component={Product}
          productList={getCategoryProducts(menuData.products, category._id)}
        />
      </>
    )
  }

  const onClickOnLanguageIcon =
    Object.keys(languageList).length > 1
      ? () => setShowLanguageSelector(true)
      : null

  return (
    <div>
      <LanguageModal
        showed={showLanguageSelector}
        hide={() => setShowLanguageSelector(false)}
      />
      <Header
        label={category?.name}
        category={category}
        setCategory={setCategory}
        showLanguageSelector={onClickOnLanguageIcon}
      />
      {renderItemList()}
    </div>
  )
}

export default Menu
