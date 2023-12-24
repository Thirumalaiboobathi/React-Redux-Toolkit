import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import {store} from './reducer/store'; // Import your Redux store
import PrivateRoute from './router/privateRoute';
import { AllRoutes } from './router/router';
import Login from './screens/login/login';
import Home from './screens/home/home';
import AddTodo from './screens/Addtodo/additems';
import Register from './screens/login/register';
import ContactScreen from './screens/contact/contact';
import ProfilePage from './screens/profile/profile';
import AboutScreen from './screens/about/about';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Home Route */}
          <Route path={'/'} element={<Login />} />

          {/* Login Route */}
          <Route path={AllRoutes.login} element={<Login />} />

          <Route path={AllRoutes.register} element={<Register />} />

          <Route path={AllRoutes.contact} element={<ContactScreen />} />

          <Route path={AllRoutes.profile} element={<ProfilePage />} />

          <Route path={AllRoutes.about} element={<AboutScreen />} />

          {/* Home Route */}
          <Route
            path={AllRoutes.home}
            element={
              <PrivateRoute path={AllRoutes.home}>
                <Home />
              </PrivateRoute>
            }
          />

          {/* Profile Route */}
          <Route
            path={AllRoutes.additems}
            element={
              <PrivateRoute path={AllRoutes.additems}>
                <AddTodo />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
