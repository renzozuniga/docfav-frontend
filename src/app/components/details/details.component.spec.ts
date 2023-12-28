import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { GameService } from 'src/app/services/game-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { routing } from 'src/app/app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const game = {
  id: 540,
  title: 'Overwatch 2',
  thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
  status: 'Live',
  short_description:
    'A hero-focused first-person team shooter from Blizzard Entertainment.',
  description:
    'The tale of the hero organization Overwatch continues in Overwatch 2. This new take on the popular team shooter changes up things a little with five-man teams, redefined classes, and new playable characters. With the adjustment to 5v5, players now have more individual impact than in the previous game.\r\n\r\nChallenge yourself in all-new modes. Take control of a robot with your team in Push and take it to the enemy base before the enemy can take it from you. Explore all new areas, including iconic real-world cities such as New York, Rome, Monte Carlo, Toronto, and more.\r\n\r\nOverwatch 2 features an update schedule that drops new content every nine weeks. It also boasts a regular battle pass \u2013 both free and premium. This is where some of the game\u2019s characters will be obtained.',
  game_url: 'https://www.freetogame.com/open/overwatch-2',
  genre: 'Shooter',
  platform: 'Windows',
  publisher: 'Activision Blizzard',
  developer: 'Blizzard Entertainment',
  release_date: '2022-10-04',
  freetogame_profile_url: 'https://www.freetogame.com/overwatch-2',
  minimum_system_requirements: {
    os: 'Windows 10 64-bit',
    processor: 'Intel Core i3 or AMD Phenom X3 8650',
    memory: '6 GB',
    graphics: 'NVIDIA GeForce GTX 600 series or AMD Radeon HD 7000 series',
    storage: '50 GB',
  },
  screenshots: [
    {
      id: 1334,
      image: 'https://www.freetogame.com/g/540/overwatch-2-1.jpg',
    },
    {
      id: 1335,
      image: 'https://www.freetogame.com/g/540/overwatch-2-2.jpg',
    },
    {
      id: 1336,
      image: 'https://www.freetogame.com/g/540/overwatch-2-3.jpg',
    },
  ],
};

describe('DetailsComponent', () => {
  let comp: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let mockGameService;
  beforeEach(async () => {
    mockGameService = jasmine.createSpyObj(['getGame']);
    mockGameService.getGame.and.returnValue(game);

    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
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
        fixture = TestBed.createComponent(DetailsComponent);
        comp = fixture.componentInstance;
      });
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should have release date', () => {
    fixture.detectChanges();
    el = fixture.debugElement.queryAll(By.css('p'))[0].nativeElement;

    expect(el).toBeTruthy();
    expect(el.textContent).toContain('RELEASE DATE');
  });

  it('should have developer', () => {
    fixture.detectChanges();
    el = fixture.debugElement.queryAll(By.css('p'))[2].nativeElement;

    expect(el).toBeTruthy();
    expect(el.textContent).toContain('DEVELOPER');
  });

  it('should have publisher', () => {
    fixture.detectChanges();
    el = fixture.debugElement.queryAll(By.css('p'))[4].nativeElement;

    expect(el).toBeTruthy();
    expect(el.textContent).toContain('PUBLISHER');
  });

  it('should have about', () => {
    fixture.detectChanges();
    el = fixture.debugElement.queryAll(By.css('h3'))[0].nativeElement;

    expect(el).toBeTruthy();
    expect(el.textContent).toContain('About this game');
  });

  it('should have requirements', () => {
    fixture.detectChanges();
    el = fixture.debugElement.queryAll(By.css('h3'))[1].nativeElement;

    expect(el).toBeTruthy();
    expect(el.textContent).toContain('System requirements');
  });

  it('should have OS', () => {
    fixture.detectChanges();
    el = fixture.debugElement.queryAll(By.css('th'))[0].nativeElement;

    expect(el).toBeTruthy();
    expect(el.textContent).toContain('OS');
  });

  it('should have PROCESSOR', () => {
    fixture.detectChanges();
    el = fixture.debugElement.queryAll(By.css('th'))[1].nativeElement;

    expect(el).toBeTruthy();
    expect(el.textContent).toContain('PROCESSOR');
  });

  it('should have MEMORY', () => {
    fixture.detectChanges();
    el = fixture.debugElement.queryAll(By.css('th'))[2].nativeElement;

    expect(el).toBeTruthy();
    expect(el.textContent).toContain('MEMORY');
  });

  it('should have GRAPHICS', () => {
    fixture.detectChanges();
    el = fixture.debugElement.queryAll(By.css('th'))[3].nativeElement;

    expect(el).toBeTruthy();
    expect(el.textContent).toContain('GRAPHICS');
  });

  it('should have STORAGE', () => {
    fixture.detectChanges();
    el = fixture.debugElement.queryAll(By.css('th'))[4].nativeElement;

    expect(el).toBeTruthy();
    expect(el.textContent).toContain('STORAGE');
  });
});
