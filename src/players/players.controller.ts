import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async createUpdatePlayer() {
    return JSON.stringify({
      nome: 'Player Created',
    });
  }

  @Get()
  async listPlayers() {
    return JSON.stringify([
      {
        nome: 'Player Mock 1',
      },
      {
        nome: 'Player Mock 2',
      },
    ]);
  }

  @Delete()
  async deletePlayerById() {
    return JSON.stringify({
      status: 'Player Removed',
    });
  }
}
