import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async createUpdatePlayer(@Body() createPlayerDto: CreatePlayerDto) {
    const { email } = createPlayerDto;
    return JSON.stringify({
      email,
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
