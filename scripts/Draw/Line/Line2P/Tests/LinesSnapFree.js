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
// File        : scripts/Draw/Line/Line2P/Tests/LinesSnapFree.js
// Timestamp   : 2011-02-28 09:46:29
// Description : Lines drawn with free snap

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function LinesSnapFree() {
    TdbTest.call(this, 'scripts/Draw/Line/Line2P/Tests/LinesSnapFree.js');
}

LinesSnapFree.prototype = new TdbTest();

LinesSnapFree.prototype.test00 = function() {
    qDebug('running LinesSnapFree.test00()...');
    this.setUp();
    this.clickOnWidget('MainWindow::MainToolsPanel::LineMenuButton');
    this.clickOnWidget('MainWindow::LineToolsPanel::Line2PButton');
    this.clickOnWidget('MainWindow::SnapToolsPanel::SnapFreeButton');
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(3.5, 4.3);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(3.5, 4.3);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(51.3, 32.4);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(51.3, 32.4);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(2.790816472336535, new RVector(126.228, 37.1362, 0) );
    var p = new RVector(64.038996, -27.103323);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(64.038996, -27.103323);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(-73.747205, -32.472361);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.MidButton, 4, 0);
    var p = new RVector(-73.747205, -32.472361);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.MidButton, 0, 0);
    this.setZoom(1.6150558288984582, new RVector(193.248, 108.012, 0) );
    var p = new RVector(-77.462247, -75.814516);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(-77.462247, -75.814516);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(1.6150558288984582, new RVector(193.248, 108.012, 0) );
    var p = new RVector(-151.14391, 79.598068);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(-151.14391, 79.598068);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(1.6150558288984582, new RVector(193.248, 108.012, 0) );
    var p = new RVector(85.380421, 126.036091);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(85.380421, 126.036091);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(1.6150558288984582, new RVector(193.248, 108.012, 0) );
    var p = new RVector(177.637294, -41.140792);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(177.637294, -41.140792);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(36.126139, -23.712986);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.MidButton, 4, 0);
    var p = new RVector(36.126139, -23.712986);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.MidButton, 0, 0);
    this.setZoom(0.5408789293239544, new RVector(653.492, 397.179, 0) );
    var p = new RVector(62.009935, -343.562754);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(62.009935, -343.562754);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(0.5408789293239544, new RVector(653.492, 397.179, 0) );
    var p = new RVector(-538.863906, -206.748402);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(-538.863906, -206.748402);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(0.5408789293239544, new RVector(653.492, 397.179, 0) );
    var p = new RVector(-537.015064, 266.555301);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(-537.015064, 266.555301);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(0.5408789293239544, new RVector(653.492, 397.179, 0) );
    var p = new RVector(444.720351, 301.68331);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(446.569194, 301.68331);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(0.15094938254970405, new RVector(3401.48, 589.834, 0) );
    var p = new RVector(467.364928, -437.464978);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(467.364928, -437.464978);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(0.15094938254970405, new RVector(3401.48, 589.834, 0) );
    var p = new RVector(-2785.38107, -410.966029);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(-2785.38107, -410.966029);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(0.15094938254970405, new RVector(3401.48, 589.834, 0) );
    var p = new RVector(-3116.617934, 1463.834618);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(-3116.617934, 1463.834618);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(0.024379168015552274, new RVector(5332.1, 11383.4, 0) );
    var p = new RVector(11813.686695, 4654.915604);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(11813.686695, 4654.915604);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(0.024379168015552274, new RVector(5332.1, 11383.4, 0) );
    var p = new RVector(18171.573883, -8717.156806);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(18171.573883, -8717.156806);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(0.024379168015552274, new RVector(5332.1, 11383.4, 0) );
    var p = new RVector(-532.92004, -10480.957768);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(-532.92004, -10480.957768);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(0.024379168015552274, new RVector(5332.1, 11383.4, 0) );
    var p = new RVector(-1353.29258, -2359.269617);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(-1353.29258, -2359.269617);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.787037037037041, new RVector(14.6073, 53.5589, 0) );
    var p = new RVector(4.055139, -3.792468);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(4.055139, -3.792468);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(24.883200000000016, new RVector(2.11645, 10.8611, 0) );
    var p = new RVector(0.616313, 0.793336);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(0.616313, 0.793336);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(-0.075995, 0.135261);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.MidButton, 4, 0);
    var p = new RVector(-0.075995, 0.112004);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.MidButton, 0, 0);
    this.setZoom(42.998169600000026, new RVector(6.26231, 5.91151, 0) );
    var p = new RVector(-0.936497, 0.4376);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(-0.936497, 0.4376);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(42.998169600000026, new RVector(6.26231, 5.91151, 0) );
    var p = new RVector(-0.680672, -0.957809);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(-0.680672, -0.957809);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(221.8611106740438, new RVector(0.703072, 1.41726, 0) );
    var p = new RVector(0.874492, -0.254373);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(0.874492, -0.254373);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(221.8611106740438, new RVector(0.703072, 1.41726, 0) );
    var p = new RVector(0.396715, 0.083676);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(0.396715, 0.083676);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(0.410237, -0.010978);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    var p = new RVector(0.410237, -0.010978);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(-0.013451, -0.3941);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    var p = new RVector(-0.013451, -0.3941);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('LinesSnapFree_000.dxf');
    this.tearDown();
    qDebug('finished LinesSnapFree.test00()');
};

