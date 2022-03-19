import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection } from 'firebase/firestore'
import { orderByField } from '../utils/utils'

const useQueryData = (collectionName, firestore, orderByFunction) => {
  const query = useFirestoreQueryData(
    [collectionName],
    collection(firestore, collectionName),
    { idField: '_id' }
  )

  return { ...query, data: orderByField(query.data, orderByFunction) }
}

export default useQueryData
