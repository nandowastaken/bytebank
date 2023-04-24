# Mudanças

<p> Implementei um teste simples da função calculaNovoSaldo, no arquivo index.test.js. </p>

<small>index.test.js</small>

```javascript
import { calculaNovoSaldo } from './index';

test('Testa se depósito está funcionando normalmente', () => {
  const transacao = {
    transacao: 'Depósito',
    valor: 100,
  };

  expect(calculaNovoSaldo(transacao, 0)).toBe(100);
});

test('Testa se transferência está funcionando bem', () => {
  const transacao = {
    transacao: 'Transferência',
    valor: 100,
  };

  expect(calculaNovoSaldo(transacao, 0)).toBe(-100);
});
```
