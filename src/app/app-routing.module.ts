import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
       canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
   providers: [AuthGuard]
})
export class AppRoutingModule {}
