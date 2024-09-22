import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  constructor(public navCtrl : NavController,public alertController: AlertController) {}

  ngOnInit() {
  }
  
salir(){this.navCtrl.navigateRoot('login');};

 async mensaje(){const alert = await this.alertController.create({
  header: 'No funcional',
  message: 'Por el momento no se encuentra disponible esta opcion',
  buttons: ['Aceptar'],
});
await alert.present();}

name(){
  var usuarioString = localStorage.getItem('usuario');
  if (usuarioString !== null) {
    var usuario = JSON.parse(usuarioString);
    return usuario.nombre;
  } else {
    // Manejo de caso cuando no se encuentra el valor en localStorage
  }}

}
