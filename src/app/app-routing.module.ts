import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmulatedComponent } from 'src/Components/emulated/emulated.component';
import { NoneComponent } from 'src/Components/none/none.component';
import { ShadowDOMComponent } from 'src/Components/shadow-dom/shadow-dom.component';

const routes: Routes = [
  { path: 'Emulated', component: EmulatedComponent },
  { path: 'None', component: NoneComponent },
  { path: 'ShadowDOM', component: ShadowDOMComponent },
  { path: '', redirectTo: 'Emulated', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
