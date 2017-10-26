import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router, Data} from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
  			  private route: ActivatedRoute,
  			  private router: Router) { }

  ngOnInit() {
    //remember in the data[] <- the string need to match with the name resolve in app-rounting-module
    //the data is reference to resolve
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data["server"];
      }
     );
  	/*const id = +this.route.snapshot.params["id"];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
    	(params: Params) =>{
    		this.server = this.serversService.getServer(+params["id"]);
    	}
    ); */
  }

  onEdit(){
  	//this.router.navigate(['/servers', this.server.id , "edit"]);
  	//usa mejor un relative route
  	//->
  	//queryParamsHandling sirve para preservar la ruta que tenemos cuando pasamos ala siguiente
  	this.router.navigate(["edit"], {relativeTo: this.route, queryParamsHandling: 'preserve' } );
  }
}
