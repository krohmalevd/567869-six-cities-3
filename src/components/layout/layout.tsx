import { Outlet, useLocation } from 'react-router-dom';
import Logo from '../logo';
import { AppRoute } from '../../const';

const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let shouldRenderUser = true;

  if (pathname === AppRoute.Root) {
    rootClassName = ' page--gray page--main';
  } else if (pathname === AppRoute.Login) {
    rootClassName = ' page--gray page--login';
    shouldRenderUser = false;
  }

  return {rootClassName, shouldRenderUser};
};


function Layout() {
  const { pathname } = useLocation();
  const { rootClassName, shouldRenderUser } = getLayoutState(pathname as AppRoute);

  return (
    <div className={`page${rootClassName}`} >
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            {
              shouldRenderUser ? (
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">3</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              ) : null
            }
          </div>
        </div>

      </header>
      <Outlet />
    </div >
  );
}

export default Layout;

