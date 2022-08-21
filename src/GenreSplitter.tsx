import './GenreSplitter.css';

type GenreSplitterProps = {
  genre: string
}

function GenreSplitter({genre}: GenreSplitterProps) {
  return (
    <div className="GenreSplitter">
      <p>{genre}</p>
    </div>
  );
}

export default GenreSplitter;
