---
title: React hooks - Best practices.
description: In this tutorial, we’ll outline some React Hooks best practices and highlight some use cases with examples, from simple to advanced scenarios.
cover: /images/covers/reactHooks.png
date: 03-12-2021
tags:
  - react
  - webdev
  - hooks
---

<span class="md-detail">This React Hooks tutorial was last updated in January 2021 to include more React Hooks best practices and examples.</span>

React Hooks have a very simple API, but given its massive community and variety of use cases, questions are bound to arise around React Hooks best practices and how to solve common problems.

In this tutorial, we’ll outline some React Hooks best practices and highlight some use cases with examples, from simple to advanced scenarios. To help demonstrate how to solve common React Hooks questions, I built an **accompanying web app** for live interaction with the examples herein.

## React Hooks cheat sheet: Best practices and examples

This React Hooks cheat sheet includes a lot of code snippets and assumes some Hooks fluency. If you’re completely new to Hooks, you may want to start with our **[React Hooks API reference guide](https://blog.logrocket.com/react-reference-guide-hooks-api/)**.

Included in this React Hooks cheat sheet are best practices related to the following Hooks:

- useState
- useEffect
- useContext
- useLayoutEffect
- useReducer
- useCallback
- useMemo
- useRef

### UseState

useState lets you use local state within a function component. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

#### Declare state variable

Declaring a state variable is as simple as calling <span class="md-code">useState</span> with some initial state value, like so: <span class="md-code">useState(initialStateValue)</span>.

```js
const DeclareStateVar = () => {
  const [count] = useState(100);
  return <div> State variable is {count}</div>;
};
```

#### Update state variable

Updating a state variable is as simple as invoking the updater function returned by the <span class="md-code">useState</span> invocation: <span class="md-code">const [stateValue, updaterFn] = useState(initialStateValue);</span>.

<img class="md-image" src="/images/articles/reactHooks/updateStateVariable.gif">

<span class="md-detail">Note how the age state variable is being updated.</span>

Here’s the code responsible for the screencast above:

```js
const UpdateStateVar = () => {
  const [age, setAge] = useState(19);
  const handleClick = () => setAge(age + 1);

  return (
    <div>
      Today I am {age} Years of Age
      <div>
        <button onClick={handleClick}>Get older! </button>
      </div>
    </div>
  );
};
```

#### Why does the React <span class="md-code">useState</span> Hook not update immediately?

React <span class="md-code">useState</span> and <span class="md-code">setState</span> don’t make changes directly to the state object; they create queues to optimize performance, which is why the changes don’t update immediately.

#### React Hooks and multiple state variables

Multiple state variables may be used and updated from within a functional component, as shown below:

<img class="md-image" src="/images/articles/reactHooks/multipleStateVariables.gif">

Here’s the code responsible for the screencast above:

```js
const MultipleStateVars = () => {
  const [age, setAge] = useState(19);
  const [siblingsNum, setSiblingsNum] = useState(10);

  const handleAge = () => setAge(age + 1);
  const handleSiblingsNum = () => setSiblingsNum(siblingsNum + 1);

  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleAge}>Get older!</button>
        <button onClick={handleSiblingsNum}>More siblings!</button>
      </div>
    </div>
  );
};
```

#### Use object state variable

As opposed to strings and numbers, you could also use an object as the initial value passed to <span class="md-code">useState</span>.

Note that you have to pass the entire object to the <span class="md-code">useState</span> updater function because the object is replaced, not merged.

```js
// 🐢 setState (object merge) vs useState (object replace)
// assume initial state is {name: "Ohans"}

setState({ age: 'unknown' });
// new state object will be
// {name: "Ohans", age: "unknown"}

useStateUpdater({ age: 'unknown' });
// new state object will be
// {age: "unknown"} - initial object is replaced
```

<img class="md-image" src="/images/articles/reactHooks/objectStateVariable.gif">
<span class="md-detail">Multiple state objects updated via a state object variable.</span>

Here’s the code for the screencast above:

```js
const StateObject = () => {
  const [state, setState] = useState({ age: 19, siblingsNum: 4 });
  const handleClick = (val) =>
    setState({
      ...state,
      [val]: state[val] + 1
    });
  const { age, siblingsNum } = state;

  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleClick.bind(null, 'age')}>Get older!</button>
        <button onClick={handleClick.bind(null, 'siblingsNum')}>More siblings!</button>
      </div>
    </div>
  );
};
```

#### Initialize state from function

As opposed to just passing an initial state value, state could also be initialized from a function, as shown below:

```js
const StateFromFn = () => {
  const [token] = useState(() => {
    let token = window.localStorage.getItem('my-token');
    return token || 'default#-token#';
  });

  return <div>Token is {token}</div>;
};
```

### Functional setState

The updater function returned from invoking <span class="md-code">useState</span> can also take a function similar to the good ol’ <span class="md-code">setState</span>:

```js
const [value, updateValue] = useState(0);
// both forms of invoking "updateValue" below are valid 👇
updateValue(1);
updateValue((previousValue) => previousValue + 1);
```

This is ideal when the state update depends on some previous value of state.

 <img class="md-image" src="/images/articles/reactHooks/setStateUpdates.gif">

<span class="md-detail">A counter with functional setState updates.</span>

Here’s the code for the screencast above:

```js
const CounterFnSetState = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count value is: {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Plus (+)</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Minus (-)</button>
    </>
  );
};
```

Here’s a **[live, editable useState cheat sheet](https://react-hooks-cheatsheet.com/usestate)** if you want to dive deeper on your own.

Article part copied from **[here](https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/#usestate)**.

If you want to know the rest of react hooks, check out **[this article](https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/#usestate)**.
