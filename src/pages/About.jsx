import FakeDataGrid from '../components/FakeDataGrid';

const About = () => {
  return (
    <div>
      <section>
        <h1 className="text-3xl sm:text-5xl ml-6">About</h1>
        <div className="flex justify-end w-full">
          <p className="w-2/3 right-0 text-xl mt-8 mr-6 sm:mr-12 text-right font-semibold">
            This is dummy content. Its favorite food is a mushroom that grows
            under the cover of dead grass.
          </p>
        </div>
      </section>
      <section>
        <FakeDataGrid />
      </section>
    </div>
  );
};
export default About;
