import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import { StylistComponent } from './stylist/stylist.component';
import { StylistDetailComponent } from './stylist-detail/stylist-detail.component';
import { StylistCreateComponent } from './stylist-create/stylist-create.component';
import { StylistEditComponent } from './stylist-edit/stylist-edit.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestStylistsComponent } from './request-stylists/request-stylists.component'
const appRoutes: Routes = [
  {
    path: 'stylists',
    component: StylistComponent,
    data: { title: 'Stylist List' }
  },
  {
    path: 'stylist-details/:id',
    component: StylistDetailComponent,
    data: { title: 'Stylist Details' }
  },
  {
    path: 'stylist-create',
    component: StylistCreateComponent,
    data: { title: 'Create Stylist' }
  },
  {
    path: 'posts',
    component: PostsComponent,
    data: { title: 'News and posts' }
  },
  {
    path: 'requests',
    component: RequestsComponent,
    data: { title: 'Request an appointment' }
  },
  {
    path: 'stylist-edit/:id',
    component: StylistEditComponent,
    data: { title: 'Edit Stylist' }
  },
  { path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'request-stylists',
    component: RequestStylistsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    StylistComponent,
    StylistDetailComponent,
    StylistCreateComponent,
    StylistEditComponent,
    HomeComponent,
    SidebarComponent,
    RequestsComponent,
    PostsComponent,
    RequestStylistsComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
