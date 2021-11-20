import * as C from './styles'
import {item} from '../../types/item'
import { useState } from 'react'

type Props = {
    item: item;
}

export const ListItem = ({item} : Props) =>{

    const [isCheked, setisChecked] = useState(item.done)

    return(
         <C.container> 
            <input 
                type ='checkbox'
                 checked={isCheked}
                onChange={e => setisChecked(e.target.checked)}     
            />
            <label> {item.name} </label> 
         </C.container>
    )
}