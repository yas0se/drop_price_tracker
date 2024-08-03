import React from 'react';
import Header from '../components/header';
import AddProductForm from '../components/AddProductForm'; 

const AddProductPage = () => {
  return (
    <div>
      <Header />
      <div className='bg-gray-50 font-[sans-serif] py-8'>
        <div className='flex flex-col items-center justify-center pt-6 px-4'>
          <div className='max-w-md w-full'>
            <div className='p-8 rounded-2xl bg-white shadow'>
              <h2 className='text-gray-800 text-center text-2xl font-bold'>
                Add New Product
              </h2>
              <AddProductForm /> {/* Use the Client Component here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
