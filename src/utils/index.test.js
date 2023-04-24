import { calculaNovoSaldo } from './index';

test('Testa se calculaNovoSaldo está funcionando de acordo', () => {
  const transacao = {
    transacao: 'Depósito',
    valor: 100,
  };
  expect(calculaNovoSaldo(transacao, 0)).toBe(100);
});
