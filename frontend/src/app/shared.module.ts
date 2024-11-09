import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CardModule,
        InputTextModule,
        ButtonModule,
        RouterModule,
        ReactiveFormsModule
    ],
    exports: [
        CardModule,
        InputTextModule,
        ButtonModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }