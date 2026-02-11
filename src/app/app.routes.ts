
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
];
