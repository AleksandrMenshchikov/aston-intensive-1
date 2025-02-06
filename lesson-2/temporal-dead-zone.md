# Temporal dead zone (TDZ)

Переменная, объявленная с помощью let, const или class, считается находящейся во «временной мертвой зоне» (TDZ) с начала
блока до тех пор, пока выполнение кода не достигнет места, где переменная объявлена ​​и инициализирована.

Находясь внутри TDZ, переменная не была инициализирована значением, и любая попытка доступа к ней приведет к
ReferenceError. Переменная инициализируется значением, когда выполнение достигает места в коде, где она была объявлена.
Если при объявлении переменной не было указано начальное значение, она будет инициализирована значением undefined.

Это отличается от переменных var, которые вернут значение undefined, если к ним обращаются до того, как они были
объявлены. Код ниже демонстрирует другой результат, когда к let и var обращаются в коде до того места, где они
объявлены.

```
{
  // TDZ starts at beginning of scope
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

Термин «временной» используется, поскольку зона зависит от порядка выполнения (времени), а не от порядка, в котором
написан код (позиция). Например, код ниже работает, поскольку, несмотря на то, что функция, использующая переменную let,
появляется до объявления переменной, функция вызывается за пределами TDZ.

```
{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
```

Использование оператора typeof для переменной в ее TDZ приведет к возникновению ReferenceError:

```
{
  typeof i; // ReferenceError: Cannot access 'i' before initialization
  let i = 10;
}
```

Это отличается от использования typeof для необъявленных переменных и переменных, которые содержат значение undefined:

```
console.log(typeof undeclaredVariable); // "undefined"
```

