class Screenshot {
    id: string;
    image: string;
}

class Requirements {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string
}
export class Game {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  screenshots: Screenshot[];
  minimum_system_requirements: Requirements;
}
