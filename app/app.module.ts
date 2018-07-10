import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { WorkshopAppComponent } from './workshop-app.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [WorkshopAppComponent],
    bootstrap: [WorkshopAppComponent]
})
export class AppModule {}