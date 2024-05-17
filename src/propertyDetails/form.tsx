  import client from "../assets/client.jpg"
const ModernForm = () => {

  return (
    <div className="w-full lg:max-w-[350px] bg-white p-5 border rounded-xl">
      <div>
        <img src={client} alt="" className='rounded-full w-[100px] h-[100px] border-[10px]'/>
        <p className='text-purple-600 underline cursor-pointer pb-2'>View Listing</p>
      </div>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            className="mt-1 p-2 block w-full border resize-none rounded-md shadow-sm "
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="mt-1 p-2 block w-full  border resize-none rounded-md shadow-sm "
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"

            className="mt-1 p-2 block w-full border resize-none rounded-md shadow-sm "
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white
            bg-indigo-600 hover:scale-95 duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModernForm;
