var MazeRunner = (function () {
    function MazeRunner() {
    }
    MazeRunner.prototype.invoke = function (maze, row, column) {
        //        var step = (maze: number[][], row: number, column: number) => {
        //            if (row === 0)
        //                return "end";
        //
        //            if (maze[row - 1][column] === 1)
        //                return "block";
        //
        //            return "step";
        //        };
        //        var result = "";
        //        while (1) {
        //            var stepresult = step(maze, row, column);
        //            if (stepresult === "step") {
        //                row -= 1;
        //                result += "step,";
        //            }
        //
        //            if (stepresult === "end") {
        //                break;
        //            }
        //
        //            if (stepresult === "block") {
        //                // try all left
        //
        //            }
        //        }
        //
        //        return result;
        var solution = "";
        return this.invokeAux(maze, row, column, solution);
    };
    MazeRunner.prototype.step = function (maze, row, column) {
        if (row === 0)
            return "end";
        if (maze[row - 1][column] === 1)
            return "block";
        return "step";
    };
    MazeRunner.prototype.invokeAux = function (maze, row, column, solution) {
        // try step
        // else try left
        // else give up
        var stepresult = this.step(maze, row, column);
        if (stepresult === "end")
            return solution;
        if (column < 0)
            return "giveup";
        if (stepresult === "step")
            return this.invokeAux(maze, row - 1, column, solution + "step,");
        else if (stepresult === "block") {
            var resultleft = this.invokeAuxLeft(maze, row, column - 1, solution + "rotate,step,rotate,rotate,rotate,");
            if (resultleft != "giveup")
                return resultleft;
            return this.invokeAuxRight(maze, row, column + 1, solution + "rotate,rotate,rotate,step,rotate,");
        }
        return "giveup";
    };
    MazeRunner.prototype.invokeAuxLeft = function (maze, row, column, solution) {
        var stepresult = this.step(maze, row, column);
        if (stepresult === "end")
            return solution;
        if (column < 0)
            return "giveup";
        if (stepresult === "step")
            return this.invokeAux(maze, row - 1, column, solution + "step,");
        else if (stepresult === "block") {
            return this.invokeAuxLeft(maze, row, column - 1, solution + "rotate,step,rotate,rotate,rotate,");
        }
        return "giveup";
    };
    MazeRunner.prototype.invokeAuxRight = function (maze, row, column, solution) {
        var stepresult = this.step(maze, row, column);
        if (stepresult === "end")
            return solution;
        if (column > maze[0].length - 1)
            return "giveup";
        if (stepresult === "step")
            return this.invokeAux(maze, row - 1, column, solution + "step,");
        else if (stepresult === "block") {
            return this.invokeAuxRight(maze, row, column + 1, solution + "rotate,rotate,rotate,step,rotate,");
        }
        return "giveup";
    };
    return MazeRunner;
})();
