import {Component, Input, OnInit} from '@angular/core';
import { Transferencia } from '../model/transferencia';
import { TransferenciasService } from "../services/transferencias.service";


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() transferencias?: any[];

  constructor(private service: TransferenciasService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

}
