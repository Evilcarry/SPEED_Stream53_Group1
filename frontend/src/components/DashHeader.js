import { Link } from 'react-router-dom'

const DashHeader = () => {
    const content = (
        <header className="dash-header">
            <div className="dash-heeader__container">
                <Link to="/dash/articles">
                    <h1 className="dash-header__Title">SPEED Articles</h1>
                </Link>
                <nav className="dash-header__nav">
                    {/* Add buttons here*/}
                </nav>
            </div>
        </header>
    )
    return content
}
export default DashHeader