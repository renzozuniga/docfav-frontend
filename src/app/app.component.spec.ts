import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameService } from './services/game-service.service';

describe('AppComponent', () => {
  const routes: Routes = [
    { path: '', redirectTo: 'games', pathMatch: 'full' },
    { path: 'games', component: ListComponent },
    { path: 'games/:id', component: DetailsComponent },
  ];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, ListComponent, DetailsComponent, FilterPipe],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        routing,
        BrowserAnimationsModule,
        RouterTestingModule,
      ],
      providers: [GameService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'docfav-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('docfav-frontend');
  });
});
