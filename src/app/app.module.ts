import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BitcoinService } from './bitcoin.service';
import { SobreComponent } from './sobre/sobre.component';
import { RouterModule } from '@angular/router';
import { BitcoinComponent } from './bitcoin/bitcoin.component';

import { HttpClientModule } from '@angular/common/http';
import { TimerService } from './timer.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'sobre', component: SobreComponent },
      { path: 'bitcoin', component: BitcoinComponent },
    ]),
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    SobreComponent,
    BitcoinComponent,
  ],
  bootstrap: [AppComponent],
  providers: [BitcoinService, TimerService],
})
export class AppModule {}
