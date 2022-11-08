import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Services } from 'src/common/enum/service-names.enum';
import { RABBITMQ_URL } from 'src/config';
import { Queues } from 'src/common/enum/queue-names.enum';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: Services.PLAYERS_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: [RABBITMQ_URL],
          queue: Queues.PLAYERS,
        },
      },
    ]),
  ],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
