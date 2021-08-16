import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController, } from '@ionic/angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
myStatus:string = "undefined";
  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
    this.storage.get("status")
    .then((data)=>{
      this.myStatus=data;
    })
    .catch()
  }
  
UpdateStatus(){
  this.storage.set('status',this.myStatus)
  .then(()=>{
    this.navCtrl.navigateBack('/home'); 
  })
  .catch();
}
}

