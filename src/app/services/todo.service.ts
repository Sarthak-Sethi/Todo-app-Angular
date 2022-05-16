import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from "../TodoModel";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<Todo[]> {

    return this.http.get<Todo[]>('http://localhost:8080/getTodos', {
      headers: new HttpHeaders(
        { Authorization: this.createBasicAuthenticationHttpHeader() }
      )
    }
    );
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  changeStatus(todo: Todo) {
    this.todos.map((everytodo) => {
      everytodo.id === todo.id ? everytodo.isComplete = !everytodo.isComplete : everytodo.isComplete = everytodo.isComplete;
    })
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.findIndex((everytodo) => {
      return todo.id === everytodo.id;
    });
    this.todos.splice(index, 1);
  }

  createBasicAuthenticationHttpHeader(): string {
    const username = 'sarthak';
    const password = 'sarthak';
    const basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthenticationHeaderString;
  }

}
