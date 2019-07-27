import service from '../../service';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

export function fetchData() {
  return service.get(url);
}