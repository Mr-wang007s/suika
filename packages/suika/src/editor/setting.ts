export class Setting {
  canvasBgColor = '#f4f4f4';
  stroke = '';
  fill = [{ r: 217, g: 217, b: 217, a: 1 }]; // '#D9D9D9';
  guideBBoxStroke = '#1592fe';
  selectionStroke = '#0f8eff';
  selectionFill = '#0f8eff33';

  /**** 变形相关 ****/
  handleRotationStroke = '#1592fe';
  handleRotationFill = '#fff';
  handleStrokeWidth = 2;
  handleSize = 6;
  handleRotationLineLength = 15;

  lockRotation = Math.PI / 12; // 旋转时，通过 shift 约束旋转角度为该值的整数倍。

  zoomStep = 0.27; // 缩放比例步长
  zoomMax = 256;
  zoomMin = 0.02;

  drawRectDefaultWidth = 100; // 绘制矩形工具，如果不拖拽就不会产生宽高。此时提供矩形的宽度
  drawRectDefaultHeight = 100; // 高度，同上

  /**** 标尺相关 ****/
  minStepInViewport = 50; // 视口区域下的最小步长
  rulerBgColor = '#fff';
  rulerStroke = '#e6e6e6';
  rulerMarkStroke = '#c1c1c1';
  rulerWidth = 20; // 宽度
  rulerMarkSize = 4; // 刻度高度

  /**** 网格相关 ****/
  snapToPixelGrid = true; // 是否吸附到像素网格
  minPixelGridZoom = 8; // draw pixel grid When zoom reach this value
  pixelGridLineColor = '#ccccccee'; // pixel grid line color

  offsetX = 0; // 鼠标坐标位置的修正值
  offsetY = 0;
}
