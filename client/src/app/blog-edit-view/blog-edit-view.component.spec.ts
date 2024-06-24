import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEditViewComponent } from './blog-edit-view.component';

describe('BlogEditViewComponent', () => {
  let component: BlogEditViewComponent;
  let fixture: ComponentFixture<BlogEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogEditViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
