import React, { useContext, useEffect, useState }  from 'react';
import { DataContext } from '../services/data.context';

const itemsPerPage = 10; // Number of items per page 

const Datagrid = () => {

  const {
		capsuleData,
    isLoading,
    selectedId, 
    setSelectedId,
	} = useContext(DataContext);
  
  useEffect(() => {
    console.log(capsuleData);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentData = capsuleData.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(capsuleData.length / itemsPerPage);

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  }; 

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const selectedItem = capsuleData.find(item => item.id === selectedId);

  if (isLoading) {
    return <p>Loading...</p>;
  };

  return (
    <section id='data-grid' className='container mt-48 mx-auto p-6 rounded bg-white shadow-lg'>
      <div className="p-4">
        <table className="text-left min-w-full border-collapse">
          <thead className='uppercase'>
            <tr>
              <th className="border p-2">Serial</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Reuse Count</th>
              <th className="border p-2">Water Landings</th>
              <th className="border p-2">Land Landings</th>
              {/* <th className="border p-2">Last Update</th> */}
            </tr>
          </thead>
          <tbody>
              {currentData.map(item => (
                <tr key={item.id} className='hover:bg-gray-50 cursor-pointer' onClick={() => {
                  setSelectedId(item.id);
                  openPopup();
                }}>
                  <td className="border p-2">{item.serial}</td>
                  <td className="border p-2">{item.status}</td>
                  <td className="border p-2">{item.type}</td>
                  <td className="border p-2">{item.reuse_count}</td>
                  <td className="border p-2">{item.water_landings}</td>
                  <td className="border p-2">{item.land_landings}</td>
                  {/* <td className="border p-2">{item.last_update}</td> */}
                </tr>
              ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-2 p-2 rounded-md ${
                index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      
      {isPopupOpen && selectedItem && (
        <div className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur">
          <div className="bg-white p-4 rounded-md shadow-md w-6/12">
            <h2 className="text-lg font-semibold mb-2">{selectedItem.serial}</h2>
            <p>Type: {selectedItem.type}</p>
            <p>Status: {selectedItem.status}</p>
            <p>Water Landings: {selectedItem.water_landings}</p>
            <p>Land Landings: {selectedItem.land_landings}</p>
            <p>Last Update: {selectedItem.last_update}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Datagrid;
