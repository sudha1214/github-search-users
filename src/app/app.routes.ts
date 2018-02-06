import {Routes} from '@angular/router';
import { GithubListComponent } from './github-list/github-list.component';
import { UserComponentComponent } from './user-component/user-component.component'

export const appRoutes: Routes = [
    { path: 'list', component: GithubListComponent},
    { path : 'user/:userId', component: UserComponentComponent}
]
