const PlaneCard = ({ plane, onCardClick }) => {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 cursor-pointer" onClick={() => onCardClick(plane)}>
        <img className="w-full" src={plane.image} alt={plane.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{plane.name}</div>
          <p className="text-gray-700 text-base">
            {plane.type}
          </p>
        </div>
      </div>
    );
  };

  export default PlaneCard;