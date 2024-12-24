import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthGuard } from 'src/guards/auth.guard';
import { HomeComponent } from './home.component';
import { CadastrarCarroComponent } from '../carro/cadastrar-carro/cadastrar-carro.component';
import { EditarUsuarioComponent } from '../usuario/editar-usuario/editar-usuario.component';
import { CadastrarUsuarioComponent } from '../usuario/cadastrar-usuario/cadastrar-usuario.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';  // Adicione esta linha
import { EditarCarroComponent } from '../carro/editar-carro/editar-carro.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cadastrar-carro', component: CadastrarCarroComponent, canActivate: [AuthGuard] },
    { path: 'meu-perfil', component: EditarUsuarioComponent, canActivate: [AuthGuard] },
    { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
    { path: 'editar-carro/:id', component: EditarCarroComponent }
];

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        MatIconModule,
        MatSelectModule,
        FormsModule,
        MatDialogModule,
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
