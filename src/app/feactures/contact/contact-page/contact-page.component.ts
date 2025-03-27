import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  ///changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent {

  // private router = inject(Router);
  // constructor(){

  //   this.loadRoutes();
  // }

  // async loadRoutes() {
  //   const routesTree = await this.getRoutes(this.router.config);
  //   console.log("Estructura de rutas:", JSON.stringify(routesTree, null, 2));
  // }

  // async getRoutes(routes : Route[]): Promise<any>{
  //   let result: any = {};

  //   for (const route of routes) {

  //     let routeData: any = {
  //       title: route.title,
  //       path: route.path
  //     };



  //     if (route.loadChildren) {
  //       const module = await route.loadChildren();
  //       if (Array.isArray(module)) {
  //         routeData.children = await this.getRoutes(module);
  //       }
  //     }

  //     // Si tiene children, los procesamos también
  //     if (route.children) {
  //       routeData.children = await this.getRoutes(route.children);
  //     }

  //     result[route.path!] = routeData; // Ahora siempre tendrá una clave válida
  //   }

  //   return result;
  // }


  // route = routes.forEach(async element =>{
  //   if(element.title != undefined){
  //     console.log(element);
  //   }
  //   if(element.loadChildren){
  //       const module = await element.loadChildren();
  //       console.log('->',element.title);
  //       if(Array.isArray(module)){
  //         for(const childRoute of module){
  //           if(childRoute.title != undefined){
  //             console.log('-->',childRoute.title);
  //           }
  //           if(childRoute.children){
  //               childRoute.children.forEach(element=>{
  //                 if(element.title!= undefined){
  //                   console.log('--->',element);
  //                 }
  //               })
  //           }
  //         }
  //       }
  //   }
  // })

}

