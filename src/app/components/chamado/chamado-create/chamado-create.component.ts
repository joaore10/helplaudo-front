import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.scss']
})
export class ChamadoCreateComponent implements OnInit {

  prioridade: FormControl = new FormControl(null, [Validators.required]);
  status: FormControl = new FormControl(null, [Validators.required]);
  titulo: FormControl = new FormControl(null, [Validators.required]);
  descricao: FormControl = new FormControl(null, [Validators.required]);
  tecnico: FormControl = new FormControl(null, [Validators.required]);
  cliente: FormControl = new FormControl(null, [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.prioridade.valid && this.titulo.valid && this.status.valid &&
            this.descricao.valid && this.tecnico.valid && this.cliente.valid;
  }

}
