import {Observable} from 'rxjs/Observable';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

export interface CanComponentDeactivate{
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
//el canDeactivate se activa cuando tratas de salir de la ruta, cuando desactivas la ruta donde estas
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
	
	//este es el metodo que angular va a llamar cuando el usuario trate de dejar la ruta
	canDeactivate(component: CanComponentDeactivate,
				  currentRoute: ActivatedRouteSnapshot,
				  currentState: RouterStateSnapshot,
				  nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
	{
		//angular necesita esta interface ya que es en donde estara la logica
		//adecuenta que hace el bind o la conexion del componente y el guard
		return component.canDeactivate();
	}
}