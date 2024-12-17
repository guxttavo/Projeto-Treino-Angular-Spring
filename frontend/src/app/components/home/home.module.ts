import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CadastrarCarroComponent } from '../carro/cadastrar-carro/cadastrar-carro.component';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cadastrar-carro', component: CadastrarCarroComponent, canActivate: [AuthGuard] }
];

@NgModule({
    declarations: [
        HomeComponent, 
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        HomeComponent,
    ],
})
export class HomeModule { }
