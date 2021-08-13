import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosformComponent } from './todosform.component';

describe('TodosformComponent', () => {
  let component: TodosformComponent;
  let fixture: ComponentFixture<TodosformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
