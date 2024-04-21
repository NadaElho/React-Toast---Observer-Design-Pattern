import { Button } from './components/Button';
import { ToastContainer } from './components/ToastContainer';
import { toast } from './components/utils';

function App() {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-7xl font-bold text-center">Hello, World</h1>

      <div className="space-x-2">
        <Button onClick={() => {toast("Default")}}>Default</Button>
        <Button onClick={() => {toast.success("Success")}}>Success ✅</Button>
        <Button onClick={() => {toast.error("Error")}}>Error ❌</Button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
