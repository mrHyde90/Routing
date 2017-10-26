import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {AuthGuard} from './auth-guard.service';
//angular va a alcanzar este path when ever try to left this path
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolver} from './servers/server/server-resolver.service';

//the servers component and his childs are only accesible if authGuard return true
//puedes protejer solo a los child con el canActivateChild, recuerda ponerlo tambien en el service
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: "users", component: UsersComponent, children: [
    {path: ":id/:name", component: UserComponent}
  ]},
  {path: "servers",
   //canActivate: [AuthGuard] , 
   canActivateChild: [AuthGuard],
   component: ServersComponent, 
   children: [
    {path: ":id", component: ServerComponent, resolve: {server: ServerResolver}},
    {path: ":id/edit", component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
  ]},
  //{path: "not-found", component: PageNotFoundComponent},
  //el data son los datos que se le van a pasar a la ruta
  {path: "not-found", component: ErrorPageComponent, data: {message: 'message not found!'}},
  {path: "**", redirectTo: '/not-found'}
];

//el exports es para lo que quieres exportar d este modulo

@NgModule({
	imports:[
    	//RouterModule.forRoot(appRoutes, {useHash: true}) <- lo usas porque el server te puede cambiar la url
      //le dices que solo cambie lo que esta a la izquierda del hashtag
      RouterModule.forRoot(appRoutes)
	], 
	exports: [RouterModule]
})
export class AppRoutingModule{

}