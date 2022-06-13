import Pet from '../components/Pet';
import '../styles/results.scss';

function Results({pets}) {
    return (
        <div className="results-div">
            {!pets.length ? (
                <h1>No Pets Found</h1>
                ) : (
                    pets.map((pet) => (
                        <Pet 
                        name={pet.name} 
                        animal={pet.animal} 
                        breed={pet.breed} 
                        key={pet.id}
                        images={pet.images} 
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id}
                        />
                    ))
                )
            }
        </div>
    )
}

export default Results; 