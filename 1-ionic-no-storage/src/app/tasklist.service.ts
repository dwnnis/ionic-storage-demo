import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {

  private allTaskList:String[] = [];

  constructor() { }

  addTasks(task:String){
    this.allTaskList.push(task);
  }

  getTasks(){
    return this.allTaskList.slice();
  }

  delete(task:String){
    this.allTaskList = this.allTaskList.filter((item) => item !== task)
  }
}
