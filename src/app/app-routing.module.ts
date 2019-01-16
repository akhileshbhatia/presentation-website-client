import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: 'presentation/:id', component: MainComponent },
  { path: '**', redirectTo: '/presentation/1', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})


export class AppRoutingModule { }
