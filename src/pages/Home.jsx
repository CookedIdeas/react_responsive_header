import FakeDataGrid from '../components/FakeDataGrid';

const Home = () => {
  return (
    <div className="mt-10">
      <section>
        <h1 className="text-4xl sm:text-7xl ml-10">Welcome</h1>
        <div className="flex justify-end w-full">
          <p className="w-2/3 right-0 text-xl mt-8 mr-6 sm:mr-12 text-right font-semibold">
            This is dummy content. It lived on land and went out into the sea to
            hunt for prey. Its sharp claws were its greatest weapon.
          </p>
        </div>
      </section>
      <section>
        <FakeDataGrid />
      </section>
    </div>
  );
};
export default Home;
