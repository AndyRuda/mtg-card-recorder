import { Injectable } from '@nestjs/common';

@Injectable()
export class CardService {

  getCardById(id: string): string {
    return 'Card ' + id;
  }

  findCard(name: string): string {
    return 'Card ' + name;
  }
  
  findCardInApi(name: string): string {
    return 'Card ' + name;
  }

  createCard(card: Object): Object {
    return card
  }
}
