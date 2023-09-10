import { Controller, Get, Param, Post, Req, Delete, Put  } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('/room')
export class RoomController {
  constructor(private readonly appService: RoomService) {}

  @Get('/:id')
  getCard(@Param('id') id: any): string {
    return this.appService.getRoomByid(id);
  }

  @Post()
  create(@Req() request: Request): Object {
    const data = { ...request.body }
    return this.appService.createRoom(data);
  }

  @Delete('/:id')
  delete(@Param('id') id: any): Object {
    const data = this.appService.deleteRoom(id)
    return data
  }

  @Put('/:id')
  update(@Req() request: Request, @Param('id') id: any): Object {
    const data = request.body || {} as any;
    const updated = this.appService.updateRoom(id, data);
    return updated
  }
}
