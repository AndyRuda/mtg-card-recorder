import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerService {

  findPlayer(id: string): string {
    return 'Player ' + id;
  }

  createPlayer(data: object): object {
    return data
  }

  updatePlayer(id: string, data: object): string {
    return 'Updated Player ' + id;
  }
  deletePlayer(id: string): string {
    return 'Deleted Player ' + id;
  }
}
