import Header from "./Header";
import BoxLayout from "./BoxLayout";
import SearchUser from "./SearchUser";

const App = () => {
    return (
        <div className="wrapper">
            <Header
                title="Ceres.tia"
                subtitle="Showcase your character builds. Beyond Celestia."
            />
            <BoxLayout />
            {/* <SearchUser /> */}
        </div>
    );
};

export default App;
