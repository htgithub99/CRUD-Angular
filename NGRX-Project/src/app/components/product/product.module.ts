import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './list/list.effects';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateEffects } from './create/list.effects';
import { UpdateEffects } from './edit/edit.effects';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ListComponent, EditComponent, CreateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    FormsModule,
    EffectsModule.forFeature([ListEffects, CreateEffects, UpdateEffects])
  ]
})
export class ProductModule { }
