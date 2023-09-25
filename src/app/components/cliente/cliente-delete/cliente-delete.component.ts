import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.scss']
})
export class ClienteDeleteComponent implements OnInit {

  cliente: Cliente = {
    id:'',
    nome:'',
    cpf: '',
    email: '',
    senha: '',
    perfis:[],
    dataCriacao: ''
  }

  constructor( private service: ClienteService, private toast: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById():void{
    this.service.findById(this.cliente.id).subscribe(res => {
      res.perfis = [];
      this.cliente = res;
    })
  }

  delete(): void{
    this.service.delete(this.cliente.id).subscribe(res => {
      this.toast.success('Cliente deletado com sucesso', 'Deletar');
      this.router.navigate(['clientes'])
    }, ex => {
      if(ex.error.erros){
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      }else{
        this.toast.error(ex.error.message);
      }
      
    })
  }


  addPerfil(perfil: any): void{
    if(this.cliente.perfis.includes(perfil)){
      this.cliente.perfis.splice(this.cliente.perfis.indexOf(perfil), 1);
    }else{
      this.cliente.perfis.push(perfil);
    }
  }

}

