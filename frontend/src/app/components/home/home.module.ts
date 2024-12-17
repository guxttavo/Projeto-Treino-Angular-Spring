import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CadastrarCarroComponent } from '../carro/cadastrar-carro/cadastrar-carro.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { EditarUsuarioComponent } from '../usuario/editar-usuario/editar-usuario.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cadastrar-carro', component: CadastrarCarroComponent, canActivate: [AuthGuard] },
    { path: 'meu-perfil', component: EditarUsuarioComponent, canActivate: [AuthGuard] },

];

@NgModule({
    declarations: [
        HomeComponent, 
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        HomeComponent,
    ],
})
export class HomeModule { }
