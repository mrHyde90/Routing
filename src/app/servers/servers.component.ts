import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {Router, ActivatedRoute} from '@angular/router';
//ActivatedRoute the permite obtener la ruta en la que te ecneuntras

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, 
  			  private router: Router, 
  			  private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
  	//ponerle como ruta relativa no lanza ningun error, porque sabe donde se encuentra
  	//pero si configuras la ruta relativaTo a la ruta donde te encuentras si lanzara un error
  	//porque busvara por servers/servers
  	//this.router.navigate(["servers"], {relativeTo: this.route});
  }

}
