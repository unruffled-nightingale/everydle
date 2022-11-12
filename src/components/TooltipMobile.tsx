import './TooltipMobile.css';

type TooltipMobileProps = {
  name: string | undefined
  desc: string | undefined
  url: string | undefined
}

function TooltipMobile({name, desc, url}: TooltipMobileProps) {

  return (
    <a
      target="_blank" 
      rel="noreferrer" 
      href={url ? url : undefined}
      >
      <div className="TooltipMobile">
        <h1>{name}</h1>
        <p>{desc}</p>
        <span>GO TO WEBSITE&nbsp;➔</span>
      </div> 
    </a>
  );
}

export default TooltipMobile;
