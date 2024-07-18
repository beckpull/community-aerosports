import React from 'react';
import AccordionComp from '@/components/services/Accordion';

const HoverCardPrivatePilot = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg relative max-w-4xl mx-4 max-h-[80vh] overflow-auto p-6 pt-12">
        <button
          onClick={onClose}
          className="absolute top-5  right-5 border-2 border-gray-500 p-1 lg:p-2 rounded hover:border-gray-600 hover:bg-gray-100 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="relative bg-gray mt-6 h-full overflow-auto">
          <h2 className="text-base text-center font-bold mb-2 tracking-wide">Private Pilot License Requirements</h2>
          <div style={styles.container}>
            <h1 style={styles.title} className='font-semibold text-lg text-center tracking-normal'>FAA Regulations - Private Pilot Certificate</h1>
            <AccordionComp />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  title: {
    // fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#333',
    borderBottom: '2px solid #eee',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  section: {
    marginBottom: '20px',
  },
  paragraph: {
    margin: '10px 0',
  },
  list: {
    margin: '10px 0',
    paddingLeft: '20px',
  },
  nestedList: {
    margin: '10px 0',
    paddingLeft: '20px',
  },
  citation: {
    fontSize: '0.9em',
    color: '#666',
    marginTop: '10px',
  },
};

export default HoverCardPrivatePilot;