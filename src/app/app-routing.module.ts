import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'routes-categories/:id',
        loadChildren: () => import('./routesFolder/routes-list/routes-list.module').then(m => m.RoutesListPageModule)
    },
    {
        path: 'tours',
        loadChildren: () => import('./tour/tours/tours.module').then(m => m.ToursPageModule)
    },
    {
        path: 'gids',
        loadChildren: () => import('./gid/gids/gids.module').then(m => m.GidsPageModule)
    },
    {
        path: 'account',
        loadChildren: () => import('./loginSignUp/account/account.module').then(m => m.AccountPageModule)
    },
    {
        path: 'how-to-get',
        loadChildren: () => import('./how-to-get/how-to-get.module').then(m => m.HowToGetPageModule)
    },
    {
        path: 'routes-categories/:id/:id',
        loadChildren: () => import('./routesFolder/route-object/route-object.module').then(m => m.RouteObjectPageModule)
    },

    {
        path: 'places',
        loadChildren: () => import('./place/places/places.module').then(m => m.PlacesPageModule)
    },
    {
        path: 'gastro',
        loadChildren: () => import('./gastroList/gastro/gastro.module').then(m => m.GastroPageModule)
    },
    {
        path: 'gastro/:id',
        loadChildren: () => import('./gastrolist/gastro-object/gastro-object.module').then(m => m.GastroObjectPageModule)
    },
    {
        path: 'places/:id/:id',
        loadChildren: () => import('./place/place-object/place-object.module').then(m => m.PlaceObjectPageModule)
    },
    {
        path: 'tours/:id',
        loadChildren: () => import('./tour/tour-object/tour-object.module').then(m => m.TourObjectPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./loginSignUp/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'sign-up',
        loadChildren: () => import('./loginSignUp/sign-up/sign-up.module').then(m => m.SignUpPageModule)
    },
    {
        path: 'gids/:id',
        loadChildren: () => import('./gid/gidprofile/gidprofile.module').then(m => m.GidprofilePageModule)
    },
    {
        path: 'routes-categories',
        loadChildren: () => import('./routesFolder/routes-categories/routes-categories.module').then(m => m.RoutesCategoriesPageModule)
    },
    {
        path: 'places/:id',
        loadChildren: () => import('./place/places-list/places-list.module').then(m => m.PlacesListPageModule)
    },
    {
        path: 'events',
        loadChildren: () => import('./eventsFolder/events/events.module').then(m => m.EventsPageModule)
    },
    {
        path: 'events/:id',
        loadChildren: () => import('./eventsFolder/event-object/event-object.module').then(m => m.EventObjectPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
