import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { WorkEditItemComponent } from './work-edit-item/work-edit-item.component';
import { WorkingIntervalComponent } from './working-interval/working-interval.component';
import { WorkEditComponent } from './work-edit/work-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskItemComponent,
    WorkEditItemComponent,
    WorkingIntervalComponent,
    WorkEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
