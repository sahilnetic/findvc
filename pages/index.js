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
    <button className="text-center text-black bg-white content-center sm:text-xl sm:font-medium font-black px-5 py-2"><p className="animate-pulse">
    Fork It On Github
    </p></button>
    </div>
    <hr />


    <div className="sm:mx-28 mx-10 my-10">
    <h3 className="text-5xl py-5">Try It</h3>
    <h3 className="text-2xl ">prerequisites</h3>
    <p className="px-2">~ Install nodejs</p>
    <p className="px-2">~ Install npm</p>
    <p className="px-2 pb-4">~ Install Nextjs</p>




    <p className="px-2">~ Install axios $~ &nbsp; npm i axios</p>
    <p className="px-2">~ Import axios package ~ &nbsp; import axios from "axios"</p>
    <p className="px-2 pb-5">~ Fetch the data</p>


    {/* This is the code part */}
    <div className="bg-zinc-800 mx-2 rounded-lg">
     
      {/* Angel Investors */}
      <p className="text-white py-5 px-8">
      axios.get('https://findvc.vercel.app/api/a')
      <br />
      <span className="text-gray-400">// get all angel investors</span>
      </p>

      {/* Venture Capitalists */}
      <p className="text-white pb-5 px-8">
      axios.get('https://findvc.vercel.app/api/vc')
      <br />
      <span className="text-gray-400">// get all Venture Capitalists</span>
      </p>

      {/* All Govt Schemes */}
      <p className="text-white pb-5 px-8">
      axios.get('https://findvc.vercel.app/api/gs')
      <br />
      <span className="text-gray-400">// get all Govt Schemes</span>
      </p>


    </div>
    {/* This is the code part */}
    <p className="px-2 py-5">Or clone this project</p>

 {/* This is the code part */}
 <div className="bg-zinc-800 mx-2 rounded-lg">
      <p className="text-white py-5 px-8">
         $~ &nbsp; git clone https://github.com/sahilnetic/demo-findvc
         <br />
         $~ &nbsp; cd findvc<br />
         $~ &nbsp; npm install<br />
         $~ &nbsp;  npm run dev

      </p>
    </div>
    <p className="px-2 pt-5">Your project will start on <span className="font-medium underline text-pink-500">localhost:3000</span></p>

    {/* This is the code part */}
    </div>

    



    {/* Self Host */}
    <div className="sm:mx-28 mx-10 my-10">
    <h3 className="text-5xl py-5">Deploy On Vercel</h3>
    <p className="px-2 py-3">You can deploy this nextjs app to vercel in two different ways, using vercel cli or using git</p>
    <p className="px-2 py-3 font-medium text-pink-500">vercel cli<br />
     
     <span className="text-black text-sm">
      First we'll see how to deploy this project using vercel cli.
     </span>
     <br />
     <span className="text-black text-sm">
      Install vercel if it's not installed.
      <br />
      $~ npm i -g vercel &nbsp; <span className="text-green-500"> or  &nbsp;</span> $~ &nbsp; yarn global add vercel
     </span>
     <br />
     <br />
      {/* This is the code part */}
      <span className="text-black">Add vercel to your project</span>
      <div className="bg-zinc-800 rounded-lg mt-3">
      <p className="text-white py-5 px-8">
      $~ &nbsp; vercel
      </p>
    </div>
    {/* This is the code part */}
     <br />
     <br />
     <span className="text-black">Deploy this project to production</span>
    </p>


    {/* This is the code part */}
    <div className="bg-zinc-800 mx-2 rounded-lg">
      <p className="text-white py-5 px-8">
      $~ &nbsp; vercel --prod
      </p>
    </div>
    {/* This is the code part */}

    
    </div>
    <Footer />
    </div>
  )
}
