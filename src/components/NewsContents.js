import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NewsList from '../components/NewsList';
import Footer from '../components/Footer';
import useFetch from '../components/useFetch';

const NewsContents = ({category, heading}) => {

  if(!category) {

  const eachUrl = process.env.REACT_APP_NO_CATEGORY_KEY;

  }

  const eachUrl = process.env.REACT_APP_CATEGORY_KEY;

  const { results, isPending, error } = useFetch(eachUrl);

  return (
    <div className="news-main">
      <Navbar />
      <h2>{ heading }</h2>
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div>}
      {results && <NewsList results={results} /> }
      <div className="categories">
        <Link to="/health"><button>Health</button></Link>
        <Link to="/business"><button>Business</button></Link>
        <Link to="/tech"><button>Tech</button></Link>
        <Link to="/science"><button>Science</button></Link>
        <Link to="/sports"><button>Sports</button></Link>
      </div>
      <Footer />
    </div>
  )
}

export default NewsContents;