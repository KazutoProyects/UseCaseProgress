import { Injectable } from '@angular/core';
import { ProjectManagerFactory } from 'src/app/model/user/ProjectManagerFactory';
import { User } from 'src/app/model/user/User.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private currentUser: User;

  constructor() {
    const pmfactory = new ProjectManagerFactory()
    this.currentUser = pmfactory.createUser("123", "Adrián");
  }

  login(username: string, password: string): void {
    // Lógica de autenticación aquí
    // Establecer isAuthenticated como true y asignar el usuario actual
  }

  logout(): void {
    // Lógica de cierre de sesión aquí
    // Establecer isAuthenticated como false y borrar el usuario actual
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }
}