import firebase from "../firebase";

export class Repository<T> {
  private _collectionRef;

  constructor(collection: string) {
    this._collectionRef = firebase?.firestore().collection(collection);
  }
  getAsync = async (): Promise<Array<T>> => {
    const result = await this._collectionRef.get();
    const data = await result.docs.map((x) => x.data() as T);
    return data;
  };

  getByIdAsync = async (id: string): Promise<T> => {
    const result = await this._collectionRef.doc(id).get();
    const data = (await result.data()) as T;
    return data;
  };
  getWhere = async (
    fieldPath: string | firebase.firestore.FieldPath,
    opStr: firebase.firestore.WhereFilterOp,
    value: any 
  ): Promise<Array<T>> => {
    const result = await this._collectionRef
      .where(fieldPath, opStr, value)
      .get();
    const data = await result.docs.map((x) => x.data() as T);
    return data;
  };
  insertAsync = async (model: T): Promise<void> => {
    await this._collectionRef.doc().set(model);
  };
  insertOrUpdateAsync = async (id: string, model: T): Promise<void> => {
    await this._collectionRef.doc(id).set(model);
  };
  updateAsync = async (id: string, model: T) => {
    await this._collectionRef.doc(id).update(model);
  };
  deleteAsync = async (id: string): Promise<void> => {
    await this._collectionRef.doc(id).delete();
  };
}
