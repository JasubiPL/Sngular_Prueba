# Prueba técnica de Jasubi Piñeyro 👨‍💻

## Desarrollar 10 casos de prueba en total de la serie: <br> serie(n) = 2fibonacci(n - 2) • 3triangular(n - 2) + 7primo(n - 1)

Levantar Aplicación
```zsh
  npm run dev
```

Lanzar Test
```zsh
  npm run test
```

### Herramientas de construcción:

- Vite.js
- React
- Tailwind
- Jest

***Para comprobar que la aplicación arrojara resultados correctos, se utilizó ChatGPT para obtener el resultado final de las ecuaciones. Esto ayudó para elaborar los test y no tener un falso positivo, ya que si las ecuaciones se realizaban a mano para obtener el resultado correcto que debía dar la aplicación, se corría más riesgo de tener un error***

<table>
  <thead>
    <tr>
      <th>n</th>
      <th>Resultado</th>
      <th>Explicación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>No definido</td>
      <td>No se puede calcular el valor porque los términos Fibonacci y Triangular no están definidos para n = 1.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>14</td>
      <td>2 × fibonacci(2-2) × 3 × Triangular(2-2) + 7primo(2-1) = 2 × 0 × 3 × 0 + 7 × 2 = 0 + 14 = 14</td>
    </tr>
    <tr>
      <td>3</td>
      <td>27</td>
      <td>2 × fibonacci(3-2) × 3 × Triangular(3-2) + 7primo(3-1) = 2 × fibonacci(1) × 3 × Triangular(1) + 7 × 3 = 2 × 1 × 3 × 1 + 7 × 3 = 6 + 21 = 27</td>
    </tr>
    <tr>
      <td>4</td>
      <td>53</td>
      <td>2 × fibonacci(4-2) × 3 × Triangular(4-2) + 7primo(4-1) = 2 × fibonacci(2) × 3 × Triangular(2) + 7 × 5 = 2 × 1 × 3 × 3 + 7 × 5 = 18 + 35 = 53</td>
    </tr>
    <tr>
      <td>5</td>
      <td>121</td>
      <td>2 × fibonacci(5-2) × 3 × Triangular(5-2) + 7primo(5-1) = 2 × fibonacci(3) × 3 × Triangular(3) + 7 × 7 = 2 × 2 × 3 × 6 + 7 × 7 = 72 + 49 = 121</td>
    </tr>
    <tr>
      <td>6</td>
      <td>257</td>
      <td>2 × fibonacci(6-2) × 3 × Triangular(6-2) + 7primo(6-1) = 2 × fibonacci(4) × 3 × Triangular(4) + 7 × 11 = 2 × 3 × 3 × 10 + 7 × 11 = 180 + 77 = 257</td>
    </tr>
    <tr>
      <td>7</td>
      <td>541</td>
      <td>2 × fibonacci(7-2) × 3 × Triangular(7-2) + 7primo(7-1) = 2 × fibonacci(5) × 3 × Triangular(5) + 7 × 13 = 2 × 5 × 3 × 15 + 7 × 13 = 450 + 91 = 541</td>
    </tr>
    <tr>
      <td>8</td>
      <td>1127</td>
      <td>2 × fibonacci(8-2) × 3 × Triangular(8-2) + 7primo(8-1) = 2 × fibonacci(6) × 3 × Triangular(6) + 7 × 17 = 2 × 8 × 3 × 21 + 7 × 17 = 1008 + 119 = 1127</td>
    </tr>
    <tr>
      <td>9</td>
      <td>2317</td>
      <td>2 × fibonacci(9-2) × 3 × Triangular(9-2) + 7primo(9-1) = 2 × fibonacci(7) × 3 × Triangular(7) + 7 × 19 = 2 × 13 × 3 × 28 + 7 × 19 = 2184 + 133 = 2317</td>
    </tr>
    <tr>
      <td>10</td>
      <td>4697</td>
      <td>2 × fibonacci(10-2) × 3 × Triangular(10-2) + 7primo(10-1) = 2 × fibonacci(8) × 3 × Triangular(8) + 7 × 23 = 2 × 21 × 3 × 36 + 7 × 23 = 4536 + 161 = 4697</td
