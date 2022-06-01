import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreatePlayerDto } from './dtos/create-player.dto';
import { IPlayer } from './interfaces/player.interface';

@Injectable()
export class PlayersService {
  private players: IPlayer[] = [];
  private readonly logger = new Logger(PlayersService.name);

  async createUpdatePlayer(createPlayerDto: CreatePlayerDto): Promise<void> {
    await this.create(createPlayerDto);
  }

  private async create(createPlayerDto: CreatePlayerDto): Promise<void> {
    const { name, phoneNumber, email } = createPlayerDto;

    const player: IPlayer = {
      _id: uuid(),
      name,
      phoneNumber,
      email,
      ranking: 'A',
      positionRanking: 1,
      urlPhotoPlayer: 'www.some_mock.som/photo123',
    };

    this.logger.log(`createPlayerDto: ${JSON.stringify(player)}`);

    this.players.push(player);

    console.log(this.players.length);
  }
}
