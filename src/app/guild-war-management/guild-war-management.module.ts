import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuildDetailComponent } from './guild-detail/guild-detail.component';
import { GuildListComponent } from './guild-list/guild-list.component';

@NgModule({
  declarations: [GuildDetailComponent, GuildListComponent],
  imports: [
    CommonModule
  ]
})
export class GuildWarManagementModule { }
