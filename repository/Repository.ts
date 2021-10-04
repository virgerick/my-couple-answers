
import firebase from "../firebase";

export class Repository<T> {
    private _collectionRef;
   
    constructor(collection:string) {
        this._collectionRef=firebase?.firestore().collection(collection);
        
    }
    get = async():Promise<Array<T>> => {
        const result =await this._collectionRef.get();
        const data =await  result.docs.map(x=>x.data() as T);
        return data;        
    }
    getById = async(id:string):Promise<T> => {
        const result =await this._collectionRef.doc(id).get();
        const data =await  result.data() as T;
        return data;
        
    }
    
    
}