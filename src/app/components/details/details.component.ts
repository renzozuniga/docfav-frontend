import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  game: Game;
  slideSelected: number = 0;
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) {}

  ngOnInit() {
    this.gameService
      .getGame(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.game = data;
      });
  }

  setSlide(index: number) {
    this.slideSelected = index;
  }
}
