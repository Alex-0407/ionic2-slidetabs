import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { AccountPage } from '../pages/account/account';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BlankPage } from '../pages/tabs/tabs';

import { MaterialPreloader } from '../directives/material-preloader';
import { SwipeTabs } from '../directives/swipetabs';

// action sheets
import { BasicPage as ActionSheetBasicPage } from '../pages/action-sheets/basic/pages';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { UserData } from '../providers/user-data';

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BlankPage,
    MaterialPreloader,
    SwipeTabs,
    ActionSheetBasicPage,
    LoginPage,
    SignupPage,
    TutorialPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BlankPage,
    ActionSheetBasicPage,
    LoginPage,
    SignupPage,
    TutorialPage
  ],
  providers: [UserData, Storage]
})
export class AppModule {}
