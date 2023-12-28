import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from './services/game-service.service';

@NgModule({
  declarations: [AppComponent, ListComponent, DetailsComponent, FilterPipe],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
