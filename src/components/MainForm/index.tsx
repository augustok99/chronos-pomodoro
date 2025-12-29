import { DefaultInput } from '../DefaultInput'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { PlayCircleIcon } from 'lucide-react'
import { useTaskContext } from '../../contexts/TaskContext'

export function MainForm() {
  const { setState } = useTaskContext();
  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: '21:00'
      }
    })
    
  }
  
  return (
    
    <form className="form" action="">
      <button type='button' onClick={handleClick}>Clicar</button>
        <div className="formRow">
          <DefaultInput labelText='task' id='meuInput' type="text" placeholder='Digite algo' disabled defaultValue='Valor Preenchido' />
        </div>

         <div className="formRow">
          <p>Proximo intervalo é de 25 minutos</p>
        </div>

        <div className="formRow">
          <Cycles />
        </div>

        <div className="formRow">
          <DefaultButton icon={<PlayCircleIcon />} color='green' />
        </div>
      </form>
  );
}