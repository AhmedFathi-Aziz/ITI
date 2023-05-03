let title = document.querySelector(".title");

let turn = 'x'


let tiles = [];

function check_tie() {
    for (let i = 1; i < 10; i++) {
        if (tiles[i] == '')
            return false;
    }
    return true;
}

function check(a, b, c) {
    title.innerHTML = `Player ${tiles[a]} Won`;

    document.getElementById('item' + a).style.background = '#000016';
    document.getElementById('item' + b).style.background = '#000016';
    document.getElementById('item' + c).style.background = '#000016';

    setInterval(function() {title.innerHTML += '.'}, 1000);
    setTimeout(function() {location.reload()}, 4000);
}

function check_for_winner() {
    for (let i = 1; i < 10; i++) {
        tiles[i] = document.getElementById('item' + i).innerHTML;
    }

    if (tiles[1] == tiles[2] && tiles[2] == tiles[3] && tiles[1] != '')
        check(1, 2, 3);
    
    else if (tiles[4] == tiles[5] && tiles[5] == tiles[6] && tiles[4] != '')
        check(4, 5, 6);

    else if (tiles[7] == tiles[8] && tiles[8] == tiles[9] && tiles[9] != '')
        check(7, 8, 9);
    
    else if (tiles[1] == tiles[4] && tiles[4] == tiles[7] && tiles[7] != '')
        check(1, 4, 7);

    else if (tiles[2] == tiles[5] && tiles[5] == tiles[8] && tiles[8] != '')
        check(2, 5, 8);
    
    else if (tiles[3] == tiles[6] && tiles[6] == tiles[9] && tiles[9] != '')
        check(3, 6, 9);
    
    else if (tiles[1] == tiles[5] && tiles[5] == tiles[9] && tiles[9] != '')
        check(1, 5, 9);
    
    else if (tiles[3] == tiles[5] && tiles[5] == tiles[7] && tiles[7] != '')
        check(3, 5, 7);
    
    else if (check_tie()) {
        title.innerHTML = `Tie`;
        // title.querySelector(".tile").style.background = '#000016';
        for (let i = 1; i < 10; i++)
        document.getElementById('item' + i).style.background = '#000016';
        setInterval(function() {title.innerHTML += '.'}, 1000);
        setTimeout(function() {location.reload()}, 4000);
    }
}

function play(id) {
    let tile = document.getElementById(id);
    if (turn === 'x' && tile.innerHTML == '') {
        tile.innerHTML = "X";
        turn = 'o';

        title.innerHTML = "Player O"
    }
    else if (turn === 'o' && tile.innerHTML == '') {
        tile.innerHTML = "O";
        turn = 'x';

        title.innerHTML = "Player X";
    }

    check_for_winner();
}
