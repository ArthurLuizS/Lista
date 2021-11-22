import *as C from './styles'

export const AddArea = () => {
    return(
        <C.container> 
            <div className="image"> ➕ </div>
            <input 
            type="text"
            placeholder = "Adicionar tarefa" />

        </C.container>
    );
}