import img from "../assets/images/about.jpg";
export function About() {
  return (
    <div className="bg-teal-50 mt-10">
      <div className="container mx-auto px-2 py-5 text-center ">
        <h1 className="text-4xl font-bold text-cyan-500 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <strong>Milkshake Heaven</strong>! We’re passionate about
          bringing you the creamiest, most indulgent milkshakes crafted from the
          freshest ingredients. Whether you’re craving classic flavors or
          adventurous combinations, we’ve got something for everyone.
        </p>

        <img
          src={img}
          alt="About Milkshake Heaven"
          className="w-3/4 h-96 mx-auto my-8 rounded-lg shadow-lg object-fit"
        />

        <p className="text-lg text-gray-700 mb-4">
          Our mission is simple: to spread joy, one milkshake at a time. We
          believe in quality over quantity and source our ingredients locally to
          ensure the best taste in every sip.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
          Our Promise
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We promise to always deliver fresh, flavorful milkshakes made with
          love. Whether you're in for a quick treat or looking to indulge in our
          special creations, our team is here to serve you with a smile.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
          Why Choose Us?
        </h2>

        <ul className="list-disc list-inside text-left mx-auto max-w-xl">
          <li>Locally sourced ingredients</li>
          <li>Freshly made to order milkshakes</li>
          <li>A wide variety of flavors and toppings</li>
          <li>Customer satisfaction as our top priority</li>
        </ul>

        <div className="mt-10">
          <h3 className="text-xl font-medium text-cyan-500">
            Visit Us or Order Online!
          </h3>
          <p className="text-gray-700">
            We're located in the heart of town and available for delivery. Come
            experience the best milkshakes in town!
          </p>
        </div>
      </div>
    </div>
  );
}
