import Allergen from './Allergen'
import PropTypes from 'prop-types'

const AllergenList = ({ list }) => (
  <div className='inline'>
    {list?.map((allergen) => (
      <Allergen key={allergen._id} allergen={allergen} />
    ))}
  </div>
)

AllergenList.propTypes = {
  list: PropTypes.array,
}

export default AllergenList
