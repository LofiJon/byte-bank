import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ExtratoComponent} from "./app/extrato/extrato.component";
import {TransferenciaComponent} from "./app/transferencia/transferencia.component";

export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full'},
  { path: 'extrato', component: ExtratoComponent },
  { path: 'nova-transferencia', component: TransferenciaComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
