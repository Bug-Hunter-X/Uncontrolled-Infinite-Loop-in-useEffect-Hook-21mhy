```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run after every render, including the initial render
    console.log('Count:', count); // This will log 0, then 1, then 2, etc.
    return () => {
      console.log('Cleanup function ran');
    };
  }, [count]); // Add count to the dependency array to make it run only when count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```