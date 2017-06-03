import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { JournalComponent } from './pages/journal/journal.component';
import { JournalEditComponent } from './pages/journal-edit/journal-edit.component';
import { CallbackComponent } from './pages/callback/callback.component';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'journal/edit', component: JournalEditComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: 'home' }
];
