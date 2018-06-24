import { ROUTE } from 'app/constants';

const defaultMenuProps = {
  logoRoute: ROUTE.DASHBOARD,
  primaryMenuRoutes: [],
};
export const publicMenuProps = Object.assign({}, defaultMenuProps, {
  primaryMenuRoutes: [ROUTE.HOME],
});
