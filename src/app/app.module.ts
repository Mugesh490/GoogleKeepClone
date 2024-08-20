import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotecardComponent } from './components/notecard/notecard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TrashComponent } from './components/trash/trash.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { RemainderComponent } from './components/remainder/remainder.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddnoteComponent,
    ArchiveComponent,
    NavbarComponent,
    NotecardComponent,
    DashboardComponent,
    SidebarComponent,
    TrashComponent,
    NotesContainerComponent,
    RemainderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
