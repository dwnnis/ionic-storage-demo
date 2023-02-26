import { Component } from '@angular/core';
import { TasklistService } from '../tasklist.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  task:String = "";

  constructor(private service: TasklistService, private navCtrl:NavController) {}

  ngOnInit() {

  }

  addItem(task:String) {
    // TasklistService.allTaskList.push(task);
    this.service.addTasks(this.task);
    alert('Task Added Successfully');
    console.log(this.task);
    this.task = "";
  }

  goToListPage() {
    this.navCtrl.navigateForward('/list');
  }
}
