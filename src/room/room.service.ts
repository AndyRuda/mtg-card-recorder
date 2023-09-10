import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomService {

  getRoomByid(id: string): string {
    return 'Room ' + id;
  }

  createRoom(room: Object): Object {
    return room
  }
  
  updateRoom(id: string, data: object): string {
    return 'Updated Room ' + id;
  }

  deleteRoom(id: string): string {
    return 'Deleted Room ' + id;
  }
}
