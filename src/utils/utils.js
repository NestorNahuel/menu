export const getCategoryProducts = (products, categoryId) =>
  products?.filter((product) => product.categories.includes(categoryId))

export const getProductAllergens = (allergens, product) =>
  allergens?.filter((allergen) => product.allergens.includes(allergen._id))
