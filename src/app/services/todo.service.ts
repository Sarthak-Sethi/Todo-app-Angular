import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from "../TodoModel";
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor() {
    this.todos = [
      {
        id: "1",
        title: "Angular Course from Coursera",
        isComplete: false,
        date: new Date()
      },
      {
        id: "5",
        title: "Tic Tac Toe using Angular",
        isComplete: true,
        date: new Date()
      },
      {
        id: "2",
        title: "Safe id of thomson reuters",
        isComplete: false,
        date: new Date()
      },
      {
        id: "3",
        title: "Update vaccination details in GSS",
        isComplete: false,
        date: new Date()
      },
      {
        id: "4",
        title: "Instagram Bot using Angular",
        isComplete: false,
        date: new Date()
      },
    ];
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  changeStatus(todo : Todo){
    this.todos.map((everytodo) => {
      everytodo.id === todo.id ? everytodo.isComplete = !everytodo.isComplete : everytodo.isComplete = everytodo.isComplete ;
    })
  }

  deleteTodo(todo : Todo){
    const index = this.todos.findIndex((everytodo) => {
      return todo.id === everytodo.id ;
    });
    this.todos.splice(index,1);
  }

}
