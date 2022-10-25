function App() {
    return React.createElement(
        'div',{},
        React.createElement(H2Component, {color: "red", text:"Funkciók"},),
        React.createElement(DarkMode),
        React.createElement(LightMode)
    )
};

function H2Component(props) {
    return React.createElement(
        'h2',
        {
            style: {
                fontFamily: 'cursive',
                color: props.color,
            },
            className: 'p-2 m-5 text-center'
        },
        props.text
    )
};

function DarkMode() {
    return React.createElement(
        'button',
        {
            id:"vilagosra-valtas",
            onClick:function(){
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.getElementById("sotetre-valtas").style.display="block"
            document.getElementById("vilagosra-valtas").style.display="none"
            }
        },
        "Világos mód"
    )
};

function LightMode() {
    return React.createElement(
        'button',
        {
            style:{display: "none"},
            id:"sotetre-valtas",
            onClick:function(){
            document.body.style.backgroundColor = "rgb(40, 40, 40)";
            document.body.style.color = "white";
            document.getElementById("sotetre-valtas").style.display="none"
            document.getElementById("vilagosra-valtas").style.display="block"
            }
        },
        "Sötét mód"
    )
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById('main')
);