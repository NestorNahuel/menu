import React from 'react'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import Message from './Message'
import FadeIn from 'react-fade-in'

const ItemList = ({ component: Component, list, loading, error, ...props }) => {
  // Show loading spinner
  if (loading) {
    return <Spinner />
  }

  // Show no data message when the list is empty
  if (!list?.length && !error) {
    return <Message message={'There are not items to show'} />
  }

  // Render the list if Items
  if (!!list?.length && !error) {
    const render = () =>
      list.map((item, index) => (
        <Component key={index} item={item} {...props} />
      ))
    return <FadeIn>{render()}</FadeIn>
  }

  // Show error message
  return <Message message={'There was an error'} />
}

ItemList.propTypes = {
  component: PropTypes.any,
  list: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  onClick: PropTypes.func,
}

export default ItemList
