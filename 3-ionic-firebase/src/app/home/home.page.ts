import { Component } from '@angular/core';
import { TasklistService } from '../tasklist.service';
import { NavController } from '@ionic/angular';
import { Task } from 'src/task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  task:string = "";
  taskObj: Task = {
    id: '',
    task: ''
  }

  constructor(private service: TasklistService, private navCtrl:NavController) {}

  ngOnInit() {}

  addTask() {
    const value = this.task;
    console.log(value);

    this.taskObj.id = '';
    this.taskObj.task = value;

    this.service.addTask(this.taskObj).then((task) => {
      if (task) {
        alert('Task Added Successfully');
        this.task = "";
      }
    })
  }

  // addItem(task:string) {
  //   // TasklistService.allTaskList.push(task);
  //   this.service.addTask(this.task);
  //   console.log(this.task);
  //   console.log(this.service.getKeys());
  //   this.task = "";
  // }

  goToListPage() {
    this.navCtrl.navigateForward('/list');
  }
}
