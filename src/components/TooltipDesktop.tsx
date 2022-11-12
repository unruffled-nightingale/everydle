import './TooltipDesktop.css';
import ReactTooltip from 'react-tooltip';

type TooltipDesktopProps = {
  name: string | undefined
  desc: string | undefined
}

function TooltipDesktop({name, desc}: TooltipDesktopProps) {
  return (
    <ReactTooltip id={name} place="bottom" type="dark" effect="float">
      <div className="TooltipDesktop">
        <h1>{name}</h1>
        <p>{desc}</p>
        <p></p>
      </div>
    </ReactTooltip> 
  );
}

export default TooltipDesktop;
