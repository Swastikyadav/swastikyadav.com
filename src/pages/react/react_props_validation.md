---
path: 'react-props-validation'
title: 'React Props Validation'
category: 'React JS'
featuredImage: ../../images/proptype.png
---

So, you have been working with react basics for a while now. And this post will take you through a bit advanced concept of ReactJS. **Typechecking with PropTypes**.

We use a lot of props in React. Today we will learn how to validate the datatype of those props. **React Props Validation**.

## Intall and import prop-types in your component.

1. Install `prop-types` package.

```bash
yarn add prop-types
```

OR

```bash
npm install prop-types
```

2. Import `prop-types` in your component.

```js
import PropTypes from "prop-types";

function Greeting(props) {
  return(
    <h1>Hello {props.name}</h1>
  );
}

Greeting.propTypes = {
  name: PropTypes.string
}
```

Here we imported the `prop-types` and used it to validate that the name which we are receiving as props should be of type string. If name type is not string it will warn you in browser console.

## PropTypes Validators

PropTypes provide a various validators to check our props from all different angels.

#### Prop Types

```js
...

Greeting.propTypes = {
  array: PropTypes.array,
  boolean: PropTypes.bool,
  function: PropTypes.func,
  number: PropTypes.number,
  string: PropTypes.string,
  symbol: PropTypes.symbol,
}
```

Notice that for boolean its `bool` and for function its `func`.

#### Check If a prop is an instance of a class.

```js
...

Greeting.propTypes = {
  greetMessage: PropTypes.instanceOf(Message),
}
```

#### If a prop could be one of many types.

```js
...

Greeting.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ])
}
```

#### If you want to validate array of a specific type. Like array of objects.

```js
...

Greeting.propTypes = {
  arrayOfObject: PropTypes.arrayOf(PropTypes.object)
}
```

#### If your prop is an object and you want to validate its values.

```js
...

Greeting.propTypes = {
  objectProp: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  })
}
```

#### To make sure that prop is present and not empty. Just chain isRequired with any of the above examples.

```js
...

Greeting.propTypes = {
  name: PropTypes.string.isRequired
}
```

## Default Props

You can also set default props. If props is empty the default props will be used.

```js
import PropTypes from "prop-types";

function Greeting(props) {
  return(
    <h1>Hello {props.name}</h1>
  );
}

Greeting.defaultProps = {
  name: "Sam Smith"
}
```

If there is no name in props, Sam Smith will be used.

**Soon I will update this post with Custom Validators**. Till then, I hope you got something out of this post and Thank you for reading.
