import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../app/services/auth.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  usuarioLogado: boolean = false;
  
  constructor(private authService: AuthService, private router: Router) {

    this.usuarioLogado = this.authService.usuarioLogado();
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): boolean {
    const ehRotaPublica = this.rotaPublica(state.url);

    if (ehRotaPublica) {
      return true;
    } else if (this.usuarioLogado) {
      return true;
    } else {
      this.router.navigate(['/login'])
      window.location.reload;
      return false;
    }
  }

  private rotaPublica(url: string): boolean {
    const rotasPublicas = ['/carro/categoria', '/home', '/usuario']

    const baseUrl = url;

    return rotasPublicas.includes(url);
  }
}
