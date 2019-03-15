import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {PageEditComponent} from './views/page/page-edit/page-edit.component';
import {PageListComponent} from './views/page/page-list/page-list.component';
import {PageNewComponent} from './views/page/page-new/page-new.component';
import {LoginComponent} from './views/user/login/login.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RegisterComponent} from './views/user/register/register.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './views/widget/widget-edit/widget-edit.component';
import {WidgetHeaderComponent} from './views/widget/widget-edit/widget-header/widget-header.component';
import {WidgetImageComponent} from './views/widget/widget-edit/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WidgetListComponent} from './views/widget/widget-list/widget-list.component';
import {WidgetHtmlComponent} from './views/widget/widget-edit/widget-html/widget-html.component';
import {WidgetTextComponent} from './views/widget/widget-edit/widget-text/widget-text.component';

// client services
import {PageService} from './services/page.service.client';
import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';
import {WidgetService} from './services/widget.service.client';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    WidgetEditComponent,
    WidgetChooserComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WidgetHtmlComponent,
    WidgetTextComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
