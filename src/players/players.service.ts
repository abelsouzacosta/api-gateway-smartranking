import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MessagePatterns } from 'src/common/enum/message-patterns.enum';
import { Services } from 'src/common/enum/service-names.enum';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersService {
  constructor(
    @Inject(Services.PLAYERS_SERVICE)
    private readonly client: ClientProxy,
  ) {}

  create(data: CreatePlayerDto) {
    return this.client.emit(MessagePatterns.CREATE_PLAYER, data);
  }

  findAll() {
    return this.client.send(MessagePatterns.LIST_PLAYERS, {});
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
