import Menu from '../components/Menu'
import { firestore } from '../firebase/firebase'
import useQueryData from '../hooks/useQueryData'
import { COLL_ALLERGEN, COLL_CATEGORY, COLL_PRODUCT } from '../utils/constants'

/**
 * Dos variables flag de loading, productos/alergenos y categorias
 * Primero hacer la llamada para categorias para poder mostrar el menu
 * de categorias antes de terminar de cargar los productos y alergenos
 */

const HardcodedData = {
  allergens: [
    {
      name: 'Huevos',
      image:
        'https://ingenieriademenu.com/wp-content/uploads/2020/11/huevos-alergenos-alimentarios-icono.png',
      _id: 'GaHK2ETnkW4pu7tFmc2K',
    },
    {
      name: 'Pescado',
      image:
        'https://ingenieriademenu.com/wp-content/uploads/2020/11/pescado-alergenos-alimentarios-icono.png',
      _id: 'N46um0cjjFeUCnCHFOVE',
    },
    {
      name: 'Lácteos',
      image:
        'https://ingenieriademenu.com/wp-content/uploads/2020/11/lacteos-alergenos-alimentarios-icono.png',
      _id: 'igfJLa40VX4qYZmppbAU',
    },
    {
      image:
        'https://ingenieriademenu.com/wp-content/uploads/2020/11/gluten-alergenos-alimentarios-icono.png',
      name: 'Gluten',
      _id: 'ipTMA2xRSBzfbA54ds3b',
    },
  ],
  categories: [
    {
      name: 'Ensaladas',
      image:
        'https://estaticos.miarevista.es/media/cache/760x570_thumb/uploads/images/recipe/5d1de76b5bafe804b488438c/ensaladamediterranea-int.jpg',
      _id: '4K4T3ugnZkZWrheX6G3r',
    },
  ],
  products: [
    {
      image:
        'https://www.recetasderechupete.com/wp-content/uploads/2020/10/Ensalada-Cesar-final_.jpg',
      allergens: [
        'GaHK2ETnkW4pu7tFmc2K',
        'igfJLa40VX4qYZmppbAU',
        'ipTMA2xRSBzfbA54ds3b',
      ],
      categories: ['4K4T3ugnZkZWrheX6G3r'],
      name: 'ENSALADA CÉSAR',
      _id: 'YHXcfzMZomzJwwA5ThFg',
    },
    {
      name: 'ENSALADA MEDITERRÁNEA CLÁSICA',
      categories: ['4K4T3ugnZkZWrheX6G3r'],
      allergens: ['N46um0cjjFeUCnCHFOVE', 'GaHK2ETnkW4pu7tFmc2K'],
      image:
        'https://estaticos.miarevista.es/media/cache/760x570_thumb/uploads/images/recipe/5d1de76b5bafe804b488438c/ensaladamediterranea-int.jpg',
      _id: 'uo70QL7bnpNjhOZCWBAJ',
    },
  ],
}

const MenuContainer = () => {
  if (!HardcodedData) {
    const productsQuery = useQueryData(COLL_PRODUCT, firestore)
    const categoriesQuery = useQueryData(COLL_CATEGORY, firestore)
    const allergensQuery = useQueryData(COLL_ALLERGEN, firestore)

    productsQuery.isSuccess && console.log(productsQuery.data)
    categoriesQuery.isSuccess && console.log(categoriesQuery.data)
    allergensQuery.isSuccess && console.log(allergensQuery.data)
  }

  return <Menu data={HardcodedData} />
}

export default MenuContainer
