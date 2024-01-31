import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [],
  exports: [
    CounterComponent // Exportamos el componente para que pueda ser usado en otros módulos
  ],
  providers: [],
})
export class CounterModule{}
