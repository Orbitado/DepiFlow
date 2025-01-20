import {
    doc,
    getDoc,
    getDocs,
    collection,
    updateDoc,
    deleteDoc,
    addDoc,
    query,
    where,
    getFirestore,
} from 'firebase/firestore';
import { FirebaseApp } from './firebaseConfig';

export const FirestoreDb = getFirestore(FirebaseApp);

// deben actualizarse los tipos de los parametros, dado que son genericos.

export const createDocument = async (
    collectionName: string,
    data: Record<string, <T>(value: T) => T>
) => {
    console.log(`Creating document in collection: ${collectionName}`);
    const collectionRef = collection(FirestoreDb, collectionName);
    const docRef = await addDoc(collectionRef, data);
    console.log(`Document created with ID: ${docRef.id}`);
    return docRef.id;
};

export const readDocument = async (collectionName: string, id: string) => {
    console.log(`Reading document with ID: ${id} from collection: ${collectionName}`);
    const docRef = doc(FirestoreDb, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log(`Document data:`, docSnap.data());
    } else {
        console.log(`No such document!`);
    }
    return docSnap.data();
};

export const updateDocument = async (
    collectionName: string,
    id: string,
    data: Record<string, <T>(value: T) => T>
) => {
    console.log(`Updating document with ID: ${id} in collection: ${collectionName}`);
    const docRef = doc(FirestoreDb, collectionName, id);
    await updateDoc(docRef, data);
    console.log(`Document updated`);
};

export const deleteDocument = async (collectionName: string, id: string) => {
    console.log(`Deleting document with ID: ${id} from collection: ${collectionName}`);
    const docRef = doc(FirestoreDb, collectionName, id);
    await deleteDoc(docRef);
    console.log(`Document deleted`);
};

export const readCollection = async (collectionName: string) => {
    console.log(`Reading collection: ${collectionName}`);
    const collectionRef = collection(FirestoreDb, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    console.log(
        `Collection data:`,
        querySnapshot.docs.map((doc) => doc.data())
    );
    return querySnapshot.docs.map((doc) => doc.data());
};

export const readCollectionWhere = async (collectionName: string, field: string, value: string) => {
    console.log(`Querying collection: ${collectionName} where ${field} == ${value}`);
    const collectionRef = collection(FirestoreDb, collectionName);
    const q = query(collectionRef, where(field, '==', value));
    const querySnapshot = await getDocs(q);
    console.log(
        `Query result:`,
        querySnapshot.docs.map((doc) => doc.data())
    );
    return querySnapshot.docs.map((doc) => doc.data());
};
