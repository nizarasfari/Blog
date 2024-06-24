import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  blogList = [ 
    {id:1, title: 'Blog 1', content: 'Content 1' },
    {id:2, title: 'Blog 2', content: 'Content 2' },
    {id:3, title: 'Blog 3', content: 'Content 3' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  


}
