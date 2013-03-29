/**
 * Copyright (c) 2011-2013 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */
// Auto generated by Testing Dashboard
// File        : scripts/Draw/Line/Line2P/Tests/LinesSnapCoordinate.js
// Timestamp   : 2011-02-11 16:32:54
// Description : Lines drawn with coordinate snap

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function LinesSnapCoordinate() {
    TdbTest.call(this, 'scripts/Draw/Line/Line2P/Tests/LinesSnapCoordinate.js');
}

LinesSnapCoordinate.prototype = new TdbTest();

LinesSnapCoordinate.prototype.test00 = function() {
    qDebug('running LinesSnapCoordinate.test00()...');
    this.setUp();
    this.clickOnWidget('MainWindow::MainToolsPanel::LineMenuButton');
    this.clickOnWidget('MainWindow::LineToolsPanel::Line2PButton');
    this.clickOnWidget('MainWindow::SnapToolsPanel::SnapCoordinateButton');
    this.setToolOption('SnapCoordinate/X',  [ 0, 0 ] );
    this.setToolOption('SnapCoordinate/Y',  [ 0, 0 ] );
    this.setToolOption('SnapCoordinate/Relative', 'false');
    this.updateToolOptions();
    this.clickOnWidget('MainWindow::Options::Set');
    this.setToolOption('SnapCoordinate/X',  [ 10, 0 ] );
    this.setToolOption('SnapCoordinate/Y',  [ 10, 0 ] );
    this.setToolOption('SnapCoordinate/Relative', 'false');
    this.updateToolOptions();
    this.clickOnWidget('MainWindow::Options::Set');
    this.setToolOption('SnapCoordinate/X',  [ 20, 0 ] );
    this.setToolOption('SnapCoordinate/Y',  [ 10, 0 ] );
    this.setToolOption('SnapCoordinate/Relative', 'false');
    this.updateToolOptions();
    this.clickOnWidget('MainWindow::Options::Set');
    this.setToolOption('SnapCoordinate/X',  [ 0, 0 ] );
    this.setToolOption('SnapCoordinate/Y',  [ 0, 0 ] );
    this.setToolOption('SnapCoordinate/Relative', 'false');
    this.updateToolOptions();
    this.clickOnWidget('MainWindow::Options::Set');
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(232, 117), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(232, 117), Qt.RightButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(204, 124), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(204, 124), Qt.RightButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(182, 240), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(182, 240), Qt.RightButton, 0, 0);
    this.verifyDrawing('LinesSnapCoordinate_000.dxf');
    this.tearDown();
    qDebug('finished LinesSnapCoordinate.test00()');
};

