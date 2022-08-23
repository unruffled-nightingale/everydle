import './Thanks.css';


function Thanks() {
  return (
    <div className="Thanks">
    <p>Thank you to those who helped compile this list:</p>
    <a href='https://gist.github.com/maxspero/0a2f536b9561d829caf6bd994a34193d'
       target="_blank" 
       rel="noreferrer">
         <p className="url">-&nbsp;&nbsp;maxspero</p>
    </a>
    <a href='https://nerdschalk.com/wordle-variants-27-different-types-of-wordle-games-you-can-play/'
       target="_blank" 
       rel="noreferrer">
         <p className="url">-&nbsp;&nbsp;Haripriya</p>
    </a>
    <a href='https://www.pastemagazine.com/games/best-wordle-variants/'
       target="_blank" 
       rel="noreferrer">
         <p className="url">-&nbsp;&nbsp;Shane Ryan</p>
    </a>
    <a href='https://www.businessinsider.com/wordle-alternative?r=US&IR=T'
       target="_blank" 
       rel="noreferrer">
         <p className="url">-&nbsp;&nbsp;William Antonelli</p>
    </a>
  </div>
  );
}

export default Thanks;
