import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import Payouts from "./pages/payouts/Payouts";

function App() {
  return (
    <MainLayout title="Payouts">
      <Payouts />
    </MainLayout>
  );
}

export default App;
