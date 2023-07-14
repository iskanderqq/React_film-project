import Movie from "./Movie";

export default function Movies(props) {
    
        const{api =[]} = props
        return <div className="movies">
        {   
            api.length ?
            api.map(elem => (<Movie key={elem.imdbID} title={elem.Title} year = {elem.Year} type={elem.Type} img = {elem.Poster}/>)): <h4>Nothing</h4>
        }
    </div>;
   
    
}