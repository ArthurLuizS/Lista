import * as C from './styles'
import {item} from '../../types/item'
import { useState, KeyboardEvent } from 'react'


type Props = {
    item: item;
    taskId :(taskId : number, done: boolean) => void
}

export const ListItem = ({item , taskId} : Props) =>{

    const [isChecked, setisChecked] = useState(item.done);

    
    const catchId = (checked : boolean) =>{

        setisChecked (checked)
        taskId (item.id - 1, checked)

    }
    
    
    return(
         <C.container done = {isChecked}> 
            <input 
                type ='checkbox'
                 checked={isChecked}
                 onChange={e => catchId(e.target.checked)}   
                 
            />
            <label> {item.name} </label> 
         </C.container>
    )
}