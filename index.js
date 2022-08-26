"use strict";
exports.__esModule = true;
var readline = require("readline");
var process_1 = require("process");
var chessBoard = [
    ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
    ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
    ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
    ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
];
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var displayBoard = function (board) {
    board.forEach(function (row) {
        var r = "";
        row.forEach(function (e) {
            r += e + " ";
        });
        console.log(r);
    });
};
var getCoordinates = function (pos) {
    for (var i = 0; i < chessBoard.length; i++) {
        for (var j = 0; j < chessBoard.length; j++) {
            if (chessBoard[i][j] === pos)
                return { x: j, y: i };
        }
    }
    return null;
};
// Assumes valid position
var getDestinations = function (pos) {
    var board = chessBoard.map(function (row) {
        return row.map(function (element) { return element; });
    });
    var coordinate = getCoordinates(pos);
    if (!coordinate) {
        console.log("Invalid Chess Position");
        return;
    }
    var X = [2, 1, -1, -2, -2, -1, 1, 2];
    var Y = [1, 2, 2, 1, -1, -2, -2, -1];
    for (var i = 0; i < 8; i++) {
        var x = coordinate.x + X[i];
        var y = coordinate.y + Y[i];
        if (x > 7 || y > 7)
            continue;
        try {
            board[y][x] = "__";
        }
        catch (err) { }
    }
    return board;
};
var takeInput = function () {
    rl.question("Enter Knight's Position (0 to exit)> ", function (position) {
        // Exit condition
        if (position === '0')
            (0, process_1.exit)();
        var modifiedChessBoard = getDestinations(position);
        console.log("The available position for ".concat(position, " is: \n"));
        displayBoard(modifiedChessBoard);
        (0, process_1.exit)();
    });
};
var main = function () {
    console.log("\n\n ------------------- \n\n");
    displayBoard(chessBoard);
    takeInput();
};
main();
