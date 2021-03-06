function sudoku2(grid) {
    for(let i = 0 ; i < 9 ; i++){
        var row_set = new Set();
        var col_set = new Set();
        var box_set = new Set();
        for(let j = 0 ; j < 9 ; j++){
            if(grid[i][j] != '.'){
                if(row_set.has(grid[i][j])){
                    return false;
                }else{
                    row_set.add(grid[i][j]);
                }
                if(box_set.has(grid[i][j] + " row " + Math.floor(i/3) + " col " + Math.floor(j/3))){
                    return false;
                }else{
                    my_set.add(grid[i][j] + " row " + Math.floor(i/3) + " col " + Math.floor(j/3));
                }
            }
            if(grid[j][i] != '.'){
                if(my_set.has(grid[j][i]+" column "+ j)){
                    return false;
                }else{
                    my_set.add(grid[j][i]+" column "+ j);
                }
            }
        }
    }
    return true;
}
const grid_false =
        [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]

const grid_true = 
[['.', '.', '.', '1', '4', '.', '.', '2', '.'],
['.', '3', '6', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '1', '.', '.', '.', '.', '.', '.'],
['.', '6', '7', '.', '.', '.', '.', '.', '9'],
['.', '.', '.', '.', '.', '.', '8', '1', '.'],
['.', '3', '.', '.', '.', '.', '.', '.', '6'],
['.', '.', '.', '.', '.', '7', '.', '.', '.'],
['.', '.', '.', '5', '.', '.', '.', '7', '.']]

console.log(sudoku2(grid_false), sudoku2(grid_true));