export default function Movie(props) {
  const {title, year, type, img} = props
    return <div className="movie card">
        <div className="card-image">
        <img src={img}/>
        <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
        <p>{year}</p>
        <p>{type}</p>
        </div>
  </div>
}