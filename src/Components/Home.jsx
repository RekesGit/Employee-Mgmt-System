import ems from "../image/ems.jpg";

const Home = () => {
  return (
    <div className="banner">
      <img
        src={ems}
        alt="No Image"
        style={{ height: "560px", width: "100%" }}
      />
    </div>
  );
};

export default Home;
