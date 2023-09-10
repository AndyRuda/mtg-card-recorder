import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CardController } from './card/card.controller';
import { CardService } from './card/card.service';

import { PlayerController } from './players/player.controller';
import { PlayerService } from './players/player.service';

import { RoomController } from './room/room.controller';
import { RoomService } from './room/room.service';

@Module({
  imports: [],
  controllers: [AppController, CardController, PlayerController, RoomController],
  providers: [AppService, CardService, PlayerService, RoomService],
})
export class AppModule {}
