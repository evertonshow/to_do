import TodosApp from "pages/TodosApp";
import FilterProvider from "state/filter/Provider";
import TodosProvider from "state/todos/Provider";

function App() {
  return (
    <TodosProvider>
      <FilterProvider>
        <TodosApp />
      </FilterProvider>
    </TodosProvider>
  );
}

export default App;
