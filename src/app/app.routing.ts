import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'games', component: ListComponent },
  { path: 'games/:id', component: DetailsComponent },
];

export const routing = RouterModule.forRoot(routes);
