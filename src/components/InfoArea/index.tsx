import { formatCurrenteMonth } from "../../helpers/dateFilter";
import * as C from  './styles'
import { ResumeItem } from "../ResumeItem";


type Props ={
    currenteMonth                   : string;
    onMonthChange                   : (newMonth: string) => void;
    income                          : number;
    expense                         : number;
}
export const InfoArea = ({currenteMonth, onMonthChange, income, expense}:Props) => {

  const handlePrevMonth = () => {
    let [year,month]                = currenteMonth.split('-')
    let currentDate                 = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() -1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+ 1}`)

  }
  const handleNextMonth = () => {
    let [year,month]                = currenteMonth.split('-')
    let currentDate                 = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() +1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+ 1}`)
  }
    return(
      <C.Container>
          <C.MonthArea>
            <C.MonthArrow onClick   = {handlePrevMonth}>⬅️</C.MonthArrow>
            <C.MonthTitle>{formatCurrenteMonth(currenteMonth)}</C.MonthTitle>
            <C.MonthArrow onClick   = {handleNextMonth}>➡️</C.MonthArrow>
          </C.MonthArea>
          <C.ResumeArea>
            <ResumeItem title       = "Receita"value={income}/>
            <ResumeItem title       = "Despesas" value={expense}/>
            <ResumeItem 
            title= "Balanço" 
            value={income - expense}
            color={(income - expense) < 0 ? 'red' : 'green'}
            />
          </C.ResumeArea>
      </C.Container>
  )
}