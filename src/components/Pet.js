import '../styles/pet.scss';

function Pet({ name, animal, breed, images, location, id }) {

    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if (images.length) {
        hero = images[0];
    }

    return (
        <div className="pet-container">
            <a href={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt={name} />
            </div>
            <div className="info">
                <h1 className="pet-name">{name}</h1>
                <h2 className="pet-info">{`${animal} — ${breed} — ${location}`}</h2>
            </div>
            </a>
        </div>
    )
}

export default Pet;