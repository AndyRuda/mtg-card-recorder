import { Controller, Get, Param, Post, Req, Put, Delete } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('/player')
export class PlayerController {
  constructor(private readonly appService: PlayerService) {}

  @Get('/:id')
  getCard(@Param('id') id: any): string {
    return this.appService.findPlayer(id);
  }

  @Post()
  create(@Req() request: Request): Object {
    const body = request.body || { id: 1 } as any;
    const data = this.appService.createPlayer(body)
    return data
  }

  @Put('/:id')
  update(@Req() request: Request, @Param('id') id: any): Object {
    const data = request.body || {} as any;
    const updated = this.appService.updatePlayer(id, data);
    return updated
  }

  @Delete('/:id')
  delete(@Param('id') id: any): Object {
    const data = this.appService.deletePlayer(id)
    return data
  }

}
