import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, Input } from '@ionic/angular';
import {AlertController} from '@ionic/angular';
import { element } from '@angular/core/src/render3';
import { async } from '@angular/core/testing';
import { variable } from '@angular/compiler/src/output/output_ast';
import { createElement } from '@angular/core/src/view/element';

let newa = document.createElement('ion-card');
let counter = 0;
counter ++;
newa.setAttribute('id', 'counter' )
let num = newa.id;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html', 
  styleUrls: ['./modal.page.scss'],
})


export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController,
              private navParams: NavParams, 
              private alertCtrl: AlertController,) { }

            
             
  ngOnInit() {
    let myValue = this.navParams.get("value");
    console.log(myValue);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  
  async presentAlert() {
    let add = document.getElementById('add');
    let newa = document.createElement('ion-card');
    
    const alert = await this.alertCtrl.create({
      header: 'Add Homework',
      subHeader: 'Which homework are you working on?',
      inputs: [{
        id: 'input1',
        type: 'text',
        placeholder: "Type Here",
        
      }],
      buttons: [{
        text: 'Cancel',
        handler: data => {
          console.log('canceled')
        }
      },
      {
      
        text: 'Add',
        handler: data =>{
          let input1 = <HTMLInputElement>document.getElementById('input1');
          let work = input1.value;
          console.log (work);
          newa.innerText = work;
          add.appendChild(newa);
          newa.onclick  = (async) => this.classFunction1();
          
        }
      }
    ]
    })
    alert.onDidDismiss().then( () => {
      console.log('stuff is dismissed');
    })
   
    await alert.present();
  }
  
    classFunction() {
      console.log('test');
      this.presentAlert();

    }

    async presentAlert1() {
    
      
      const alert = await this.alertCtrl.create({
        header: 'Move homework to doing.',
        message: 'Are you sure?',
        buttons: [
          {
          text: 'Cancel',
          handler: data => {
            console.log('canceled')
          }
        }, {
          text: 'Yes',
          handler: data =>{
            console.log ('YES');
          }
        }
      ]})
      alert.onDidDismiss().then( () => {
        console.log('stuff is dismissed');
      })

      await alert.present();
    }

     async classFunction1() {
      console.log('test');
      this.presentAlert1();
      document.getElementById('there').appendChild(document.getElementById('counter'));
    }




        
     
}


