import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { CadastrarUsuarioComponent } from '../usuario/cadastrar-usuario/cadastrar-usuario.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

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
        RouterModule.forChild(routes),
    ],
    exports: [
        LoginComponent,
    ],
})
export class LoginModule { }
