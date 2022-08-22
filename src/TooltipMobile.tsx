import './TooltipMobile.css';

type TooltipMobile = {
  name: string | undefined
  desc: string | undefined
  url: string | undefined
}

function TooltipMobile({name, desc, url}: TooltipMobile) {
  return (
    <a
      target="_blank" 
      rel="noreferrer" 
      href={url ? url : undefined}
      >
      <div className="TooltipMobile">
        <h1>{name}&nbsp;&nbsp;&nbsp;➔</h1>
        <p>{desc}</p>
      </div> 
    </a>
  );
}

export default TooltipMobile;
