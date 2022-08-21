import './GenreSplitter.css';

type GenreSplitterProps = {
  genre: string
}

function GenreSplitter({genre}: GenreSplitterProps) {
  return (
    <div style={{fontFamily: "Lato", width: "30%", borderBottom: "1px solid lightgrey", paddingTop: "48px"}}>
    <p style={{margin: 0, paddingBottom: "8px", paddingLeft: "4px"}}>{genre}</p>
    </div>
  );
}

export default GenreSplitter;
