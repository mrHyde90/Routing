import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';

import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import {ServerResolver} from './servers/server/server-resolver.service';
//con el users/:id le decimos que cargaremos un componente de manera dinamica
//sin el : le dices que cargaras el id pagina y es estatica
//tambien es interpretada como una unknowk route
//->
//el server-outlet solo sirve para rutas en el top level como users and serves y home, no anidadas
//->
//recuerda siempre tener al ** hasta abajo sino lo tienes arriba entonces tus demas rutas no serviran
//-> checa eso
//{ path: '', redirectTo: '/somewhere-else', pathMatch: 'full' } 

//forRoot() es para registrar las rutas
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
