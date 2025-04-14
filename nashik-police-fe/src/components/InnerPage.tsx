export const InnerPage=()=> {
    return (
      <div className="flex flex-col justify-center lg:flex-row gap-6 p-6 bg-white text-black mt-[65px]">
        {/* Left/Main Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          <h1 className="text-3xl font-bold">Lorem ipsum dolor sit amet</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
  
          <div className="w-full h-72 bg-gray-200 rounded-xl" />
  
          <div className="space-y-4">
            <h2 className="text-base font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </h2>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-sm text-gray-700">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            </p>
          </div>
  
          <div>
            <h2 className="text-base font-semibold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            </h2>
            <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i}>Lorem ipsum dolor sit amet, consectetur</li>
              ))}
            </ul>
          </div>
  
          <button className="bg-blue-900 text-white text-sm px-6 py-2 rounded mt-4">संपूर्ण वाचा</button>
        </div>
  
      
      </div>
    );
  }
  