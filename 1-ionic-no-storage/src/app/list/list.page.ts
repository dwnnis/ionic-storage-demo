import { Component, OnInit } from '@angular/core';
import { TasklistService } from '../tasklist.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list:String[]

  constructor(private service: TasklistService, private navCtrl:NavController) {
    // this.list = TasklistService.allTaskList;
    // console.log(TasklistService.allTaskList);
    this.list = this.service.getTasks();
  }

  ngOnInit() {}

  delete(task:String){
    let check = confirm("Are you sure you want to clear this item?");
    if (check === true) {
      this.service.delete(task);
      this.list = this.service.getTasks();
    }
  }

  goBack() {
    this.navCtrl.back();
  }

}
