function Title(str) {
    return str
        .split(' ')
        .map(n => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase())
        .join(' ');
}

const Filter = ({ filter, persons, handleFilter }) => {
    function handleSearch(e) {
        e.preventDefault();

        if (filter == '') {
            alert('There is nothing here')
        } else {
            if (persons.some(
                (n) => 
                    n.name == filter.toUpperCase() ||
                        n.name == filter.toLowerCase() ||
                        n.name ==
                        filter.charAt(0).toUpperCase() + filter.slice(1).toLowerCase() ||
                        n.name == Title(filter)
                
            )
            ) {
                alert(`${filter} is in the list`)
            } else {
                alert(`${filter} isn't in the list`)
            }
        }
    }

    return (
        <div>
            filter show with: <input onChange={handleFilter} />
            <button type='submit' onClick={handleSearch}>search</button>
        </div>
    )
}


export default Filter;