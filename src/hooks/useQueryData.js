import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection } from 'firebase/firestore'
import { orderByField } from '../utils/utils'

const useQueryData = (collectionName, firestore, orderBy) => {
  const query = useFirestoreQueryData(
    [collectionName],
    collection(firestore, collectionName),
    { idField: '_id' }
  )

  return { ...query, data: orderByField(query.data, orderBy) }
}

export default useQueryData
