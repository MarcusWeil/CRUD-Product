import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  //BehaviorSubject vai ser responsável por notificar(gerar evento) qualquer alteração aos Observers interessados na aplicação
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  });
  public get headerData(): HeaderData {
    return this._headerData.value;
  }
  /*headerData vai setar o headerData do tipo "HeaderData.model" para: {
    BehaviorSubject ser capaz de detectar o evento a partir do .next() que estará recebendo o valor do headerData previamente obtido pelo 'get headerData()'
  }*/
  public set headerData(headerData: HeaderData) {
    this._headerData.next(this.headerData);
  }


  constructor() { }

}