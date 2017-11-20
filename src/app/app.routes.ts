import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'directory',
    component: DirectoryComponent
  },
  {
  path: 'directory/:ninja',
  component: DirectoryComponent
  }
];
export const routing = RouterModule.forRoot(routes);
