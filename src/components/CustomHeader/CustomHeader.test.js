import { render, fireEvent, screen } from '@testing-library/react';
import CustomHeader from './CustomHeader';
import { IntlProvider } from 'react-intl';
import { HashRouter } from 'react-router-dom';
import Spanish from '../../lang/es.json';

describe('CustomHeader ', () => {
  const setLocaleMock = jest.fn();

  beforeEach(() => {
    setLocaleMock.mockClear();
    render(<IntlProvider locale='es-ES' messages={Spanish}><HashRouter><CustomHeader setMessages={setLocaleMock}></CustomHeader></HashRouter></IntlProvider>);
  });

  test('Control the EN change', () => {
    const button = screen.getByText('EN');
    fireEvent.click(button);
    expect(setLocaleMock).toHaveBeenCalledTimes(1);
  });

  test('Control the ES change', () => {
    const button = screen.getByText('ES');
    fireEvent.click(button);
    expect(setLocaleMock).toHaveBeenCalledTimes(1);
  });
});
