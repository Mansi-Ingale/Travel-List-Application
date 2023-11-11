import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);
  

  function handleItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id != id));
  }

  function handleToggleItem(id) {
    setItems((items) => 
      items.map((item) => 
        item.id  === id ? {...item, packed: !item.packed}
        :item
      )
    );
  }

  function handleClear(){
    const confirmed = window.confirm("Are you sure to delete all items?");
    if(confirmed){
      setItems([]);
    }
    
  }
  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleItem} />
        <PackingList items={items} onDelete={handleDelete} onToggle = {handleToggleItem} onClear = {handleClear}/>
        <Stats items = {items}/>
      </div>
    </>
  );
}

export default App;
