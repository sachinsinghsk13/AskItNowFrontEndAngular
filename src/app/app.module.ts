import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    QuestionsListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    AuthorizationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
