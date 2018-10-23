import { Component, OnInit } from '@angular/core';
import { ListaProfessoresService } from '../../services/lista-professores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-professores',
  templateUrl: './lista-professores.page.html',
  styleUrls: ['./lista-professores.page.scss'],
})
export class ListaProfessoresPage implements OnInit {

  data: any;

  constructor(private listaProfessorService: ListaProfessoresService, private router: Router) { }

  ngOnInit() {
    this.listaProfessorService.getProfessor('get-professor.php')
    .subscribe(data2 => {
      this.data = data2;
    });
  }

  detalhesProfessor(professor){
    this.listaProfessorService.currentProfessor = professor;
    this.router.navigate(['/detalhes-professor'])
  }

}
