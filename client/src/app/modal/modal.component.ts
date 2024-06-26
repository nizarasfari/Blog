import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

export class ModalComponent {

  isVisible = false;

  showModal(): void {
    console.log('showModal');
    this.isVisible = true;
  }

  closeModal(): void {
    this.isVisible = false;
  }

}
