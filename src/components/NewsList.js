const NewsList = ({results}) => {

  return (

    <div className="news-row">
      { results.map((result) =>
        <div key={result.url} className="news-details">
          <img src={result.urlToImage} alt="News" height="37%" />
          <a href={ result.url } target="_blank"><h4>{ result.title }</h4></a>
          <p>{ result.source.name }</p>
        </div>
      )}
    </div>
  );
}

export default NewsList;