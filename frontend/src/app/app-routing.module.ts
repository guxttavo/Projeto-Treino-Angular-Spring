import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { CadastrarUsuarioComponent } from './components/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { CadastrarCarroComponent } from './components/carro/cadastrar-carro/cadastrar-carro.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'usuario/cadastrar-usuario',
    component: CadastrarUsuarioComponent,
  },
  {
    path: 'usuario/editar-usuario',
    component: EditarUsuarioComponent
  },
  {
    path: 'carro',
    component: CadastrarCarroComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
