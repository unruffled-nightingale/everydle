import './App.css';
import MemoEntry from './components/Entry';
import GenreSplitter from './components/GenreSplitter';
import Title from './components/Title';
import Thanks from './components/Thanks';
import {data, EntryType} from './resources/data'
import { useState } from 'react';
import {isMobile} from 'react-device-detect';
import TooltipMobile from './components/TooltipMobile';
import TooltipDesktop from './components/TooltipDesktop';


function App() {

  const [selectedName, setSelectedName] = useState<string | undefined>(undefined);
  const [selectedUrl, setSelectedUrl] = useState<string | undefined>(undefined);
  const [selectedDesc, setSelectedDesc] = useState<string | undefined>(undefined);

  return (
    <div className="App">
      <Title/>
      {(data).map((genre: Record<string, EntryType[]>) => 
        Object.entries(genre).map((g) => (
            <>
              <GenreSplitter key={g[0]} genre={g[0]}/>
              { g[1].map((v: EntryType) => 
              <MemoEntry 
                key={v.name} 
                name={v.name} 
                url={v.url} 
                img={v.img} 
                desc={v.desc}
                setSelectedName={setSelectedName}
                setSelectedDesc={setSelectedDesc}
                setSelectedUrl={setSelectedUrl}
                /> 
                )}
            </>
          )
        )
      )}
      { isMobile && selectedName && <TooltipMobile name={selectedName} desc={selectedDesc} url={selectedUrl}/> }
      { !isMobile && selectedName && <TooltipDesktop name={selectedName} desc={selectedDesc}/> }
      <Thanks/>
    </div>
  );
}

export default App;
