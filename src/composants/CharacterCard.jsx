


export default function CharacterCard({ item, onSelect }) {
  return (
    <div className="uni_card">
      <button type="button" onClick={onSelect}>
        
          <h2>
            {item.id} {item.name}
          </h2>
          <img className="taille_image" src={item.image} alt={item.name} />
        
      </button>
    </div>
  );
}



