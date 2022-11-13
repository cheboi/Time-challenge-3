//The useMemo Hook only runs when one of its dependencies update.
// Returns a Momized value
//The useMemo Hook can be used to keep expensive,
//resource intensive functions from needlessly running.  

//To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. 
//This will cause the function to only run when needed.


const [count, setCount] = useState(0);
const [todos, setTodos] = useState([]);
const calculation = useMemo(() => expensiveCalculation(count), [count]);

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

