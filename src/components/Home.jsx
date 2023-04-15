import {Link} from 'react-router-dom'
function Home() {
    return ( 
        <div>
        <Link to='/help' > 
        <button>help</button>
        </Link>
        <Link to='/team' >
            <button>teams</button>
        </Link>
        </div>
     );
}
 
export default Home;