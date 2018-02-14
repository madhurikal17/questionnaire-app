import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {AppService} from './app.service';

/*export const routes: Routes =[
  {
    path: "assessment",
    component: AppComponent
  }
]*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
   // RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
