import { Link } from "react-router-dom";

function Movie({ id, title, summary, genres, coverImg }) {
  return (
    <div>
      <img src={coverImg} alt="" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       <h1>The Coins!</h1>
//       {loading ? (
//         <strong>Loading...</strong>
//       ) : (
//         <select>
//           {coins.map((item, index) => (
//             <option key={index}>
//               {item.name}({item.symbol}): ${item.quotes.USD.price} USD
//             </option>
//           ))}
//         </select>
//       )}
//     </div>
//   );
// }
