import { Controller, Get, Param, Post, Req, Query  } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('/cards')
export class CardController {
  constructor(private readonly appService: CardService) {}

  @Get('/')
  async getAll(@Query('name') name: string): Promise<string> {
    if(!name) return 'Pls give no name'
    return this.appService.findCard(name);
  }
  @Get('/:id')
  getCard(@Param('id') id: any): string {
    return this.appService.getCardById(id);
  }

  @Post()
  create(@Req() request: Request): Object {
    const data = { ...request.body }
    return this.appService.createCard(data);
  }
}
