import { EventEmitter, Injectable, Output } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Preferences, SetOptions, GetOptions, RemoveOptions, KeysResult } from '@capacitor/preferences';
import { Observable } from 'rxjs';
import { Task } from 'src/task';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {

  list:string[] = [];

  constructor(private afs: Firestore) { }

  addTask(task: Task) {
    task.id = doc(collection(this.afs, 'id')).id;
    return addDoc(collection(this.afs, 'Tasks'), task);
  }

  getTasks(): Observable<Task[]> {
    let tasksRef = collection(this.afs, 'Tasks');
    return collectionData(tasksRef, {idField: 'id'}) as Observable<Task[]>
  }

  deleteTask(task: Task) {
    let docRef = doc(this.afs, `Tasks/${task.id}`);
    return deleteDoc(docRef)
  }

  // getKeys = async () => {
  //   await Preferences.keys().then((keys) => {
  //     this.allKeysList.emit(keys.keys);
  //     this.list = keys.keys;
  //     return keys;
  //   })
  // }

  // getValue = async (key:string) =>  {
  //   let options:GetOptions = {
  //     key: key
  //   }
  //   await Preferences.get(options).then((val) => {
  //     // console.log(val.value);
  //     return val.value
  //   })
  // }

  // getValueList = async () => {
  //   let valueList:string[] = [];
  //   for (let i in this.allKeysList) {
  //     // console.log(this.allKeysList);
  //     let options:GetOptions = {
  //       key: i
  //     }
  //     await Preferences.get(options).then((val) => {
  //       // console.log(i);
  //       // console.log(val.value);
  //       if (val.value != null) {
  //         valueList.push(val.value);
  //       }
  //       // console.log(valueList);
  //       this.allValuesList.emit(valueList);
  //     })

  //     this.getValue(i).then((result)=>{
  //       // console.log(result);
  //       // valueList.push(result);
  //     }); 
  //   }
    

  // }

  // deleteTask = async (key:string) => {
  //   let options: RemoveOptions = {
  //     key: key
  //   };
  //   await Preferences.remove(options).then(() => {
  //     // console.log("deleted");
  //   })
  // }

  // addTask = async (task:string) => {
  //   let taskTimeID = (Date.now()).toString();
  //   let options: SetOptions = {
  //     key: task,
  //     value: taskTimeID
  //   };
  //   await Preferences.set(options).then(()=> {
  //     // console.log("set new task: " + task);
  //   })
  // }
}
