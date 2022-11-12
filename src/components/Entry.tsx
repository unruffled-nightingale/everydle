import './Entry.css';
import {EntryType} from '../resources/data'
import {isMobile} from 'react-device-detect';
import {memo} from 'react';

type EntryProps = EntryType & {
  setSelectedName: (x: string | undefined) => void
  setSelectedDesc: (x: string | undefined) => void
  setSelectedUrl: (x: string | undefined) => void
}

function Entry({name, url, img, desc, setSelectedName, setSelectedDesc, setSelectedUrl}: EntryProps) {

  const setInfo = () => {
    setSelectedName(name)
    setSelectedDesc(desc)
    setSelectedUrl(url)
  }

  const unsetInfo = () => {
    setSelectedName(undefined)
    setSelectedDesc(undefined)
    setSelectedUrl(undefined)
  }

  return (
      <a className="Entry" 
        target="_blank" 
        rel="noreferrer" 
        role="button"
        href={!isMobile ? url : '/#'}
        data-tip data-for={name}
        >
        <div 
            onClick={setInfo}
            onMouseEnter={setInfo}
            onMouseLeave={unsetInfo}
          >
          <img alt={name} src={img}></img>
        </div>
      </a>
  );
}

const MemoEntry = memo(Entry);
export default MemoEntry;
