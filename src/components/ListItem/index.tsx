import * as C from './styles'
import {item} from '../../types/item'

type Props = {
    item: item;
}

export const ListItem = ({item} : Props) =>{
    return(
         <C.container> 
             {item.name}
         </C.container>
    )
}