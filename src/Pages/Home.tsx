import { Link } from "react-router-dom"
import img from "../assets/images/TAS-Banner-2-resize-up.jpg"
import { Button } from "../Components/Button"
export function Home() {
  return (
    <>
      <div className="mt-10">
        <div className="container mt-0">
          <div className="flex-column items-center justify-content-center relative top-1 leading-10 w-screen">
            <img
              src={img}
              className="w-screen h-96 rounded-lg shadow-lg object-cover"
              alt="Delicious Milkshakes"
            />
            <div className="m-5 flex flex-col items-center">
              <h2 className="text-3xl font-bold text-sky-400 font-mono">Enjoy Our Delicious Milkshakes!</h2>
              <p className="text-gray-600 mt-2 text-lg">
                Freshly made, creamy milkshakes in a variety of flavors. Indulge yourself!
              </p>
              <Link to='/products'>
                <Button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4" children="View Products"></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}