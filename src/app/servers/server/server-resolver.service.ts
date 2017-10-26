import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

import {ServersService} from '../servers.service';

interface Server {
	id: number;
	name: string;
	status: string;
}

//Este guard sirve para cargar datos a la ruta antes de que se renderize
//otra opcion es cargar datos al ngOnInit

//el Resolve<> contiene los datos que queremos agarrar antes de que se carge la ruta
@Injectable()
export class ServerResolver implements Resolve<Server> {
	constructor(private serversService: ServersService){}
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> |
		Promise<Server> | Server {
			//fijate que esto se carga al mismo tiempo que la ruta se reenderiza
			//es decir que tienes la ruta actualizada
			//->
			//te regresa un server object
			return this.serversService.getServer(+route.params["id"]);
		}
	
}