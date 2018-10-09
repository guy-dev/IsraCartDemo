import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BookmarksComponent } from './bookmarks/bookmarks.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    ButtonsModule,
    GridModule,
    BrowserAnimationsModule,
    ScrollViewModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'bookmarks', component: BookmarksComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
