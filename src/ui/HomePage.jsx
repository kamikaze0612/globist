import Button from "../components/Button";
// eslint-disable-next-line no-unused-vars
import heroImg from "../assets/hero-back.jpg";

function HomePage() {
  return (
    <div
      className={`hero-img flex h-full flex-col items-center justify-center bg-cover bg-center `}
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl">
        Welcome to <span className="font-bold">Globist</span>
      </h1>
      <p className="mb-6 mt-2 text-stone-600 sm:mt-3 sm:text-xl">
        Search any country you want
      </p>
      <Button to="/countries">Get started &rarr;</Button>
    </div>
  );
}

export default HomePage;
