import "./App.css";
import MainLayout from "./components/layouts/main-layout";
import Payouts from "./pages/payouts/payout-page";

function App() {
  return (
    <MainLayout title="Payouts">
      <Payouts />
    </MainLayout>
  );
}

export default App;
