import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PessoaLogin } from './pages/pessoa-login/pessoa-login';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'pessoas/login', component: PessoaLogin}
];