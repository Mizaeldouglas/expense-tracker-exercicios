import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";
import { categories } from '../../data/categories'
import { Category } from "../TableItem/styles";

type Props ={
    onADD:(item:Item) => void
}

export const ImputArea = ({onADD}:Props) => {
    const [dateField, setDateField] = useState('')
    const [titleField, setTitleField] = useState('')
    const [categoryField, setCategoryField] = useState('')
    const [valueField, setValueField] = useState(0)
    
    let categoryKeys:string[] = Object.keys(categories)

    const handleAddEvent = () => {
       let errors:string[]= []

       if(isNaN(new Date(dateField).getTime())){
           errors.push('Data inválida')
       }if(!categoryKeys.includes(categoryField)){
           errors.push('categoria inválida')
       }if(titleField === ''){
           errors.push('Titulo Vazio')
       }if(valueField <= 0){
           errors.push ('Valor Inválido')
       }if(errors.length > 0 ){
           alert(errors.join('\n'))
       }else{
           onADD({
               date:new Date(dateField),
               category:categoryField,
               title:titleField,
               value:valueField
           })
           clearFields()
       }
    }
     
    function handleRemoverEvent(){ 
      window.location.reload(); 
  }

    const clearFields = () => {
        setDateField('');
        setCategoryField('');
        setTitleField('');
        setValueField(0);
      }
  return(
      <C.Container>
        <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input type       = "date" value={dateField} onChange={e => setDateField(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select value     = {categoryField} onChange={e => setCategoryField(e.target.value)}>
            <>
              <option></option>
              {categoryKeys.map((key, index) => (
                <option key   = {index} value={key}>{categories[key].title}</option>
              ))}
            </>
          </C.Select>
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Título</C.InputTitle>
          <C.Input type       = "text" value={titleField} onChange={e => setTitleField(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Valor</C.InputTitle>
          <C.Input type       = "number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
        </C.InputLabel>
        <C.InputLabel className="ButtonRemove" >
          <C.InputTitle>&nbsp;</C.InputTitle>
          <C.ButtonAdd onClick   = {handleAddEvent}>Adicionar</C.ButtonAdd>
        </C.InputLabel>
        <C.InputLabel className="ButtonRemove" >
          <C.InputTitle>&nbsp;</C.InputTitle>
        <C.ButtonRemove onClick   = {handleRemoverEvent}>Remover</C.ButtonRemove>
          
        </C.InputLabel>

      </C.Container>

  )
}