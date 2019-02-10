import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--<mat-toolbar color="primary">-->
    <mat-toolbar color="primary">
      <button mat-button [matMenuTriggerFor]="guildInfo">Guild Info</button>
      <mat-menu #guildInfo="matMenu">
        <button mat-menu-item><a routerLink="">About Dynasty</a></button>
        <button mat-menu-item>Surge</button>
        <button mat-menu-item>Guild Wars</button>
      </mat-menu>

      <button mat-button [matMenuTriggerFor]="signIn">Officer Sign In</button>
      <mat-menu #signIn="matMenu">
        
      </mat-menu>
    </mat-toolbar>
    
    
    <div >
      
    </div>
    

 


    <!--<button mat-icon-button [matMenuTriggerFor]="appMenu">-->
      <!--<mat-icon>more_vert</mat-icon>-->
    <!--</button>-->

    <router-outlet></router-outlet>
  `,
  styles: [`
  
    /*mat-menu {*/
      /*background-color: mat-color($mat-indigo);*/
    /*}*/
    
  `]
})
export class AppComponent {
  title = 'dynasty';
}
