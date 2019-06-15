## **StopFactor-UI**

# Структура кода

## Разница между **Container** и **Component**
**Container**  —  компонент, в котором принимают и работают с данными (statefull - содержит внутренне состояние [state]).

**Component** - компонент, в котором отображаются данные (stateless - без внутреннего состояния [state]).

---

## Как `импортить иконки` из **@material-ui/icons** ?

Если импоритить картинки следующим способом:
```tsx
import { Send as SendIcon } from '@material-ui/icons';
```
То в бандл будет тянуться весь пакет с иконками, даже если мы используем только **одну** иконку (размер пакета около `4.6МБ`).

Чтобы этого избежать, *рекомендуется* использовать следующий вариант:

```tsx
import SendIcon from '@material-ui/icons/Send';
```
Тогда размер бандла `значительно уменьшится`.

## Как структурировать компоненты, внутри своего компонента?

Разрабатываем компонент **MyTable**

```
# Пример MyTable c SubComponents [`MyRow`, `MyColumn`]

containers
│   README.md
│
└───MyTable
│   │   index.tsx
│   │   MyTable.tsx
│   │
│   └───components
│       │   index.tsx
│       │   MyRow.tsx
│       │   MyColumn.tsx
│       │   ...
│
...
```

Внутри компонента **MyTable** создана папка `components`;

Внутри папки `components` расположены **под-компоненты (SubComponents)** [`MyRow`, `MyColumn`], которые используются `только в родительском` компоненте (**MyTable**);

Если **SubComponent** используется не только в **MyTable**, то его нужно вынести в глобальную папку **components**, чтобы его можно было *переиспользовать* в другом компоненте.

```
# Схема: пример MyTable c SubComponents [`MyColumn`] и компонента components/MyRow

src
│
│───components
│   │   ...
│   │
│   └───MyRow
│       │   index.tsx
│       │   MyRow.tsx
│
│───containers
│   │   ...
│   │
│   └───MyTable
│       │   index.tsx
│       │   MyTable.tsx
│       │
│       └───components
│           │   index.tsx
│           │   MyColumn.tsx
│           │   ...
│
...
```

---

## Пример кода containers/MyTable/index.tsx
```ts
# файл: containers/MyTable/index.tsx

export { MyTable } from './MyTable';
```
При этом `export` в компоненте `containers/MyTable/MyTable.tsx` будет иметь аналогичный вид:
```ts
# файл: containers/MyTable/MyTable.tsx
...
const MyTable = () => { ... };
...
export { MyTable } from './MyTable';
```

Плюсы от такого `export`
1. когда Мы будем использовать компонент **MyTable** допустим в папке `src/Route/Route.tsx`
```ts
# файл: src/Route/Route.tsx

import { MyTable, MyApp, MyStory, ... } from '../containers';

const Routes = () => (
  <>
    <Route ... component={MyTable} />
    <Route ... component={MyApp} />
    <Route ... component={MyStory} />
    ...
  </>
);

export default Routes;
```
Если `export` сделать через **default**, то файл бы выглядел:
```ts
# файл: src/Route/Route.tsx

import MyTable from '../containers/MyTable';
import MyApp from '../containers/MyApp';
import MyStory from '../containers/MyStory';
...

const Routes = () => (
  <>
    <Route ... component={MyTable} />
    <Route ... component={MyApp} />
    <Route ... component={MyStory} />
    ...
  </>
);

export default Routes;
```
Минус такого подхода в том, что на `каждый` файл нужно писать отдельный **import**.

---

---

## Вариатны **`импортов / ехпортов`** в компонентах (import/export)

Пример экспорта компонента **MyComponent.tsx**:

```ts
// файл /src/components/MyComponent/MyComponent.tsx
import React from 'react';

const MyComponent = () => <h1>MyComponent !<h1>;

export { MyComponent };

// Если нужен export default, то
export default MyComponent;
```

##### 1 Вариант - `{ MyComponent as default }`
```ts
// файл /src/components/MyComponent/index.tsx \
export `{ MyComponent as default }` from './MyComponent';
```
```ts
// файл /src/App.tsx \
import `MyComponent` from './MyComponent';
```

[`+`] `Плюсы { MyComponent as default }` подхода: [`+`]
- экспорт только `одного` `default` компонента (изоляция кода).

[`-`] `Минусы { MyComponent as default }` подхода: [`-`]
- экспорт `только` одного `default` компонента (не удобно использовать компонент);
- на каждый компонент будет `свой импорт` ( \
  `. лишний код`: \
  `. .  import MyComponent from './components/MyComponent';` \
  `. .  import MyTest from './components/MyTest';` \
  `. .  import MyTest2 from './components/MyTest2';` \
  ).
---

##### 2 Вариант - `{ default as MyComponent }`
```ts
// файл /src/components/MyComponent/index.tsx \
export `{ default as MyComponent }` from './MyComponent';
```
```ts
// файл /src/App.tsx \
import `{ MyComponent }` from './MyComponent';
```

[`+`] `Плюсы { default as MyComponent }` подхода: [`+`]
- экспорт только `одного` компонента (изоляция кода).

[`-`] `Минусы { default as MyComponent }` подхода: [`-`]
- `лишний код` в index.tsx;
- `лишний код` в MyComponent.tsx (нужно дописывать `export default`);

---

##### 3 Вариант - `{ MyComponent }`
```ts
// файл /src/components/MyComponent/index.tsx \
export `{ MyComponent }` from './MyComponent';
```
```ts
// файл /src/App.tsx \
import `{ MyComponent }` from './MyComponent';
```

[`+`] `Плюсы { MyComponent }` подхода: [`+`]
- `легко заимпортить` компоненты;
- `export` только требуемых компонентов;
- подходит для варианта, `когда много export-ов` внутри компонента (когда тесты есть).

[`-`] `Минусы { MyComponent }` подхода: [`-`]
- нужно писать `дополнительный код`;
- держать в `актуальном состоянии index.tsx`.
---

##### 4 Вариант - `*`
```ts
// файл /src/components/MyComponent/index.tsx \
export `*` from './MyComponent';
```
```ts
// файл /src/App.tsx \
import `{ MyComponent }` from './MyComponent';
```

[`+`] `Плюсы (*)` подхода: [`+`]
- `легко заимпортить` компоненты;
- `меньше` кода ( \
  `. import { MyComponent, MyTest, MyTest2 } from './components';` \
  ).

[`-`] `Минусы (*)` подхода: [`-`]
- не всегда корретный метод, так как `экспортятся все функции/компоненты/переменные внутри комопнента` у которых стоит 'export';
- `когда будем писать тесты`, то от экспорта звездочка '*' лучше будет отказаться, так для тестирования нужно будет много лишних компонентов экспортить. И эти компоненты не нужны в других компонентах;
- нужен `дополнительный index.tsx` файл в корне папки `/src/components/index.tsx`, который нужно держать в актуальном состоянии.

---

---

## Хорошие практики (Best Practices)

1. `() => { return A; }` vs  `() => A;`

    > Если внутри тела функции нет дополнительных вычислений, то проще написать без `return`:

    * `(a: number) => { return a * a; };`

    > без **return**

    * `(a: number) => a * a;`

---

## **Установка** зависимостей

```bash
yarn
```

### Запуск

```bash
yarn start
```

# *Стэк*

### **Данные**
1. GraphQl (Apollo)

---
### **Роуты**
1. React-Router

---
### **Стили**
1. Linaria
2. Файлы *.css
3. Inline styles

---
### **Валидация кода**
1. Prettier
2. Tsc

---

### **Webpack**

1. HardSourceWebpackPlugin ( https://github.com/mzgoddard/hard-source-webpack-plugin ) - кеширование dev сборки, если что-то идет не так, то 'yarn clean'.