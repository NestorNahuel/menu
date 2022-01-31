import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection } from 'firebase/firestore'

const useQueryData = (collectionName, firestore) => {
  const query = useFirestoreQueryData(
    [collectionName],
    collection(firestore, collectionName),
    { idField: '_id' }
  )

  return { ...query }
}

export default useQueryData
