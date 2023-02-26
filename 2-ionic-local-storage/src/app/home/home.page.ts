import { Component } from '@angular/core';
import { TasklistService } from '../tasklist.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  task:string = "";

  constructor(private service: TasklistService, private navCtrl:NavController) {}

  ngOnInit() {}

  addItem(task:string) {
    // TasklistService.allTaskList.push(task);
    this.service.addTask(this.task).then(() => {
      alert('Task Added Successfully')
      this.task = "";
    });
  }

  goToListPage() {
    this.navCtrl.navigateForward('/list');
  }
}
