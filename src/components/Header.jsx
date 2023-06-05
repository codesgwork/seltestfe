import { Link } from 'react-router-dom';
import { HeaderNavLink } from '../routes/HeaderNavLink';

export const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='logo'>
        <div className='title'>
          <h1>SEL</h1>
          <p>Demo App </p>
        </div>
      </Link>
      <HeaderNavLink />
    </div>
  );
};
