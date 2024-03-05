import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { InstitutionsHallComponent } from './institutions-hall/institutions-hall.component';
import { CreateInstitutionComponent } from './create-institution/create-institution.component';
import { InstitutionComponent } from './institution/institution.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsDashboardComponent } from './projects-dashboard/projects-dashboard.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: CreateAccountComponent },

        // Selector de instituciones, crear institucion y dashboard de institución
        { path: 'institution-hall', component: InstitutionsHallComponent },
        { path: 'create-institution', component: CreateInstitutionComponent },
        { path: 'institution', component: InstitutionComponent },
    
        //rutas para manejar projectos
        { path: 'projects', component: ProjectsComponent },
        { path: 'projectsdetail', component: ProjectsDashboardComponent }
    

];
