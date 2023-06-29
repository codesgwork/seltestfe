import { NavLink } from 'react-router-dom';

export const HeaderNavLink = () => {
  return (
    <div className='headerNavLink'>
      <NavLink to='/courses'>Courses</NavLink>
      <a href='https://www.skyinnk.com/' target='_blank' className='skyinnk'>
        skyinnk official website
      </a>
    </div>
  );
};
