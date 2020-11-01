// JSX - Javascript XML
// undefined, null, boolean (i.e. false) are ignored by JSX

// if statement (into function)
// ternary operator
// logical && operator (true && 'some' => 'some',
                    // false && 'some' => false)
// ''           => true
// !''          => true
// !!''         => false
// !!'sp'       => true
// !!undefined  =>  false

const user = {
    name: 'SpBo',
    age: 30,
    location: 'Patras'
};

function getLocations(location) {
    if (location) {
        return <p>Lcation: {location}</p>
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocations(user.location)}
    </div>
);

const appRoot = document.querySelector('#app');

ReactDOM.render(templateTwo, appRoot);