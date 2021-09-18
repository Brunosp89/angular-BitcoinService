import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: {
    updated: string;
  };
  disclaimer: string;
  bpi: {
    BRL: {
      symbol: string;
      description: string;
      rate_float: number;
      rate: string;
    };
    USD: {
      symbol: string;
      description: string;
      rate_float: number;
      rate: string;
    };
  };
}

interface PriceUpdate {
  timestamp: Date;
  BRL: number;
  USD: number;
}

@Injectable()
export class BitcoinService {
  currentPrice: Response;
  lastUpdate: Date;

  updateList: Array<PriceUpdate> = [];
  constructor(private http: HttpClient) {}

  update() {
    this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        this.lastUpdate = new Date();
        this.currentPrice = data;
        this.updateList.push({
          timestamp: this.lastUpdate,
          BRL: this.currentPrice.bpi.BRL.rate_float,
          USD: this.currentPrice.bpi.USD.rate_float,
        });
      });
  }
}
