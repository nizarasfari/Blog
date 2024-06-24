import { Component , OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ModalComponent } from './modal/modal.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule,MatIconModule, ModalComponent, BlogListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
 
 @ViewChild(ModalComponent) modal!: ModalComponent;
  
 openModal() {
    console.log('openModal');
    this.modal.showModal();
  }
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
