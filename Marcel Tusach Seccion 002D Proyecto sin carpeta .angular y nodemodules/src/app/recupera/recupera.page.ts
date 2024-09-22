import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-recupera',
  templateUrl: './recupera.page.html',
  styleUrls: ['./recupera.page.scss'],
})
export class RecuperaPage implements OnInit {

  recuperacion: FormGroup;
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl : NavController
  ) { 
    this.recuperacion = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'rut' : new FormControl("",Validators.required),
      'gmail' : new FormControl ("",Validators.required)
    })

}


  ngOnInit() {
  }

  async recuperar() {
    var f = this.recuperacion.value;
    var usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
      if (usuario.nombre == f.nombre && usuario.rut == f.rut && usuario.gmail == f.gmail) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.navCtrl.navigateRoot('inicio');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos No existentes',
          message: 'Su nombre no aparece en los registros',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } else {
      // Manejo de caso cuando no se encuentra el valor en localStorage
    }
  }


}
