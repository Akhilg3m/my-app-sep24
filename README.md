
ANGULAR: Angular is framework to build single page applications.(SPAs).

        Framework: Combinatio of languages and libraries.

                html, css, typescript, jasmine, rxjs, zone.js

        SPA: only one HTML page.

Start:
======
1) Download and install nodejs

    check: node -v
           npm -v

2) Install angular

    npm install -g @angular/cli@15

    check: ng version

3) create new project

        ng new my-app

4) start the server

        ng serve

    
Running scripts permission:
---------------------------
1) Open powershell as administrator
2) run: set-executioPolicy unrestricted


TOPICS:
=======


Routing: Useful to change one view to another view in SPA.
========

        HOW:
        ----
        1) Create routes in app.routing.module.ts routes array
        2) <router-outlet> in app.component.html

        Types of routes: 4
        ----------------

        1) General Route:
        ------------------
                {path:'login', component: LoginComponent}

        2) Empty Route:
        ---------------
                {path:'', component: LoginComponent}

        3) wildcard Route/ Fallback route:
        ----------------------------------
                {path:'**', component: PageNotFoundComponent}

        4) Childred Route:
        ------------------
                {path:'dashboard', component: DashvoardComponent, childred:[
                        {path:'home', component, HomeCOmponent}
                ]}

                => mention <router-roulet> tag in dashboard(right side section)


        Navigate:
        ---------
                1) From HTML:
                --------------
                        <a routerLink="/login">
                        <a routerLink="home">
                        

        RouterGuards ?
        --------------



ARCHITECTURE:
=============


DIRECTIVES: (useful to alter the DOM)
===========

        3 types

        1) Stuctural Directives: (Alters DOM Structure)
        -------------------------        

                *ngFor: iterativly add elements to DOM.

                *ngIf: conditionally add or remove elements in DOM


        2) Attribute Directies: (Alter attribute values dynamically)

                [ngStyle]
                [ngClass]

        3) Component Directives:  Add new elmments to DOM

                components are subset of direvties.


PIPES: Pipes are useful to transform data from one format to another format.

        {{ today | date }}



API INTEGRATION:
================

RXJS: Reactive Extenstion for javascript
=====

        1) Promise
        2) Observable
        3) Subject


STEPS:
======
1) import HttpClientModule

2) Inject HttpClient Service in Vehicle scervice

3) getVehicles Method

4) subscribe to getVehicles

5) store the data


DATA FLOW:
==========



ALL POSSIBLE API CALLS:
========================

1) all           get         get(url)

2) specific      get         get(url/id)

3) filtering     get         get(url?filter=red);

4) sorting       get         get(url?sortBy=color&order=asc)

5) pagination    get         get(url?limit=10&page=1)

6) create        post        post(url,data)

7) update        put         put(url/id, data)

8) delete        delete      delete(url/id)



Reactive Forms:
===============

        Features:
        ---------
        1) FormGroup
        2) NestedFormGroup
        3) FormArray
        4) DynamicForms
        5) Validators

        Process:
        ========
        1) import ReactiveFormsModule
        2) Create formgroup in ts
        3) create form in html
        4) mapping
        5) check the output



        TS:
        ---
        age: new FormControl('',[ Validatros.required, Validators.min(18) ])


        HTML:
        -----
         <div *ngIf="CONTROL?.touched && CONTROL?.invalid">

                <p class="error" *ngIf="CONTROL?.errors?.['required']">age is required</p>
                <p class="error" *ngIf="CONTROL?.errors?.['min']">Minimum 18 years</p>

        </div>

                CONTROL:
                ---------
                FormGrop:        userForm.get('age')

                NestedFormGroup:  userForm.get('address')?.get('pin')

                FormArray:          cardsFormArray.controls[i]?.get('cvv')



Reamining Topics:
=================
1) Edit
2) Communication
3) Customs
4) Theory



Other:
======
1) Bootstrap
2) SCSS / CSS Box Model
3) GIT ADVANCED
4) UNIT Testcases



PROJECTS:
=========
1) TOOLS
2) IMS
3) Material
4) Sibling Communication
5) BUGS
6) Live


GIT:
====

1) Laptop <--> Website

        git config --global user.name "XXXXXXX"
        git config --global user.email "XXXXXXX"

        CHECK: git config --list


2) Project <---> Repository

        git init
        git remote add origin XXXXXX

        CHECK: git remote -v

3) Sync Code

        git add .

        git commit -m "First commit"

        git push      

                        (first time suggestion with -f command)
































