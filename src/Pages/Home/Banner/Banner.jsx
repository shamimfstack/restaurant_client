import bannerImg from "../../../../src/assets/dark_banner.jpg";

export default function Banner() {
  return (
    <section
      className="hero min-h-[calc(100vh-80px)] bg-cover bg-center"
      style={{
        backgroundImage: "url(https://i.ibb.co/WGhZBb9/dark-banner.jpg)",
        opacity: "",
      }}
    >
      <div className="flex justify-between">
        <div className="text-white w-1/2 p-8 space-y-3">
          <h1 className="text-5xl font-bold">
            Streamline Your Restaurant Operations
          </h1>
          <p className="text-sm font-medium">
            Transform the way you run your restaurant with our comprehensive
            management app. Simplify tasks, enhance efficiency, and ensure
            smooth operations from kitchen to table.
          </p>
          <button className="bg-green-700 py-2 px-4 rounded-md">
            Call to Action
          </button>
        </div>
        <div className="w-1/2">
          <div className="p-8 flex">
            <img
              
              src="https://i.ibb.co/XX1XR46/pexels-askar-abayev-5638732.jpg"
              alt="banner image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
