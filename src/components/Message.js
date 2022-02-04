import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ message }) => (
  <div className='px-3'>
    <p>{message}</p>
  </div>
)

Message.propTypes = {
  message: PropTypes.string,
}

export default Message
