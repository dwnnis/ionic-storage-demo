import { Component, OnInit } from '@angular/core';
import { TasklistService } from '../tasklist.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list:string[] = [];

  constructor(private service: TasklistService, private navCtrl:NavController) {
    this.list = [];
    this.service.allKeysList.subscribe((result) => {
      this.list = result;
    })
    
  }

  ngOnInit() {
    this.getKeys();
  }

  getKeys() {
    this.service.getKeys().then((res) => {
      console.log(res);
    });
  }

  delete(key:string){
    let check = confirm("Are you sure you want to clear this item?");
    if (check === true) {
      this.service.deleteTask(key);
      this.getKeys();
    }
  }

  goBack() {
    this.navCtrl.back();
  }

}
