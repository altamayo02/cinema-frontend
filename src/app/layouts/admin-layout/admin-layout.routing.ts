import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard]
    },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    //{ path: 'maps',           component: MapsComponent },
    {
        path: 'theaters',
        loadChildren: () => import('src/app/pages/theaters/theaters.module').then(m => m.TheatersModule),
        canActivate: [AuthGuard]
    },
];
