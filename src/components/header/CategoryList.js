import React from 'react'
import Category from './Category'
import PropTypes from 'prop-types'

const CategoryList = ({ list, selected, setCategory }) => {
  const renderCategory = (category) => (
    <Category
      key={category._id}
      categoryName={category.name}
      selected={selected === category._id}
      onClick={() => setCategory(category)}
    />
  )

  return (
    <div hidden={!selected} className='container-fluid overflow-auto'>
      <div className='row btn-group flex-row flex-nowrap inline'>
        {list?.map(renderCategory)}
      </div>
    </div>
  )
}

CategoryList.propTypes = {
  list: PropTypes.array,
  selected: PropTypes.string,
  setCategory: PropTypes.func,
}

export default CategoryList
