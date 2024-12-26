import { Header } from './components/Header';
import { TaskContainer } from './components/TaskContainer';

function App() {
  return (
    <div className="min-h-screen bg-gray-600">
      <Header />
      <main className="max-w-screen-md mx-auto">
        <TaskContainer />
      </main>
    </div>
  );
}

export default App;
