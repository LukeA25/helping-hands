import { useNavigate } from "react-router-dom";

const clubs = [
  "Student Council",
  "Debate",
  "Leo Club",
  "Math Team",
  "Student Government",
  "NHS",
  "Model UN",
  "Robotics",
  "Healthcare",
  "Girls Who Code",
  "DECA",
  "Other",
];
const sports = [
  "Football",
  "Soccer",
  "Lacrosse",
  "Tennis",
  "Baseball",
  "Basketball",
  "Hockey",
  "Track",
  "Softball",
  "Field Hockey",
  "Swimming",
  "Other",
];
const studys = [
  "Engineering",
  "Education",
  "Healthcare",
  "Communications",
  "Business",
  "Undecided",
  "Finance",
  "Political Science",
  "Other",
];
const classes = [
  "Mathematics",
  "Foreign Language",
  "Physics",
  "Pyschology",
  "English",
  "Sports Broadcasting",
  "Business",
  "Chemistry",
  "Art",
  "History",
  "Marketing",
  "Other",
];

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/events")
  };

  return (
    <div>
      <form className="mt-10" onSubmit={handleSubmit}>
        <h1 className="text-center font-bitter font-bold text-xl mb-2">
          Are you currently involved in any school-based clubs?
        </h1>
        <ul className="grid grid-cols-4 mx-auto w-3/4">
          {clubs.map((club) => (
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="h-10" />
              <h2>{club}</h2>
            </div>
          ))}
        </ul>
        <h1 className="text-center font-bitter font-bold text-xl mt-12 mb-2">
          Are you interested in any sports?
        </h1>
        <ul className="grid grid-cols-4 mx-auto w-3/4">
          {sports.map((sport) => (
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="h-10" />
              <h2>{sport}</h2>
            </div>
          ))}
        </ul>
        <h1 className="text-center font-bitter font-bold text-xl mt-12 mb-2">
          What field(s) of study are you interested in?
        </h1>
        <ul className="grid grid-cols-3 mx-auto w-3/4">
          {studys.map((study) => (
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="h-10" />
              <h2>{study}</h2>
            </div>
          ))}
        </ul>
        <h1 className="text-center font-bitter font-bold text-xl mt-12 mb-2">
          What high-school courses are you most interested in?
        </h1>
        <ul className="grid grid-cols-3 mx-auto w-3/4">
          {classes.map((classtake) => (
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="h-10" />
              <h2>{classtake}</h2>
            </div>
          ))}
        </ul>
        <div className="w-full flex justify-center my-8">
          <button className="bg-[#fc8d06] hover:bg-[#ff9a1e] active:bg-[#dc7b04] duration-200 px-6 py-3 text-xl rounded-md">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
