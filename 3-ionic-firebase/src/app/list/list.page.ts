import { Component, OnInit } from '@angular/core';
import { TasklistService } from '../tasklist.service';
import { NavController } from '@ionic/angular';
import { Preferences, SetOptions, GetOptions, RemoveOptions, KeysResult } from '@capacitor/preferences';
import { Task } from 'src/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  // list:string[] = [];
  tasks: any = [];
  taskObj: Task = {
    id: '',
    task: ''
  }

  constructor(private service: TasklistService, private navCtrl:NavController) {
    // this.list = TasklistService.allTaskList;
    // console.log(TasklistService.allTaskList);
    
    // this.list = this.service.getTasks();
    // this.list = [];
    // this.service.allKeysList.subscribe((result) => {
    //   this.list = result;
    // })
    
  }

  ngOnInit() {
    // this.getKeys();
    this.getAllTasks();
  }

  getAllTasks() {
    this.service.getTasks().subscribe((res: Task[]) => {
      console.log(res);
      this.tasks = res;
    })
  }

  deleteTask(task: Task) {
    let check = confirm("Are you sure you want to clear this item?");
    if (check === true) {
      this.service.deleteTask(task);
    }
  }

  // getKeys() {
  //   this.service.getKeys().then((res) => {
  //     // console.log(res);
  //   });
  // }

  // delete(key:string){
  //   this.service.deleteTask(key);
  //   this.getKeys();
  // }

  goBack() {
    this.navCtrl.back();
  }

}
