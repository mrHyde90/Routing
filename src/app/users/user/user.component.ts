import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
//este paquete no viene con angular pero sirve para hacer las subscription, contiene el observable
//la subscripcion no esta atada al componente, siempre vive en memoria
//angular es el que se encarga de limpiarla
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  //retrieva the values inside the actual URL using ActiveRouted
  //angular si estas en la misma ruta y tratas de recgar la misma ruta con otros valores con routerLink
  //no te actualizaras los valores con los nuevos
  //porque no refresh the page
  //snapshot es bueno para las primeras inicializaciones
  ngOnInit() {
  	this.user = {
  		id: this.route.snapshot.params["id"],
  		name: this.route.snapshot.params["name"]
  	};
  	//usarlo cuando necesitas recargar la misma pagina dentro de la pagina
  	//usa un observable, es otro paquete que no pertenece a angular
  	//el observable espera hasta que se ejecute una funcion en este caso hasta que cambien los parametros
  	//cuando se cambien los parametros se activara y ejecutara el codigo dentro
  	//el params son los parametros de la url
  	this.paramsSubscription = this.route.params
  	.subscribe(
  		(params: Params) => {
  			this.user.id = params['id'];
  			this.user.name = params['name'];
  		}
  	);
  }
  //cada vez que el componente es destruido angular limpia la subscription
  ngOnDestroy(){
  	this.paramsSubscription.unsubscribe();
  }

}
