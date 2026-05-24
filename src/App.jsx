import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      <main className="flex-1 flex flex-col min-h-0">
        <Header />
        <KanbanBoard />
      </main>
    </div>
  );
}

export default App;
