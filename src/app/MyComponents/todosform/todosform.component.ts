import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from "../../TodoModel";
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-todosform',
  templateUrl: './todosform.component.html',
  styleUrls: ['./todosform.component.css']
})
export class TodosformComponent implements OnInit {
  constructor(private todoservice: TodoService) { }
  todotitle: string = "";
  ngOnInit(): void {
  }

  handleAdd() {
    const newTodo: Todo = {
      id: uuid(),
      title: this.todotitle,
      date: new Date(),
      isComplete: false,
    }
    this.todoservice.addTodo(newTodo).subscribe((res)=>{console.log(res)});
    this.todotitle = "";

  }

}
