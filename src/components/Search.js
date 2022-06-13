import { useState, useEffect } from 'react'; 
import '../styles/search.scss';
import Results from '../components/Results';
import useBreedList from '../components/useBreedList';


const ANIMALS = ['bird', 'cat', 'dog', 'rabit', 'reptile'];

function Search() {
    // order of state matters, as each piece gets a different state
    const [animal, setAnimal] = useState('');
    const [breed, setBreed] = useState('');
    const [breeds] = useBreedList(animal);
    const [pets, setPets] = useState([]);

    useEffect(() => {
        requestPets();
    }, []); // render once

    async function requestPets() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}`);
        const json = await res.json();
        setPets(json.pets);
    }

    return (
        <section className='search'>
            <div className="search-div">
                <form className='search-form' onSubmit={e => {
                    e.preventDefault(); // to prevent form from submitting to itself
                    requestPets();
                }}>
                    <div className="animal-div">
                        <label htmlFor="animal">
                        Animal
                        <select
                            id="animal"
                            value={animal}
                            onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                            }}
                            onBlur={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                            }}
                            >
                            <option />
                            {ANIMALS.map((animal) => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                            ))}
                        </select>
                        </label>
                    </div>
                    <div className="breed-div">
                        <label htmlFor="breed">
                            Breed
                            <select
                                disabled={!breeds.length}
                                id="breed"
                                value={breed}
                                onChange={(e) => setBreed(e.target.value)}
                                onBlur={(e) => setBreed(e.target.value)}
                                >
                                <option />
                                {breeds.map((breed) => (
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                                ))}
                            </select>
                            </label>
                        </div>
                    <button>Submit</button>
                </form>
            </div>
            <Results pets={pets}/>
        </section>
    )
}

export default Search; 

