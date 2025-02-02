export const dynamic='force-dynamic';

export default function Review({ params }:any){

    return (
        <>
            <form>
            <h1>Leave A Review{params.id}</h1>
            <h2>Overall Rating</h2>
            <input type="checkbox" name="rating" value="Poor"/>Poor
            <input type="checkbox" name="rating" value="Average"/>Average
            <input type="checkbox" name="rating" value="Excellent"/>Excellent
            <label className="md:w-2/3 block text-gray-500 font-bold">
            <div className="mb-5">
                <label className="block mb-5 text-lg font-medium text-gray-900 dark:text-white">Comment:</label>
                <input type="text" id="comment" className="block w-full p-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            </label>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </>
        
  
    
);
}