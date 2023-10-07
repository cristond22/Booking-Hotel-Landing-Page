    import React from 'react';
    import { useRouter } from 'next/navigation';
    import { useState } from 'react';

    const BookNow = () => {
            const router = useRouter();

            const handleClick = () => {
            router.push('/book-a-room');
            };
            const [date, setDate] = useState('');
            const [adults, setAdults] = useState(2);
            const [children, setChildren] = useState(0);
        
            const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form submitted:', { date, adults, children });
            };
    //style={{position:'absolute'}} className="float-left"
                return (
                    <div className='space-y-5'>
                    <div className=''></div>
                    <form onSubmit={handleSubmit}  className="w-screen">
                    
                        <div className="container mx-auto rounded-xl mh-auto w-[50.75rem] p-[0rem] flex center bg-cyan-200 ">
                            <div className="container mx-auto py-2">
                                <h2 className="text-center text-4xl font-bold text-gray-800 mb-4">Book a Room</h2>
                                <p className="text-center text-gray-600 mb-10">Discover the perfect space for you!</p>
                                
                                    <div className="mh-auto w-[48rem]">
                                        <div className="border-gray-200 p-4 rounded">
                                            <div className="mb-4">
                                            
                                                <label htmlFor="date" className="inline border-none px-2 py-2 text-sm font-medium text-gray-700">
                                                Date :  
                                                </label>
                                                <input type="date" id="date"  name="date" value={date}  onChange={(e) => setDate(e.target.value)}
                                                className="mt-1 inline border-none border-gray-300 bg-white rounded-md"
                                                />
                                            
                                                <label htmlFor="adults" className="inline border-none px-2 py-6 text-sm font-medium text-gray-700">
                                                
                                                Adults :  
                                                </label>
                                                <input type="number" id="adults"  name="adults" value={adults}  onChange={(e) => setAdults(e.target.value)}
                                                className="mt-1 inline border-none border-gray-300 bg-white rounded-md"
                                                />
                                                
                                                <label htmlFor="children" className="inline border-none px-2 py-2  text-sm font-medium text-gray-700">
                                                Children : 
                                                </label>
                                                <input type="number" id="children" name="children" value={children} onChange={(e) => setChildren(e.target.value)}
                                                className="mt-1 inline border-none border-gray-300 bg-white rounded-md"
                                                />
                                                    <div className="py-6 text-center">
                                                        <button type="submit" className="rounded-xl text-center w-56 px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                        Book Now
                                                        </button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </form>
                    </div>
    )
    };
    export default BookNow;
