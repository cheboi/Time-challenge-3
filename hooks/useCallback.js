// useCallBack reruns Momoised function
//This allows us to isolate resource intensive functions so that they will 
//not automatically run on every render.

// The useCallback Hook only runs when one of its dependencies update.

// This can improve performance.
// resorn to useCallback is to prevent component from re-rendering unless its props 
// have changed

export default function Counter() {
    const [input, setInput] = useState("");
    const [count, setCount] = useState(0);
  
    const incrementCount = React.useCallback(() => setCount(count + 1), [count]);
  
    return (
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={incrementCount}>Increment counter</button>
        <h3>Input text: {input}</h3>
        <h3>Count: {count}</h3>
        <hr />
        <ChildComponent count={count} onClick={incrementCount} />
      </div>
    );
  }
  
  const ChildComponent = React.memo(function ChildComponent({ count, onClick }) {
    console.log("child component is rendering");
    return (
      <div>
        <h2>This is a child component.</h2>
        <button onClick={onClick}>Increment</button>
        <h4>Count: {count}</h4>
      </div>
    );
  });
  