'use client';
import { useEffect, useRef } from 'react';

export default function AmChartsMap() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Esperar un momento a que carguen los scripts de CDN de amCharts
    const initChart = () => {
      if (!window.am5 || !window.am5map) {
        setTimeout(initChart, 100);
        return;
      }

      // Evitar crear múltiples roots
      if (chartRef.current) {
        chartRef.current.dispose();
      }

      var root = window.am5.Root.new("chartdiv");
      chartRef.current = root;

      var meteoraTheme = window.am5.Theme.new(root);
      meteoraTheme.rule("InterfaceColors").setAll({
        primaryButton: window.am5.color(0x1a1f3a),
        primaryButtonHover: window.am5.color(0x5465FF),
        primaryButtonDown: window.am5.color(0x3f50e0),
        primaryButtonActive: window.am5.color(0x41D3BD),
        primaryButtonText: window.am5.color(0xffffff),
        secondaryButton: window.am5.color(0x14182d),
        secondaryButtonHover: window.am5.color(0x1d2342),
        secondaryButtonDown: window.am5.color(0x101426),
        secondaryButtonText: window.am5.color(0xffffff),
        background: window.am5.color(0x0a0e12),
        text: window.am5.color(0xffffff)
      });

      root.setThemes([window.am5themes_Animated.new(root), meteoraTheme]);

      var bgDark = window.am5.color(0x0a0e12);
      var ocean = window.am5.color(0x243f73);
      var land = window.am5.color(0x14203a);
      var border = window.am5.color(0x31456f);
      var primaryBlue = window.am5.color(0x8EA8FF);
      var accentTeal = window.am5.color(0x5465FF);
      var softBlue = window.am5.color(0xDDE6FF);
      var whiteSoft = window.am5.color(0xDDE3FF);

      var chart = root.container.children.push(window.am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "rotateY",
        projection: window.am5map.geoOrthographic(),
        homeGeoPoint: { longitude: -101, latitude: 26 },
        homeZoomLevel: 1,
        minZoomLevel: 0.8,
        zoomLevel: 1
      }));

      var bgSeries = chart.series.push(window.am5map.MapPolygonSeries.new(root, {}));
      bgSeries.mapPolygons.template.setAll({
        fill: ocean,
        fillOpacity: 1,
        strokeOpacity: 0
      });
      bgSeries.data.push({
        geometry: window.am5map.getGeoRectangle(90, 180, -90, -180)
      });

      var graticuleSeries = chart.series.push(window.am5map.GraticuleSeries.new(root, {}));
      graticuleSeries.mapLines.template.setAll({
        stroke: primaryBlue,
        strokeOpacity: 0.08,
        strokeWidth: 0.7
      });

      var polygonSeries = chart.series.push(window.am5map.MapPolygonSeries.new(root, {
        geoJSON: window.am5geodata_worldLow
      }));

      polygonSeries.mapPolygons.template.setAll({
        fill: land,
        stroke: border,
        strokeWidth: 0.8,
        strokeOpacity: 0.45,
        tooltipText: "{name}"
      });

      polygonSeries.events.on("datavalidated", function () {
        window.am5.array.each(polygonSeries.dataItems, function (di) {
          var id = di.get("id");
          if (id === "MX") di.get("mapPolygon").setAll({ fill: window.am5.color(0x24305c) });
          if (id === "US") di.get("mapPolygon").setAll({ fill: window.am5.color(0x202a4d) });
        });
      });

      var sankeySeries = chart.series.push(window.am5map.MapSankeySeries.new(root, {
        polygonSeries: polygonSeries,
        maxWidth: 0.6,
        controlPointDistance: 0.35,
        resolution: 80,
        nodePadding: 0.12
      }));

      sankeySeries.mapPolygons.template.setAll({
        fill: primaryBlue,
        fillOpacity: 0.22,
        strokeOpacity: 0,
        tooltipText: "{source} → {target}"
      });

      sankeySeries.nodes.mapPolygons.template.setAll({
        fill: accentTeal,
        stroke: softBlue,
        strokeWidth: 1.8,
        fillOpacity: 0.95,
        strokeOpacity: 1,
        tooltipText: "{name}"
      });

      sankeySeries.bullets.push(function () {
        return window.am5.Bullet.new(root, {
          locationX: 0,
          autoRotate: true,
          autoRotateAngle: -90,
          sprite: window.am5.Circle.new(root, {
            radius: 3,
            fill: accentTeal,
            stroke: whiteSoft,
            strokeWidth: 1,
            visible: false
          })
        });
      });

      sankeySeries.events.on("datavalidated", function () {
        var maxLength = 0;
        window.am5.array.each(sankeySeries.dataItems, function (dataItem) {
          var len = sankeySeries.getPathLength(dataItem);
          if (len > maxLength) maxLength = len;
        });

        var baseDuration = 7000;
        var minDuration = 2200;

        window.am5.array.each(sankeySeries.dataItems, function (dataItem) {
          var pathLength = sankeySeries.getPathLength(dataItem) || maxLength;
          var dur = maxLength > 0 ? Math.max(minDuration, (pathLength / maxLength) * baseDuration) : baseDuration;
          var bullets = dataItem.bullets;
          if (bullets) {
            window.am5.array.each(bullets, function (bullet) {
              var randomDur = dur * (0.82 + Math.random() * 0.35);
              var delay = Math.random() * randomDur;
              setTimeout(function () {
                if(root.isDisposed()) return;
                var sprite = bullet.get("sprite");
                if (sprite) sprite.set("visible", true);
                bullet.animate({
                  key: "locationX",
                  from: 0,
                  to: 1,
                  duration: randomDur,
                  easing: window.am5.ease.linear,
                  loops: Infinity
                });
              }, delay);
            });
          }
        });
      });

      var torreon = { lon: -103.45, lat: 25.54 };
      var monterrey = { lon: -100.31, lat: 25.68 };
      var cdmx = { lon: -99.13, lat: 19.43 };
      var houston = { lon: -95.36, lat: 29.76 };

      var gomezPalacio = { lon: -103.50, lat: 25.57 };
      var chihuahua = { lon: -106.08, lat: 28.63 };
      var durango = { lon: -104.67, lat: 24.03 };
      var reynosa = { lon: -98.28, lat: 26.09 };
      var sanLuisPotosi = { lon: -100.98, lat: 22.16 };
      var tampico = { lon: -97.86, lat: 22.23 };
      var puebla = { lon: -98.20, lat: 19.04 };
      var queretaro = { lon: -100.39, lat: 20.59 };
      var cuernavaca = { lon: -99.22, lat: 18.92 };

      var austin = { lon: -97.74, lat: 30.27 };
      var dallas = { lon: -96.80, lat: 32.78 };
      var newOrleans = { lon: -90.07, lat: 29.95 };

      function flow(src, srcName, tgt, tgtName, value, wp) {
        var result = {
          sourceLongitude: src.lon,
          sourceLatitude: src.lat,
          targetLongitude: tgt.lon,
          targetLatitude: tgt.lat,
          source: srcName,
          target: tgtName,
          value: value
        };
        if (wp) result.waypoints = wp;
        return result;
      }

      var wpTexas = { longitude: -97.5, latitude: 28.8 };
      var wpSouthUS = { longitude: -100.0, latitude: 30.8 };

      sankeySeries.data.setAll([
        flow(monterrey, "Monterrey", houston, "Houston", 130, [wpTexas]),
        flow(cdmx, "Mexico City", houston, "Houston", 95, [wpSouthUS]),
        flow(torreon, "Torreón", gomezPalacio, "Gómez Palacio", 60),
        flow(torreon, "Torreón", chihuahua, "Chihuahua", 55),
        flow(torreon, "Torreón", durango, "Durango", 50),
        flow(monterrey, "Monterrey", reynosa, "Reynosa", 75),
        flow(monterrey, "Monterrey", sanLuisPotosi, "San Luis Potosí", 70),
        flow(monterrey, "Monterrey", tampico, "Tampico", 65),
        flow(cdmx, "Mexico City", puebla, "Puebla", 68),
        flow(cdmx, "Mexico City", queretaro, "Querétaro", 62),
        flow(cdmx, "Mexico City", cuernavaca, "Cuernavaca", 58),
        flow(houston, "Houston", austin, "Austin", 80),
        flow(houston, "Houston", dallas, "Dallas", 75),
        flow(houston, "Houston", newOrleans, "New Orleans", 70)
      ]);

      var pointSeries = chart.series.push(window.am5map.MapPointSeries.new(root, {}));
      function addHub(city, name, isPrimary) {
        pointSeries.pushDataItem({
          latitude: city.lat,
          longitude: city.lon,
          name: name,
          primary: isPrimary
        });
      }

      addHub(torreon, "Torreón", true);
      addHub(monterrey, "Monterrey", true);
      addHub(cdmx, "Mexico City", true);
      addHub(houston, "Houston", true);
      addHub(chihuahua, "Chihuahua", false);
      addHub(queretaro, "Querétaro", false);
      addHub(puebla, "Puebla", false);
      addHub(dallas, "Dallas", false);
      addHub(austin, "Austin", false);

      pointSeries.bullets.push(function (root, series, dataItem) {
        var context = dataItem.dataContext || {};
        var isPrimary = !!context.primary;
        var cityName = context.name || "";
        var container = window.am5.Container.new(root, {});

        var glow = container.children.push(window.am5.Circle.new(root, {
          radius: isPrimary ? 12 : 6,
          fill: isPrimary ? primaryBlue : accentTeal,
          fillOpacity: isPrimary ? 0.18 : 0.1,
          centerX: window.am5.p50,
          centerY: window.am5.p50
        }));

        container.children.push(window.am5.Circle.new(root, {
          radius: isPrimary ? 5 : 3,
          fill: isPrimary ? accentTeal : softBlue,
          stroke: whiteSoft,
          strokeWidth: 1.2,
          tooltipText: cityName,
          centerX: window.am5.p50,
          centerY: window.am5.p50
        }));

        if (isPrimary) {
          glow.animate({
            key: "scale",
            from: 0.9,
            to: 1.35,
            duration: 1400,
            easing: window.am5.ease.out(window.am5.ease.cubic),
            loops: Infinity
          });
          glow.animate({
            key: "opacity",
            from: 0.45,
            to: 0.1,
            duration: 1400,
            easing: window.am5.ease.out(window.am5.ease.cubic),
            loops: Infinity
          });
        }
        return window.am5.Bullet.new(root, { sprite: container });
      });

      var switchCont = chart.children.push(window.am5.Container.new(root, {
        layout: root.horizontalLayout,
        x: 20,
        y: 40
      }));

      switchCont.children.push(window.am5.Label.new(root, {
        centerY: window.am5.p50,
        text: "Globe",
        fill: whiteSoft,
        fontSize: 13
      }));

      var switchButton = switchCont.children.push(window.am5.Button.new(root, {
        themeTags: ["switch"],
        centerY: window.am5.p50,
        icon: window.am5.Circle.new(root, { themeTags: ["icon"] })
      }));

      var easing = window.am5.ease.inOut(window.am5.ease.cubic);
      var duration = 1500;

      function zoomToGlobe() {
        chart.set("projection", window.am5map.geoOrthographic());
        chart.set("panX", "rotateX");
        chart.set("panY", "rotateY");
        chart.animate({ key: "rotationX", to: -260, duration, easing });
        chart.animate({ key: "rotationY", to: -25, duration, easing });
        chart.animate({ key: "zoomLevel", to: 1.8, duration, easing });
        bgSeries.mapPolygons.template.set("fillOpacity", 1);
      }

      function zoomToMap() {
        chart.set("projection", window.am5map.geoMercator());
        chart.set("panX", "translateX");
        chart.set("panY", "translateY");
        chart.animate({ key: "rotationY", to: 0, duration, easing });
        setTimeout(function () {
          if(!root.isDisposed()){
            chart.zoomToGeoPoint({ longitude: -101, latitude: 27 }, 3.2, true, duration);
          }
        }, 100);
        bgSeries.mapPolygons.template.set("fillOpacity", 0);
      }

      var fadeDuration = 300;
      switchButton.on("active", function () {
        chart.goHome(duration);
        setTimeout(function () {
          if(root.isDisposed()) return;
          chart.seriesContainer.animate({ key: "opacity", to: 0, duration: fadeDuration });
        }, duration - fadeDuration);

        setTimeout(function () {
          if(root.isDisposed()) return;
          if (switchButton.get("active")) {
            zoomToMap();
          } else {
            zoomToGlobe();
          }
          chart.seriesContainer.animate({ key: "opacity", to: 1, duration: fadeDuration });
        }, duration);
      });

      switchCont.children.push(window.am5.Label.new(root, {
        centerY: window.am5.p50,
        text: "Map",
        fill: whiteSoft,
        fontSize: 13
      }));

      chart.appear(1000, 100);
      setTimeout(function () {
        if(!root.isDisposed()){
          zoomToGlobe();
        }
      }, 1000);

    };

    initChart();

    return () => {
      if (chartRef.current) {
        chartRef.current.dispose();
      }
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>;
}
