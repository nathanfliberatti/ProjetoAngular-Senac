import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
@Component({
 selector: 'app-header',
 standalone: true,
 imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
 templateUrl: './header.html',
 styleUrl: './header.css'
})
export class HeaderComponent {
 exibirLogo:boolean = true;
 itensMenu = [
  { label: 'Home', link: '' },
  { label: 'Cadastro', link: '/pessoas/incluir' },
  { label: 'Login', link: '/pessoas/login' },
  { label: 'Sobre', link: '/sobre' },
  { label: 'Ajuda', link: '/ajuda' },
 ]
}