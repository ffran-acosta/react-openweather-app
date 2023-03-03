const TopButtons = ({ setQuery }) => {
    const cities = [
        {
            id: 1,
            title: 'Pergamino'
        },
        {
            id: 2,
            title: 'Rosario'
        },
        {
            id: 3,
            title: 'Miami'
        },
        {
            id: 4,
            title: 'Madrid'
        },
        {
            id: 5,
            title: 'Sydney'
        },
    ]
    return (
        <div className="flex items-center justify-around my-6">
            {cities.map((city) => (
                <button 
                    key={city.id} 
                    className="text-white text-lg"
                    onClick={() => setQuery({ q: city.title })}
                >
                    {city.title}
                </button>
            ))}
        </div>
    )
}
export default TopButtons