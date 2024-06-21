import { Component , OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'client';
  ngOnInit(): void {
      return;
  }
   
  form!: FormGroup;

  constructor() {
    this.form = new FormGroup({});
  }

  onSubmit() {
    console.log('submit');
  }
}
