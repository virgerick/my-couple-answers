import firebase, { db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  FieldPath,
  WhereFilterOp,
  setDoc,
  updateDoc
} from "firebase/firestore/lite";
import { queryEqual } from "@firebase/firestore";

export class Repository<T> {
  private _collectionRef;

  constructor(collectioName: string) {
    this._collectionRef = collection(db, collectioName);
  }
  getAsync = async (): Promise<Array<T>> => {
    const result = await getDocs(this._collectionRef);
    const data = await result.docs.map((x: any) => x.data() as T);
    return data;
  };

  getByIdAsync = async (id: string): Promise<T> => {
    const result = await getDoc(doc(this._collectionRef, id));
    const data = (await result.data()) as T;
    return data;
  };
  getWhere = async (
    fieldPath: string | FieldPath,
    opStr: WhereFilterOp,
    value: any
  ): Promise<Array<T>> => {
    const q = await query(this._collectionRef, where(fieldPath, opStr, value));
    const querySnapshot = await getDocs(q);
    const data: T[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data() as T);
    });

    return data;
  };
  insertAsync = async (model: T): Promise<void> => {
    await addDoc(this._collectionRef, model);
  };
  insertOrUpdateAsync = async (id: string, model: T): Promise<void> => {
    await setDoc(doc(this._collectionRef, id), model);
  };
  updateAsync = async (id: string, model: T) => {
    await updateDoc(doc(this._collectionRef, id), model);
  };
  deleteAsync = async (id: string): Promise<void> => {
    await deleteDoc(doc(this._collectionRef,id));
  };
}
