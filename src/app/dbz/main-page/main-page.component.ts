import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';
import { DbzService } from '../services/dbz.service';
import { DbzModule } from '../dbz.module';
 
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

   constructor() {}  
}
