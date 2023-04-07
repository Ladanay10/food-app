import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { dataBase } from '../firebase';

const useGetData = (collectionName, searchValue) => {

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const collectionRef = collection(dataBase, collectionName)
	useEffect(() => {
		const getData = async () => {
			await onSnapshot(collectionRef, (snapshot) => {
				setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
				setLoading(false);
			})
		}
		getData()
	}, [collectionRef])
	return {
		data, loading
	}

}
export default useGetData;