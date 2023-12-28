import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  games: Game[];
  platforms: string[] = ['', 'pc', 'browser', 'all'];
  genres: string[] = [
    '',
    'mmorpg',
    'shooter',
    'strategy',
    'moba',
    'racing',
    'sports',
    'social',
    'sandbox',
    'open-world',
    'survival',
    'pvp',
    'pve',
    'pixel',
    'voxel',
    'zombie',
    'turn-based',
    'first-person',
    'third-Person',
    'top-down',
    'tank',
    'space',
    'sailing',
    'side-scroller',
    'superhero',
    'permadeath',
    'card',
    'battle-royale',
    'mmo',
    'mmofps',
    'mmotps',
    '3d',
    '2d',
    'anime',
    'fantasy',
    'sci-fi',
    'fighting',
    'action-rpg',
    'action',
    'military',
    'martial-arts',
    'flight',
    'low-spec',
    'tower-defense',
    'horror',
    'mmorts',
  ];
  searchText: string = '';
  platformSelected: any;
  genreSelected: any;

  constructor(
    private router: Router,
    private gameService: GameService
  ) {}

  ngOnInit() {
    this.gameService.getGames().subscribe((data) => {
      this.games = data;
    });
  }

  updateSelectValue(selected: string, type: string) {
    if (type === 'platform') {
      this.platformSelected = selected;
    } else if (type === 'genre') {
      this.genreSelected = selected;
    }
    this.gameService
      .getGames(this.platformSelected, this.genreSelected)
      .subscribe((data) => {
        this.games = data;
      });
  }

  viewDetails(id: string) {
    this.router.navigate(['/games', id]);
  }
}
