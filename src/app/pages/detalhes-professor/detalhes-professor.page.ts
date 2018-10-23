import { Component, OnInit } from '@angular/core';
import { ListaProfessoresService } from '../../services/lista-professores.service';

@Component({
  selector: 'app-detalhes-professor',
  templateUrl: './detalhes-professor.page.html',
  styleUrls: ['./detalhes-professor.page.scss'],
})
export class DetalhesProfessorPage implements OnInit {

  professor: any;

  constructor(private service: ListaProfessoresService) { }

  ngOnInit() {
    this.professor = this.service.currentProfessor;
  }

}
