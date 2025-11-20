import AddTask from "./Components/AddTask";
import TaskSection from "./Components/TaskSection";

const App = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <section className="p-10 backdrop-blur-sm bg-[#ffffff10] rounded-2xl shadow-inner shadow-[#ffffffa1] w-full max-w-3xl">
        <h1 className="text-5xl font-bold text-center">React To-Do App</h1>
        <AddTask />
        <TaskSection />
      </section>
    </div>
  );
};

export default App;