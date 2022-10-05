import { Link } from 'react-router-dom';

const Welcome = () => {
    <Section className="welcome">
        <h1>Welcome!</h1>
        <p><Link to="/dash/articles">View Articles</Link></p>
        <p><Link to="/dash/users">View User Settings</Link></p>
    </Section>
}

export default Welcome