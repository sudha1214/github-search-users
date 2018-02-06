import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { GithubListComponent } from './github-list/github-list.component';
import { UserComponentComponent } from './user-component/user-component.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubListComponent,
    UserComponentComponent
    ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
