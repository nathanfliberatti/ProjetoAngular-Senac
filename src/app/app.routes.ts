import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PessoaLogin } from './pages/pessoa-login/pessoa-login';
import { PessoaListagem } from './pages/pessoa-listagem/pessoa-listagem';
import { PessoaFormComponent } from './pages/pessoa-form/pessoa-form';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home',
    },
    {
        path: 'pessoas/login',
        component: PessoaLogin,
        title: 'Login',
    },
    {
        path: 'pessoas',
        component: PessoaListagem,
        title: 'Lista de pessoas'
    },
    {
        path: 'pessoas/incluir',
        component: PessoaFormComponent,
        title: 'Cadastro de pessoas'
    },
    {
        path: 'pessoas/alterar/:id',
        component: PessoaFormComponent,
        title: 'Pessoas - Alterar',
    }

];