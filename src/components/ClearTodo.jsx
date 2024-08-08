const ClearTodo=({setTask})=>{
    const handleClearTodo = () => {
        setTask([]);
      };
    return (
        <section>
        <button className="clear-btn" onClick={handleClearTodo}>
          Clear All
        </button>
      </section>
    )
}
export default ClearTodo;