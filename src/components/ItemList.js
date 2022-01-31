import React from 'react'
import PropTypes from 'prop-types'

const ItemList = ({ component: Component, list, loading, error, onClick }) => {
  // Show loading spinner
  if (loading) {
    return <p>loading...</p>
  }

  // Show no data message when the list is empty
  if (!list?.length && !error) {
    return <p>No data.</p>
  }

  // Render the list if Items
  if (!!list?.length && !error) {
    return list.map((item, index) => (
      <Component key={index} item={item} onClick={onClick} />
    ))
  }

  // Show error message
  return <p>There was an error.</p>
}

ItemList.propTypes = {
  component: PropTypes.any,
  list: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  onClick: PropTypes.func,
}

export default ItemList
