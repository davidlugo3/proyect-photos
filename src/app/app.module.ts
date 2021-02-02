import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { CargaComponent } from './componentes/carga/carga.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CargaImagenesService} from './services/carga-imagenes.service';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//firebase
 import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularFireAuthModule } from 'angularfire2/auth';



//angular material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    CargaComponent,
    NavbarComponent,
    FooterComponent,
    NgDropFilesDirective,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule, BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    CargaImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
