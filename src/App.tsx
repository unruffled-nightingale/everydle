import './App.css';
import Entry from './Entry';
import GenreSplitter from './GenreSplitter';
import Title from './Title';
import {data, EntryType} from './resources/data'


function App() {

  return (
    <div className="App">
      <Title/>
        {(data).map((genre: Record<string, EntryType[]>) => 
          Object.entries(genre).map((g) => (
              <>
                <GenreSplitter genre={g[0]}/>
                { g[1].map((v: EntryType) => <Entry key={v.name} name={v.name} url={v.url} img={v.img} desc={v.desc}/> )}
              </>
            )
        )
      )}
    </div>
  );
}

export default App;
