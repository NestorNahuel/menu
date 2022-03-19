import { EMPTY_GROUP_KEY } from './constants'

export const getCategoryProducts = (products, categoryId) =>
  products?.filter((product) => product.categories.includes(categoryId))

export const getProductAllergens = (allergens, product) =>
  allergens?.filter((allergen) => product.allergens.includes(allergen._id))

export const groupListByKey = (list, groupBy) =>
  list.reduce((group, item) => {
    const key = item[groupBy] || EMPTY_GROUP_KEY
    group[key] = group[key] || []
    group[key].push(item)
    return group
  }, {})

export const orderByField = (data, orderBy) => {
  if (orderBy && data?.length) {
    return data.sort((a, b) => {
      const first = (a && a[orderBy]) || ''
      const second = (b && b[orderBy]) || ''
      const result = first - second
      if (result) {
        return result
      }
      if (first < second) {
        return -1
      }
      if (first > second) {
        return 1
      }
      return 0
    })
  }
  return data
}
