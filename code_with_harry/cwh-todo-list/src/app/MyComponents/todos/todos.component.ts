import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor() {
    const localItem = localStorage.getItem('todos');
    if (localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(localItem);
    }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    console.log(todo);
    // this.todos = this.todos.filter((prevTodo) => {
    //   return prevTodo.sno !== todo.sno;
    // });
    this.todos.splice(this.todos.indexOf(todo), 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    // this.todos = this.todos.map((prevTodo) => {
    //   if (prevTodo.sno === todo.sno) {
    //     return { ...prevTodo, active: !todo.active };
    //   } else {
    //     return prevTodo;
    //   }
    // });
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
