define(function() {
   var Constants = {
      SCREEN_WIDTH: 1000,
      SCREEN_HEIGHT: 1000,
      NUMBER_OF_CELLS_HEIGHT: 500,
      NUMBER_OF_CELLS_WIDTH: 500,
      WHITE: "rgb(255, 255, 255)",
      BLACK: "rgb(0, 0, 0)",
      RED: "rgb(0, 0, 255)"
   }
   Constants.WIDTH_OF_CELL = Math.floor(Constants.SCREEN_WIDTH / Constants.NUMBER_OF_CELLS_WIDTH);
   Constants.HEIGHT_OF_CELL = Math.floor(Constants.SCREEN_HEIGHT / Constants.NUMBER_OF_CELLS_HEIGHT);

   return Constants;
});
