import * as C from './App.styles'
import {useState} from 'react'
import { item } from './types/item'
import { ListItem } from './components/ListItem'
import { AddArea} from './components/AddArea'



const App = () =>{

  const [list, setList] = useState<item[]>([
    {id: 1, name: 'Comprar Pão', done: true},
    {id: 2, name: 'Comprar Bolo', done: false},
    {id: 3, name: 'Comprar Salgados', done: false}
  ]);

    const handleAddTask = (taskName : string) =>{
      let newList = [...list];
      newList.push({
        id: list.length + 1,
        name: taskName,
        done: false
      })
      setList(newList)
    }

    const handleAddTaskId = (taskId: number, changeDone : boolean) =>{
      let listTemp = [...list];
      listTemp[taskId].done = changeDone;
      setList(listTemp)
    }

  return(
    <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          <AddArea onEnter = {handleAddTask}/>

          {list.map((item,index) => (
            <ListItem key = {index} item = {item} taskId ={handleAddTaskId}/>
          ))}

        </C.Area>
    </C.Container>
  );
}

export default App;