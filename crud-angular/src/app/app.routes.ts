import { Injectable } from '@angular/core';
import { RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { Title } from '@angular/platform-browser';

export const routes: Routes = [
    {
        path: "login",
        title: 'Login',
        component: LoginComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
];

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
    constructor(private readonly title: Title) {
        super();
    }

    override updateTitle(routerState: RouterStateSnapshot): void {
        const title = this.buildTitle(routerState);
        if (title !== undefined) {
            this.title.setTitle(`MoveIt - ${title}`);
        }
    }
}
