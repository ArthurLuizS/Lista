import * as C from './App.styles'
import {useState} from 'react'
import { item } from './types/item'
import { ListItem } from './components/ListItem'


const App = () =>{

  const [list, setList] = useState<item[]>([
    {id: 1, name: 'Comprar Pão', done: false},
    {id: 2, name: 'Comprar Bolo', done: false}
  ]);

  return(
    <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          {/*Área para adicionar novos itens*/ }

          {list.map((item,index) => (
            <ListItem key = {index} item = {item}/>
          ))}

        </C.Area>
    </C.Container>
  );
}

export default App;