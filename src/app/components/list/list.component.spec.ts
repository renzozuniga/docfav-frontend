import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { GameService } from 'src/app/services/game-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { routing } from 'src/app/app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

describe('ListComponent', () => {
  let comp: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, FilterPipe],
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
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ListComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should have as filter title', () => {
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('label[for=title]')).nativeElement;

    expect(el).toBeTruthy();
    expect(el.textContent).toBe('Title');
  });

  it('should have as filter platform', () => {
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('label[for=platform]')).nativeElement;

    expect(el).toBeTruthy();
    expect(el.textContent).toBe('Platform');
  });

  it('should have as filter genre', () => {
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('label[for=genre]')).nativeElement;

    expect(el).toBeTruthy();
    expect(el.textContent).toBe('Genre');
  });
});
