import { MdDelete, MdEditSquare } from "react-icons/md";
import { RiSaveFill } from "react-icons/ri";

const App = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <section className="p-10 backdrop-blur-sm bg-[#ffffff10] rounded-2xl shadow-inner shadow-[#ffffffa1] w-full max-w-3xl">
        <h1 className="text-5xl font-bold text-center">React To-Do App</h1>
        <div className=" flex items-center my-10">
          <input className="w-4/5" type="text" />
          <button className="w-1/5">Add Task</button>
        </div>
        <table class="table-auto  w-full">
          <thead>
            <tr className="">
              <th className="text-start font-semibold">Complete</th>
              <th className="text-start font-semibold">Task</th>
              <th className="text-start font-semibold">Action</th>
              <th className="text-start font-semibold">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=""><input type="checkbox"  className="flex"/></td>
              <td>
                <input type="text" className="w-full"/>
                task name here
              </td>
              <td>
                <button>
                  <MdEditSquare className="text-2xl" />
                  <RiSaveFill className="text-2xl" />
                </button>
              </td>
              <td>
                <button className="bg-red-500!">
                  <MdDelete className="text-xl"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default App;