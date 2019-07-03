function Person(props) {
    return (
        <div class="person">
        <h1>{props.name}</h1>
        <p>My music is {props.music}</p>
        </div>
    );
}

var app = (
    <div>
        <Person name="Ollie" music="metal"/>
        <Person name="Alice" music="metal"/>
        <Person name="Mike" music="country"/>
    </div>
    
);

ReactDOM.render(app, document.querySelector('#app'));