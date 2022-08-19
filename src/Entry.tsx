import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import './Entry.css';
import {data, EntryType} from './resources/data'

type EntryProps = EntryType;

function Entry({name, url, img, desc}: EntryProps) {

  const [tooltip, showTooltip] = useState(false);


  return (
    <>
      <a className="Entry" 
        target="_blank" 
        rel="noreferrer" 
        href={url}
        data-tip data-for={name}
        >
        <div 
          onMouseEnter={() => showTooltip(true)}
          onMouseLeave={() => {showTooltip(false)}}>
          <img alt={name} src={img}></img>
        </div>
      </a>
      { tooltip && 
          <ReactTooltip id={name} place="bottom" type="light" effect="float">
            <h1>{name}</h1>
            <span>{desc}</span>
          </ReactTooltip> 
      }
   </>
  );
}

export default Entry;
