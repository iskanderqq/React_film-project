import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

function Main(props){
    return(
        <main className="container content">
            <Search func={props.func}></Search>
            {props.loading ? <Preloader/>: <Movies api={props.api}></Movies> }
            
            
        </main>
    )
}
export default Main;