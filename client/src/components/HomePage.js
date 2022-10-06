import { Link } from 'react-router-dom'

const HomePage = () => {
    const content = (
       <section className="homepage">
        <header>
            <h1> Welcome to <span className="nowrap">SPEED</span></h1>
        </header>
        <main className="homepage__main">
            <p>The SPEED application allows you to look up different methodology claims
                in order to reference your claims with research material. You can also submit
                different articles that you believe should be included in the SPEED database
                and they will be analysed for approval.</p>
        </main>
        <footer>
            <Link to="/login">Log In</Link>
        </footer>
       </section> 
    )
    return content
}
export default HomePage