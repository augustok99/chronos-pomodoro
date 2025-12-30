import { DefaultInput } from '../DefaultInput'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { PlayCircleIcon } from 'lucide-react'

export function MainForm() {

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Deu Certo");
  }
  
  return (
    
    <form onSubmit={handleCreateNewTask}  className="form" action="">
        <div className="formRow">
          <DefaultInput labelText='task' id='meuInput' type="text" placeholder='Digite algo' defaultValue='' />
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