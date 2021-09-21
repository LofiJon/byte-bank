import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Transferencia } from '../model/transferencia';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {
  listaTransferencia?: any[];
  private url = "http://localhost:3000/transferencias";

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  findAll(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.tratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  private tratar(transferencia: any) {
      transferencia.data = new Date();
  }
}
