import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import { SEOServiceService } from './services/SEO-service/seo-service.service';
import { AuthorService } from './services/author/author.service';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSsrCacheModule } from '@ngx-ssr/cache';


import { AppComponent } from './app.component';
import { BreakpointCheckerService } from './services/breakpointChecker/breakpoint-checker.service';
import { ArticleService } from './services/articles/article.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PipeModule } from './pipe/pipe.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ArticleComponent,
    FooterComponent,
    BlogComponent,
    PrivacyPolicyComponent,
    TermsComponent,
    CookiePolicyComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp'}),
    NgxSsrCacheModule.configLruCache({ maxAge: 10 * 60_000, maxSize: 50 }),
    HttpClientModule,
    FormsModule,
    LayoutModule,
    AppRoutingModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    PipeModule
  ],
  providers: [
    BreakpointCheckerService,
    ArticleService,
    AuthorService,
    SEOServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
