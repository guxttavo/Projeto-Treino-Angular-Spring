import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CadastrarCarroComponent } from '../carro/cadastrar-carro/cadastrar-carro.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { EditarUsuarioComponent } from '../usuario/editar-usuario/editar-usuario.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cadastrar-carro', component: CadastrarCarroComponent, canActivate: [AuthGuard] },
    { path: 'meu-perfil/:id', component: EditarUsuarioComponent, canActivate: [AuthGuard] },
];

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        HomeComponent,
    ],
})
export class HomeModule { }
