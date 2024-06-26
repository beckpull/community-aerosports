import React from 'react';

const HoverCard = ({ plane, show, handleClose }) => (
  <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${show ? 'block' : 'hidden'}`}>
    <div className="bg-white p-8 rounded-lg shadow-lg relative w-11/12 md:w-3/4 lg:w-2/3">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4">{plane.name}</h2>
      <p className="text-gray-700 mb-4">{plane.description}</p>
      <div className="grid grid-cols-2 gap-4">
        {plane.moreImages.map((image, index) => (
          <img key={index} src={image} alt={`${plane.name} ${index + 1}`} className="w-full h-32 object-cover rounded-lg" />
        ))}
      </div>
    </div>
  </div>
);

export default HoverCard;



// const HoverCard = ({ plane, show, handleClose }) => {
//     if (!show) return null;
  
//     return (
//       <div className="fixed z-10 inset-0 overflow-y-auto">
//         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//           <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//             <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//           </div>
//           <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
//           <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//             <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//               <div className="sm:flex sm:items-start">
//                 <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                   <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
//                     {plane.name}
//                   </h3>
//                   <div className="mt-2">
//                     <p className="text-sm text-gray-500">
//                       {plane.description}
//                     </p>
//                     {plane.moreImages.map((img, index) => (
//                       <img key={index} src={img} alt={`${plane.name} additional`} className="w-full mt-2" />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//               <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleClose}>
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default HoverCard;