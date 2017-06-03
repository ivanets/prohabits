import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { ROUTES } from './app.routes';

import { APIService } from './api.service';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './pages/callback/callback.component';
import { CommitComponent } from './components/commit/commit.component';
import { QuoteComponent } from './components/quote/quote.component';
import { GrowthComponent } from './components/growth/growth.component';
import { ActivityComponent } from './components/activity/activity.component';
import { PersonalGrowthComponent } from './components/personal-growth/personal-growth.component';
import { LoginComponent } from './pages/login/login.component';
import { JournalComponent } from './pages/journal/journal.component';
import { ChartModule } from 'angular2-chartjs';
import { ActivityFirstItemComponent } from './items/activity-first-item/activity-first-item.component';
import { ActivityItemComponent } from './items/activity-item/activity-item.component';
import { OurGrowthItemComponent } from './items/our-growth-item/our-growth-item.component';
import { JournalItemComponent } from './items/journal-item/journal-item.component';
import { DaysCompletedChartComponent } from './items/days-completed-chart/days-completed-chart.component';
import { DaysStreakChartComponent } from './items/days-streak-chart/days-streak-chart.component';
import { JournalEditComponent } from './pages/journal-edit/journal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    CommitComponent,
    QuoteComponent,
    GrowthComponent,
    ActivityComponent,
    PersonalGrowthComponent,
    LoginComponent,
    JournalComponent,
    ActivityFirstItemComponent,
    ActivityItemComponent,
    OurGrowthItemComponent,
    JournalItemComponent,
    DaysCompletedChartComponent,
    DaysStreakChartComponent,
    JournalEditComponent
  ],
  imports: [
    ChartModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [AuthService, APIService],
  bootstrap: [AppComponent]
})

export class AppModule { }
