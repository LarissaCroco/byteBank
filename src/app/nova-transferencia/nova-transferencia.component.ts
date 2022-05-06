import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output()
  aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  /**
   * Método para transferir dinheiro
   */
  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);
    this.router.navigateByUrl('extrato');
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
