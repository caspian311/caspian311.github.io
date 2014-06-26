define(function() {
   var canvas = $('#my_canvas');
   var size = Math.max(canvas.width(), canvas.height())
   var lengthCellCount = 200;
   var Constants = {
      SCREEN_WIDTH: size,
      SCREEN_HEIGHT: size,
      NUMBER_OF_CELLS_HEIGHT: lengthCellCount,
      NUMBER_OF_CELLS_WIDTH: lengthCellCount,
      WHITE: "rgb(255, 255, 255)",
      BLACK: "rgb(0, 0, 0)",
      RED: "rgb(0, 100, 0)"
   }
   Constants.WIDTH_OF_CELL = Math.floor(Constants.SCREEN_WIDTH / Constants.NUMBER_OF_CELLS_WIDTH);
   Constants.HEIGHT_OF_CELL = Math.floor(Constants.SCREEN_HEIGHT / Constants.NUMBER_OF_CELLS_HEIGHT);

   return Constants;
});
