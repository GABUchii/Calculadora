import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
  display='0';

  clearDisplay(){
    this.display='0';
  }

  appendcharacter(character:string){
    this.display+=character;

  }
 calculate() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Error';

}



}}
