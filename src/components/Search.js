import { useState, useEffect } from 'react'; 
import Results from '../components/Results';
import useBreedList from '../components/useBreedList';


const ANIMALS = ['bird', 'cat', 'dog', 'rabit', 'reptile'];

function Search() {
    // order of state matters, as each piece gets a different state
    const [location, setLocation] = useState('');
    const [animal, setAnimal] = useState('');
    const [breed, setBreed] = useState('');
    const [breeds] = useBreedList(animal);
    const [pets, setPets] = useState([]);

    useEffect(() => {
        requestPets();
    }, []); // render once

    async function requestPets() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const json = await res.json();
        setPets(json.pets);
    }

    return (
        <div className='search'>
            <form onSubmit={e => {
                e.preventDefault(); // to prevent form from submitting to itself
                requestPets();
            }}>
                <label htmlFor='location'>
                    Location
                    <input 
                    id='location' 
                    value={location} 
                    placeholder='location' 
                    onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
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
                <button>Submit</button>
            </form>
            <Results pets={pets}/>
        </div>
    )
}

export default Search; 

