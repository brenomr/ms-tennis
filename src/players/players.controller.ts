import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playerService: PlayersService) {}

  @Post()
  async createUpdatePlayer(@Body() createPlayerDto: CreatePlayerDto) {
    await this.playerService.createUpdatePlayer(createPlayerDto);
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
