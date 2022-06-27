import MyTodosCell from "../../components/MyTodosCell/MyTodosCell";
import ProceduresCell from "../../components/ProceduresCell/ProceduresCell";

const TopPage = () => {
  return (
    <div>
      <section className="main-container mx-auto">
        <ProceduresCell />
        <MyTodosCell />
      </section>
    </div>
  );
};

export default TopPage;
