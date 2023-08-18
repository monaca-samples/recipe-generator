
import HomePage from '../pages/home.jsx';
import IngredientsPage from '../pages/ingredients.jsx';
import LoadingPage from '../pages/loading.jsx';
import RecipePage from '../pages/recipe.jsx';
import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/ingredients/',
    component: IngredientsPage,
  },
  {
    path: '/loading/',
    component: LoadingPage
  },
  {
    path: '/recipe/',
    component: RecipePage
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
