import FilterProvider from "state/filter/Provider";
import TodosProvider from "state/todos/Provider";

function App() {
  return (
    <TodosProvider>
      <FilterProvider>
        <h1>ola mundo</h1>
      </FilterProvider>
    </TodosProvider>
  );
}

export default App;
