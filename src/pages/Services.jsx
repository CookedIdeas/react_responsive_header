import FakeDataGrid from '../components/FakeDataGrid';

const Services = () => {
  return (
    <div>
      <section>
        <h1 className="text-3xl sm:text-5xl ml-6">Services</h1>
        <div className="flex justify-end w-full">
          <p className="w-2/3 right-0 text-xl mt-8 mr-6 sm:mr-12 text-right font-semibold">
            This is dummy content. It swings its arms round and round to charge
            up electricity before unleashing a punch.Swinub roots for food by
            rubbing its snout against the ground.
          </p>
        </div>
      </section>
      <section>
        <FakeDataGrid />
      </section>
    </div>
  );
};
export default Services;
