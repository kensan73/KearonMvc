///<reference path="typings/jasmine/jasmine.d.ts"/>
///<reference path="MazeRunner.ts"/>
describe("mazerunner tests", function () {
    var runner = new MazeRunner();
    it("can solve zero blockade maze", function () {
        var result = runner.invoke([
            [9, 9, 9, 9, 9],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ], 4, 2);
        expect(result).toBe("step,step,step,step,");
    });
    it("can solve practically zero blockade maze", function () {
        var result = runner.invoke([
            [9, 9, 9, 9, 9],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 0, 1, 1],
            [0, 0, 0, 0, 0]
        ], 4, 2);
        expect(result).toBe("step,step,step,step,");
    });
    it("can solve practically only middle maze", function () {
        var result = runner.invoke([
            [9, 9, 9, 9, 9],
            [1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1],
            [0, 0, 0, 0, 0]
        ], 4, 2);
        expect(result).toBe("step,step,step,step,");
    });
    it("gives up if completely blocked", function () {
        var result = runner.invoke([
            [9, 9, 9, 9, 9],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0]
        ], 4, 2);
        expect(result).toBe("giveup");
    });
    it("gives up if completely blocked next row", function () {
        var result = runner.invoke([
            [9, 9, 9, 9, 9],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ], 4, 2);
        expect(result).toBe("giveup");
    });
    it("gives up if completely blocked penultimate row", function () {
        var result = runner.invoke([
            [9, 9, 9, 9, 9],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ], 4, 2);
        expect(result).toBe("giveup");
    });
    it("can solve one blockade maze", function () {
        var result = runner.invoke([
            [9, 9, 9, 9, 9],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0]
        ], 4, 2);
        expect(result).toBe("rotate,step,rotate,rotate,rotate,step,step,step,step,");
    });
    it("can solve one blockade maze to the right", function () {
        var result = runner.invoke([
            [9, 9, 9, 9, 9],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0]
        ], 4, 2);
        expect(result).toBe("rotate,rotate,rotate,step,rotate,step,step,step,step,");
    });
    it("can solve one blockade maze to the right only one path", function () {
        var result = runner.invoke([
            [9, 9, 9, 9, 9],
            [1, 1, 1, 0, 1],
            [1, 1, 1, 0, 1],
            [1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0]
        ], 4, 2);
        expect(result).toBe("rotate,rotate,rotate,step,rotate,step,step,step,step,");
    });
    it("can solve two blockade maze", function () {
        var result = runner.invoke([
            [9, 9, 9, 9, 9],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0]
        ], 4, 2);
        expect(result).toBe("rotate,step,rotate,rotate,rotate,rotate,step,rotate,rotate,rotate,step,step,step,step,");
    });
    //    it("can solve three blockade maze", () => {
    //        var result = runner.invoke([
    //            [9, 9, 9, 9, 9],
    //            [0, 0, 0, 0, 0],
    //            [0, 0, 0, 0, 0],
    //            [1, 1, 1, 0, 0],
    //            [0, 0, 0, 0, 0]
    //        ], 4, 2);
    //
    //        expect(result).toBe("rotate,step,rotate,rotate,rotate,rotate,step,rotate,rotate,rotate,step,step,step,step,");
    //    });
});
