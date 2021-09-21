import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferenciasService } from "../services/transferencias.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {

  valor?: number = 0;
  destino?:number = 0;

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciasService, private router: Router) {}
  transferir() {
    console.log("transferencia feita");
    const valorEmitir = {
      valor : this.valor,
      destino: this.destino
    };
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      this.limpar();
      this.router.navigateByUrl('extrato');
    }, error => {
      console.error(error);
    });
  }

  limpar() {
    this.valor = 0;
    this.destino = 0;
  }
  ngOnInit(): void {
  }

}
