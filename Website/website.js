let color = true;


function changeColor() {
    color = false;
}

document.addEventListener('keydown', function (e) {
    switch (state) {
        case 'main': 
        if (e.key === 'Enter') {
            changeColor();
            console.log(color);
        }
    }
});
