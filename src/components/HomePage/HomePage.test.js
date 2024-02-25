import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Spanish from '../../lang/es.json';
import HomePage from './HomePage';

describe('CustomHeader ', () => {
  let component;

  beforeEach(() => {
    component = render(
      <IntlProvider locale='es-ES' messages={Spanish}>
        <HomePage></HomePage>
      </IntlProvider>
    );
  });

  test('Welcome text', () => {
    expect(component.container).toHaveTextContent('¡Bienvenido!');
  });

  test('Secondary', () => {
    expect(component.container).toHaveTextContent('En esta web podrás almacenar los usuarios que quieras, pero recuerda que no se guardarán en el API... lo siento :(');
  });

  test('Primary', () => {
    expect(component.container).toHaveTextContent('Esta es una aplicación de gestión de usuarios');
  });
});
