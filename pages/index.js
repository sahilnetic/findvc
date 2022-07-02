import Nav from "./Components/Nav"
import Footer from "./Components/Footer"

export default function Home() {
  return (
   <div>
    <Nav />

    <div className="bg-black mx-5 my-2 rounded-lg">
    <h1 className="sm:mx-28 mx-10 pt-28 text-6xl text-white">{"{Findvc}"}</h1>
    <p className="sm:mx-28 mx-10 mt-6 text-white ">Free Api of VCs and Startup accelerators</p>
    <p className="sm:mx-28 mx-10 sm:mt-4 text-white">created by <span className="font-black">@sahilnetic</span></p>
    <p className="sm:mx-28 mx-10   text-white pb-32">powered by <span className="font-black">@vercel</span></p>
    <button className="text-center text-black bg-white content-center sm:text-2xl sm:font-medium font-black  rounded-t-sm px-5 py-2"><p className="animate-pulse">Fork It On Github</p></button>
    </div>
    <hr />


    <div className="sm:mx-28 mx-10 my-10">
    <h3 className="text-5xl py-5">Try It</h3>
    <p className="px-2 py-3">Run this code here, in a console or from any site.</p>
    {/* This is the code part */}
    <div className="bg-zinc-800 mx-2 rounded-lg">
      <p className="text-white py-5 px-8">
         <span className="text-pink-500">fetch</span>(<span className="text-green-600">'https://findvc.vercel.app/ac'</span>)<br />
         .then(response {"=>"} response.json())<br />
         .then(json {"=>"} console.log(json))

      </p>
    </div>
    {/* This is the code part */}
    </div>



    {/* Self Host */}
    <div className="sm:mx-28 mx-10 my-10">
    <h3 className="text-5xl py-5">Self Host</h3>
    <p className="px-2 py-3">Deploy this project on vercel</p>
    <p className="px-2 py-3">Clone this project or<br /><span className="font-medium text-pink-500">git clone https://github.com/sahilnetic/findvc</span></p>

    {/* This is the code part */}
    <div className="bg-zinc-800 mx-2 rounded-lg">
      <p className="text-white py-5 px-8">
         <span className="text-pink-500">fetch</span>(<span className="text-green-600">'https://findvc.vercel.app/ac'</span>)<br />
         .then(response {"=>"} response.json())<br />
         .then(json {"=>"} console.log(json))

      </p>
    </div>
    {/* This is the code part */}
    </div>

    <Footer />
    </div>
  )
}
