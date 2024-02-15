import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChistesService } from '../service/chistes.service'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

constructor(
  private ChistesService :ChistesService
){

}
url='https://www.google.com/search?q='
busqueda=""
gmailUrl='https://accounts.google.com/v3/signin/identifier?continue=http%3A%2F%2Fsupport.google.com%2Fmail%2Fanswer%2F8494%3Fhl%3Des%26co%3DGENIE.Platform%253DDesktop&ec=GAZAdQ&hl=es&passive=true&sjid=13900374299691456950-EU&ifkv=ASKXGp3cTNTD1pDCOIugr7ehDQ1YOriwt2I-7YcZJKpLLrYB2PdcM4c19vQoieY1XEZWMTShS1ZvPA&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin'
nuevochiste =''

ngOnInit(){
  this.getmisChistes();
}

getmisChistes(){

  this.ChistesService.getChistes()
  .subscribe(data => {
    console.log(data)
    this.nuevochiste = data.value

  })
}

}

