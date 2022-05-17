import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { PersonajesModule } from './personajes/personajes.module';

const routes: Routes = [
  {
	 path: "",
   loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "personajes",
    loadChildren: () => import("./personajes/personajes.module").then((m) => m.PersonajesModule)
  },
  {
    path: "about",
    loadChildren: () => import("src/app/about/about.module").then((m) => m.AboutModule)
  },
	{
	 path: "not-found",
	 component: NotFoundComponent,
	},
	{
	 path: "**",
   redirectTo: "not-found",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
