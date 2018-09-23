import React from 'react';

const SearchBar = props => { // no state. only prop. focus on UI
    return (
        <div style={style.contentSearch}>
            {/* Search bar must be here<br />
            Props name is { props.name }<br />
            Props id is { props.id }<br /> */}
            <input 
                style={style.inputSearch}
                type="text" 
                placeholder="Input search keyword"
                onChange={ props.onChangeSearch }
            />
        </div>
    )
}

const style = {
    inputSearch: {
        width: 500,
        height: 30
    },
    contentSearch : {
        backgroundColor: "red",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }
}

export default SearchBar;