export const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

export const generateId = (items) =>{
    const lastId = items.reduce((prev , curr) => prev && prev.id > curr.id ? prev.id : curr.id )
    return lastId+1
}