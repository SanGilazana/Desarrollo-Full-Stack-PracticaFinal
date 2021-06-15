import { NgModule } from "@angular/core";

import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';


@NgModule(
    {
        imports: [
            MatRadioModule,
            MatFormFieldModule,
            MatButtonModule,
            MatCheckboxModule,
            MatToolbarModule,
            MatListModule,
            MatInputModule,
            MatSelectModule,
            MatTableModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatIconModule,
            MatExpansionModule,
            MatCardModule
        ],
        exports: [
            MatRadioModule,
            MatFormFieldModule,
            MatButtonModule,
            MatCheckboxModule,
            MatToolbarModule,
            MatListModule,
            MatInputModule,
            MatSelectModule,
            MatTableModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatIconModule,
            MatExpansionModule,
            MatCardModule
        ]
    }
)

export class ConfigMaterial {}