import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CardModule,
        InputTextModule,
        ButtonModule,
        RouterModule,
        
    ],
    exports: [
        CardModule,
        InputTextModule,
        ButtonModule,
        RouterModule
    ]
})
export class SharedModule { }