import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';

export const routes: Routes = [];

/**
 * Customizando title da pagina por URL.
 *
 * @usageNotes
 *
 * ### Como Usar
 *
 * ```routes
 * {
 *  path: 'login',
 *  title: 'Pagina de Login',
 *  component: LoginComponent,
 * },
 * {
 *  path: 'home',
 *  title: 'Pagina Inicial',
 *  loadChildren: () => import('@pages/home/home.routes').then((m) => m.home),
 * },
 * {
 *  path: '',
 *  redirectTo: '/login',
 *  pathMatch: 'full',
 * },
 * ```
 *
 * ### Resultado URL /login
 *
 * ```html
 * <title>Poc Angular - Pagina de Login</title>
 * ```
 *
 * @publicApi
 */
@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Poc Angular - ${title}`);
    }
  }
}
