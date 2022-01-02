import * as C from "./styles";
import { Item } from "../../types/Item";

type Props ={
    onADD:(item:Item) => void
}

export const ImputArea = ({onADD}:Props) => {

    const handleAddEvent = () => {
        let newItem: Item ={
            date:new Date(2021,12,16),
            category: 'food',
            title:'Item de test',
            value:250.25
        }
        onADD(newItem)
    }

  return(
      <C.Container>
          <button onClick={handleAddEvent}>Adicionar</button>

      </C.Container>

  )
}