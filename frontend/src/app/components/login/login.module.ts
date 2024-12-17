import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { CadastrarUsuarioComponent } from '../usuario/cadastrar-usuario/cadastrar-usuario.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';   // Importando MatInputModule
import { MatButtonModule } from '@angular/material/button'; 

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent }
];

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        MatCardModule,
        MatFormFieldModule,
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        LoginComponent,
    ],
})
export class LoginModule { }
