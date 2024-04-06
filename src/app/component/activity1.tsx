'use client'
import Rive, {useRive,useStateMachineInput} from 'rive-react'


interface CatProps {
    src: string;
    stateMachineName: string;
    cs:string;
  }
  
  const RIveRunner: React.FC<CatProps> = ({ src, stateMachineName,cs }) => {
    const { RiveComponent } = useRive({
      src: src,
      stateMachines: [stateMachineName],
      autoplay: true,
    });
  
    return (
      <div className={cs}>
        <RiveComponent />
      </div>
    );
  };
  
  export default RIveRunner;