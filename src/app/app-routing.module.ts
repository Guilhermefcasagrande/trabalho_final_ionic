import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'lista-professores', loadChildren: './pages/lista-professores/lista-professores.module#ListaProfessoresPageModule' },
  { path: 'detalhes-professor', loadChildren: './pages/detalhes-professor/detalhes-professor.module#DetalhesProfessorPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
