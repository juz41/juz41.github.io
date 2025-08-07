+++
title = "Liczby rzeczywiste"
date = 2025-08-06T00:00:00Z
math = true
+++
{{< katex />}}


## 1. Zbiory liczb

- **Liczby naturalne** - \\( \mathbb{N} \\) - {\\( 0, 1, 2, 3, \ldots \\)}
- **Liczby całkowite** - \\( \mathbb{Z} \\) - {\\( \ldots, -3, -2, -1, 0, 1, 2, 3 \ldots \\)}
- **Liczby wymierne** - \\( \mathbb{Q} \\) - takie liczby, które można przedstawić za pomocą ułamka wymiernego, gdzie licznik i mianownik są liczbami całkowitymi
- **Liczby rzeczywiste** - \\( \mathbb{R} \\) - wszystko co wcześniej i liczby niewymierne - na przykład liczba \\( \pi \\)

{{% hint warning %}}
Symbole {} oznaczają zbiór, \\( \in \\) przynależność do danego zbioru. Wszystko co znajduje się wewnątrz należy do danego zbioru. Przykładowo: \\( 1 \in \\) {\\( 1, 2 \\)} - liczba jeden należy do zbioru zawierającego tylko ją i dwójkę.
{{% /hint %}}

## 2. Wartość bezwzględna

Wartość bezwzględna liczby \\( x \\) jest definiowana jako:
```katex
|x| =  \begin{cases}  x & \text{jeśli } x \geq 0 \\  -x & \text{jeśli } x < 0  \end{cases}
```

Możemy to sobię wyobrazić jako odległość liczby od zera - w tym przypadku nie ma znaczenia czy liczba jest po lewo, czy po prawo od zera - dlatego \\( |x| = |-x| \\).


## 3. Podzielność

Mówimy że liczba \\( a \\) jest podzielna przez \\( b \\) wtedy i tylko wtedy, gdy przy dzieleniu \\( a \\) przez \\( b \\) otrzymamy liczbę całkowitą. Mówimy wtedy, że \\( b \\) jest dzielnikiem \\( a \\). 
Łatwo zauważyć że taka sytuacja wymusza istenienie liczby \\( k \\) takiej, że:
```katex
a = k \cdot b
```
W sytuacji, gdy wynik nie jest całkowity możemy znaleźć ile maksymalnie \\( b \\) zmieści się w \\( a \\) i ile nam zostanie. To wymusza istnienie \\( k \\) i \\( r \\) takich, że:
```katex
a = k \cdot b + r
```
\\( r \\) nazywamy resztą z dzielenia.

Przykładowe zasady podzielności przez:
- 2 - ostatnia cyfra liczby jest parzysta (ostatnia cyfra jest podzielna przez 2)
- 3 - suma cyfr jest podzielna przez 3
- 5 - ostatnia cyfra to 0 lub 5 (ostatnia cyfra jest podzielna przez 5)

## 4. Potęgi
Niech \\( n \\) będzie liczbą całkowitą dodatnią. Dla dowolnej liczby \\( a \\) definiujemy jej \\( n \\)-tą potęgę:
```katex
a^n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n\ \text{razy}}.
```

{{% hint warning %}}
Oczywiście liczby możemy podnosić do potęgi nie tylko gdy \\( n \\) jest całkowite, chwilowo jednak takich operacji nie definijemy.
{{% /hint %}}

Ile wynosi \\( 3^2 \\)?
{{< answer >}}
\\( 9 \\)
{{< /answer >}}
