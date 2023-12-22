import "./App.css";
import Infocard from "./pages/dashboard/Infocard";
// import Index from "./router";
import Styles from "./pages/dashboard/infocard.module.css";
function App() {
  return (
    <div className={Styles.header}>
      <Infocard title="Users Total" value="11.8M" precent="+2,5%" />
      <Infocard
        title="New Users"
        value="8.236K"
        precent="-1,2%"
        background="var(--Primary-90, #e43551)"
        color="#fff"
      />
      <Infocard title="Active Users" value="2.352M" precent="+11%" />
      <Infocard title="New Users" value="8K" precent="+5,2%" />
    </div>
  );
}

export default App;
