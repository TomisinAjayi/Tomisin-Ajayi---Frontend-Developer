import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../services/data.context';

function Search() {
  const {
		capsuleData,
    isLoading
	} = useContext(DataContext);

  useEffect(() => {
    console.log(capsuleData);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  // const [minAge, setMinAge] = useState('');
  // const [maxAge, setMaxAge] = useState('');

  const filteredData = capsuleData.filter(item => {
    const colorMatch = selectedColor === 'All' || item.status === selectedColor;
    const sizeMatch = selectedSize === 'All' || item.type === selectedSize;
    // const ageMatch =
    //   (minAge === '' || item.age >= Number(minAge)) &&
    //   (maxAge === '' || item.age <= Number(maxAge));

    return (
      // colorMatch && sizeMatch && ageMatch && item.serial.toLowerCase().includes(searchTerm.toLowerCase())
      colorMatch && sizeMatch && item.serial.toLowerCase().includes(searchTerm.toLowerCase())
      );
  });

  if (isLoading) {
    return <p>Loading...</p>;
  };

  return (
    <section id='search' className=''>
      <h2 className='flex justify-center text-4xl text-white uppercase mb-8'>Capsules</h2>
      <div className="container mx-auto p-12 rounded bg-white shadow-lg">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            className="p-2 border rounded-md flex-grow"
            placeholder="Search by serial C101, C102..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border rounded-md"
            value={selectedColor}
            onChange={e => setSelectedColor(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="retired">Retired</option>
            <option value="unknown">Unknown</option>
            <option value="destroyed">Destroyed</option>
            <option value="active">Active</option>
          </select>
          <select
            className="p-2 border rounded-md"
            value={selectedSize}
            onChange={e => setSelectedSize(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Dragon 1.0">Dragon 1.0</option>
            <option value="Dragon 1.1">Dragon 1.1</option>
            <option value="Dragon 2.0">Dragon 2.0</option>
          </select>
          {/* <input
            type="number"
            className="p-2 border rounded-md w-20"
            placeholder="Min Age"
            value={minAge}
            onChange={e => setMinAge(e.target.value)}
          />
          <input
            type="number"
            className="p-2 border rounded-md w-20"
            placeholder="Max Age"
            value={maxAge}
            onChange={e => setMaxAge(e.target.value)}
          /> */}
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 searchtable">
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
              <tr>
                <th scope="col" className="px-6 py-3">Serial</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Type</th>
                <th scope="col" className="px-6 py-3">Reuse Count</th>
                <th scope="col" className="px-6 py-3">Water Landings</th>
                <th scope="col" className="px-6 py-3">Land Landings</th>
                <th scope="col" className="px-6 py-3">Last Update</th>
              </tr>
            </thead>
            
              {
                filteredData.length !== 0 ?
                <tbody className=''>
                  {filteredData.map(item => (
                    <tr key={item.id} className='bg-white border-b'>
                      <td className="px-6 py-4">{item.serial}</td>
                      <td className="px-6 py-4">{item.status}</td>
                      <td className="px-6 py-4">{item.type}</td>
                      <td className="px-6 py-4">{item.reuse_count}</td>
                      <td className="px-6 py-4">{item.water_landings}</td>
                      <td className="px-6 py-4">{item.land_landings}</td>
                      <td className="px-6 py-4">{item.last_update}</td>
                    </tr>
                  ))}
                </tbody>
                :
                <tbody>
                  <tr>
                    <td className='p-4' align="center" colSpan={7}> No Search Found.</td>
                  </tr>
                </tbody>
              }
            
          </table>
        </div>
      </div>
    </section>
  );
}

export default Search;


