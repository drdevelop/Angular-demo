import { RouterModule,Routes } from '@angular/router'

import { Students } from '../students'
import { HomeComponent } from '../home.component'

const router: Routes= [{
	path: "student",
	component: Students
},{
	path: "home",
	component: HomeComponent
}]
export const rootRouter = RouterModule.forRoot(router)
