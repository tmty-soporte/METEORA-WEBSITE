/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    am5?: any;
    am5map?: any;
    am5geodata_worldLow?: any;
    am5themes_Animated?: any;
  }
}

type GeoPoint = {
  lon: number;
  lat: number;
};

type Waypoint = {
  longitude: number;
  latitude: number;
};

type FlowData = {
  sourceLongitude: number;
  sourceLatitude: number;
  targetLongitude: number;
  targetLatitude: number;
  source: string;
  target: string;
  value: number;
  waypoints?: Waypoint[];
};

export default function AmChartsMap() {
  const chartRef = useRef<any | null>(null);
  const retryTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    function clearRetryTimeout() {
      if (retryTimeoutRef.current !== null) {
        window.clearTimeout(retryTimeoutRef.current);
        retryTimeoutRef.current = null;
      }
    }

    function disposeChart() {
      if (chartRef.current && !chartRef.current.isDisposed()) {
        chartRef.current.dispose();
      }

      chartRef.current = null;
    }

    function flow(
      src: GeoPoint,
      srcName: string,
      tgt: GeoPoint,
      tgtName: string,
      value: number,
      wp?: Waypoint[]
    ): FlowData {
      const result: FlowData = {
        sourceLongitude: src.lon,
        sourceLatitude: src.lat,
        targetLongitude: tgt.lon,
        targetLatitude: tgt.lat,
        source: srcName,
        target: tgtName,
        value,
      };

      if (wp) {
        result.waypoints = wp;
      }

      return result;
    }

    function initChart() {
      if (!isMounted) {
        return;
      }

      if (
        !window.am5 ||
        !window.am5map ||
        !window.am5geodata_worldLow ||
        !window.am5themes_Animated
      ) {
        retryTimeoutRef.current = window.setTimeout(initChart, 100);
        return;
      }

      clearRetryTimeout();
      disposeChart();

      const root = window.am5.Root.new('chartdiv');
      chartRef.current = root;

      const meteoraTheme = window.am5.Theme.new(root);

      meteoraTheme.rule('InterfaceColors').setAll({
        primaryButton: window.am5.color(0x1a1f3a),
        primaryButtonHover: window.am5.color(0x5465ff),
        primaryButtonDown: window.am5.color(0x3f50e0),
        primaryButtonActive: window.am5.color(0x41d3bd),
        primaryButtonText: window.am5.color(0xffffff),
        secondaryButton: window.am5.color(0x14182d),
        secondaryButtonHover: window.am5.color(0x1d2342),
        secondaryButtonDown: window.am5.color(0x101426),
        secondaryButtonText: window.am5.color(0xffffff),
        background: window.am5.color(0x0a0e12),
        text: window.am5.color(0xffffff),
      });

      root.setThemes([window.am5themes_Animated.new(root), meteoraTheme]);

      const ocean = window.am5.color(0x243f73);
      const land = window.am5.color(0x14203a);
      const border = window.am5.color(0x31456f);
      const primaryBlue = window.am5.color(0x8ea8ff);
      const accentTeal = window.am5.color(0x5465ff);
      const softBlue = window.am5.color(0xdde6ff);
      const whiteSoft = window.am5.color(0xdde3ff);

      const chart = root.container.children.push(
        window.am5map.MapChart.new(root, {
          panX: 'rotateX',
          panY: 'rotateY',
          projection: window.am5map.geoOrthographic(),
          homeGeoPoint: {
            longitude: -101,
            latitude: 26,
          },
          homeZoomLevel: 1,
          minZoomLevel: 0.8,
          zoomLevel: 1,
        })
      );

      const bgSeries = chart.series.push(window.am5map.MapPolygonSeries.new(root, {}));

      bgSeries.mapPolygons.template.setAll({
        fill: ocean,
        fillOpacity: 1,
        strokeOpacity: 0,
      });

      bgSeries.data.push({
        geometry: window.am5map.getGeoRectangle(90, 180, -90, -180),
      });

      const graticuleSeries = chart.series.push(window.am5map.GraticuleSeries.new(root, {}));

      graticuleSeries.mapLines.template.setAll({
        stroke: primaryBlue,
        strokeOpacity: 0.08,
        strokeWidth: 0.7,
      });

      const polygonSeries = chart.series.push(
        window.am5map.MapPolygonSeries.new(root, {
          geoJSON: window.am5geodata_worldLow,
        })
      );

      polygonSeries.mapPolygons.template.setAll({
        fill: land,
        stroke: border,
        strokeWidth: 0.8,
        strokeOpacity: 0.45,
        tooltipText: '{name}',
      });

      polygonSeries.events.on('datavalidated', function () {
        window.am5.array.each(polygonSeries.dataItems, function (dataItem: any) {
          const id = dataItem.get('id');
          const mapPolygon = dataItem.get('mapPolygon');

          if (!mapPolygon) {
            return;
          }

          if (id === 'MX') {
            mapPolygon.setAll({
              fill: window.am5.color(0x24305c),
            });
          }

          if (id === 'US') {
            mapPolygon.setAll({
              fill: window.am5.color(0x202a4d),
            });
          }
        });
      });

      const sankeySeries = chart.series.push(
        window.am5map.MapSankeySeries.new(root, {
          polygonSeries,
          maxWidth: 0.6,
          controlPointDistance: 0.35,
          resolution: 80,
          nodePadding: 0.12,
        })
      );

      sankeySeries.mapPolygons.template.setAll({
        fill: primaryBlue,
        fillOpacity: 0.22,
        strokeOpacity: 0,
        tooltipText: '{source} → {target}',
      });

      sankeySeries.nodes.mapPolygons.template.setAll({
        fill: accentTeal,
        stroke: softBlue,
        strokeWidth: 1.8,
        fillOpacity: 0.95,
        strokeOpacity: 1,
        tooltipText: '{name}',
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
            visible: false,
          }),
        });
      });

      sankeySeries.events.on('datavalidated', function () {
        let maxLength = 0;

        window.am5.array.each(sankeySeries.dataItems, function (dataItem: any) {
          const length = sankeySeries.getPathLength(dataItem);

          if (length > maxLength) {
            maxLength = length;
          }
        });

        const baseDuration = 7000;
        const minDuration = 2200;

        window.am5.array.each(sankeySeries.dataItems, function (dataItem: any) {
          const pathLength = sankeySeries.getPathLength(dataItem) || maxLength;
          const duration =
            maxLength > 0
              ? Math.max(minDuration, (pathLength / maxLength) * baseDuration)
              : baseDuration;

          const bullets = dataItem.bullets;

          if (!bullets) {
            return;
          }

          window.am5.array.each(bullets, function (bullet: any) {
            const randomDuration = duration * (0.82 + Math.random() * 0.35);
            const delay = Math.random() * randomDuration;

            window.setTimeout(function () {
              if (root.isDisposed()) {
                return;
              }

              const sprite = bullet.get('sprite');

              if (sprite) {
                sprite.set('visible', true);
              }

              bullet.animate({
                key: 'locationX',
                from: 0,
                to: 1,
                duration: randomDuration,
                easing: window.am5.ease.linear,
                loops: Infinity,
              });
            }, delay);
          });
        });
      });

      const torreon: GeoPoint = {
        lon: -103.45,
        lat: 25.54,
      };

      const monterrey: GeoPoint = {
        lon: -100.31,
        lat: 25.68,
      };

      const cdmx: GeoPoint = {
        lon: -99.13,
        lat: 19.43,
      };

      const houston: GeoPoint = {
        lon: -95.36,
        lat: 29.76,
      };

      const gomezPalacio: GeoPoint = {
        lon: -103.5,
        lat: 25.57,
      };

      const chihuahua: GeoPoint = {
        lon: -106.08,
        lat: 28.63,
      };

      const durango: GeoPoint = {
        lon: -104.67,
        lat: 24.03,
      };

      const reynosa: GeoPoint = {
        lon: -98.28,
        lat: 26.09,
      };

      const sanLuisPotosi: GeoPoint = {
        lon: -100.98,
        lat: 22.16,
      };

      const tampico: GeoPoint = {
        lon: -97.86,
        lat: 22.23,
      };

      const puebla: GeoPoint = {
        lon: -98.2,
        lat: 19.04,
      };

      const queretaro: GeoPoint = {
        lon: -100.39,
        lat: 20.59,
      };

      const cuernavaca: GeoPoint = {
        lon: -99.22,
        lat: 18.92,
      };

      const austin: GeoPoint = {
        lon: -97.74,
        lat: 30.27,
      };

      const dallas: GeoPoint = {
        lon: -96.8,
        lat: 32.78,
      };

      const newOrleans: GeoPoint = {
        lon: -90.07,
        lat: 29.95,
      };

      const wpTexas: Waypoint = {
        longitude: -97.5,
        latitude: 28.8,
      };

      const wpSouthUS: Waypoint = {
        longitude: -100.0,
        latitude: 30.8,
      };

      sankeySeries.data.setAll([
        flow(monterrey, 'Monterrey', houston, 'Houston', 130, [wpTexas]),
        flow(cdmx, 'Mexico City', houston, 'Houston', 95, [wpSouthUS]),
        flow(torreon, 'Torreón', gomezPalacio, 'Gómez Palacio', 60),
        flow(torreon, 'Torreón', chihuahua, 'Chihuahua', 55),
        flow(torreon, 'Torreón', durango, 'Durango', 50),
        flow(monterrey, 'Monterrey', reynosa, 'Reynosa', 75),
        flow(monterrey, 'Monterrey', sanLuisPotosi, 'San Luis Potosí', 70),
        flow(monterrey, 'Monterrey', tampico, 'Tampico', 65),
        flow(cdmx, 'Mexico City', puebla, 'Puebla', 68),
        flow(cdmx, 'Mexico City', queretaro, 'Querétaro', 62),
        flow(cdmx, 'Mexico City', cuernavaca, 'Cuernavaca', 58),
        flow(houston, 'Houston', austin, 'Austin', 80),
        flow(houston, 'Houston', dallas, 'Dallas', 75),
        flow(houston, 'Houston', newOrleans, 'New Orleans', 70),
      ]);

      const pointSeries = chart.series.push(window.am5map.MapPointSeries.new(root, {}));

      function addHub(city: GeoPoint, name: string, isPrimary: boolean) {
        pointSeries.pushDataItem({
          latitude: city.lat,
          longitude: city.lon,
          name,
          primary: isPrimary,
        });
      }

      addHub(torreon, 'Torreón', true);
      addHub(monterrey, 'Monterrey', true);
      addHub(cdmx, 'Mexico City', true);
      addHub(houston, 'Houston', true);
      addHub(chihuahua, 'Chihuahua', false);
      addHub(queretaro, 'Querétaro', false);
      addHub(puebla, 'Puebla', false);
      addHub(dallas, 'Dallas', false);
      addHub(austin, 'Austin', false);

      pointSeries.bullets.push(function (root: any, _series: any, dataItem: any) {
        const context = (dataItem.dataContext ?? {}) as {
          primary?: boolean;
          name?: string;
        };

        const isPrimary = Boolean(context.primary);
        const cityName = context.name ?? '';
        const container = window.am5.Container.new(root, {});

        const glow = container.children.push(
          window.am5.Circle.new(root, {
            radius: isPrimary ? 12 : 6,
            fill: isPrimary ? primaryBlue : accentTeal,
            fillOpacity: isPrimary ? 0.18 : 0.1,
            centerX: window.am5.p50,
            centerY: window.am5.p50,
          })
        );

        container.children.push(
          window.am5.Circle.new(root, {
            radius: isPrimary ? 5 : 3,
            fill: isPrimary ? accentTeal : softBlue,
            stroke: whiteSoft,
            strokeWidth: 1.2,
            tooltipText: cityName,
            centerX: window.am5.p50,
            centerY: window.am5.p50,
          })
        );

        if (isPrimary) {
          glow.animate({
            key: 'scale',
            from: 0.9,
            to: 1.35,
            duration: 1400,
            easing: window.am5.ease.out(window.am5.ease.cubic),
            loops: Infinity,
          });

          glow.animate({
            key: 'opacity',
            from: 0.45,
            to: 0.1,
            duration: 1400,
            easing: window.am5.ease.out(window.am5.ease.cubic),
            loops: Infinity,
          });
        }

        return window.am5.Bullet.new(root, {
          sprite: container,
        });
      });

      const switchCont = chart.children.push(
        window.am5.Container.new(root, {
          layout: root.horizontalLayout,
          x: 20,
          y: 40,
        })
      );

      switchCont.children.push(
        window.am5.Label.new(root, {
          centerY: window.am5.p50,
          text: 'Globe',
          fill: whiteSoft,
          fontSize: 13,
        })
      );

      const switchButton = switchCont.children.push(
        window.am5.Button.new(root, {
          themeTags: ['switch'],
          centerY: window.am5.p50,
          icon: window.am5.Circle.new(root, {
            themeTags: ['icon'],
          }),
        })
      );

      const easing = window.am5.ease.inOut(window.am5.ease.cubic);
      const duration = 1500;

      function zoomToGlobe() {
        chart.set('projection', window.am5map.geoOrthographic());
        chart.set('panX', 'rotateX');
        chart.set('panY', 'rotateY');

        chart.animate({
          key: 'rotationX',
          to: -260,
          duration,
          easing,
        });

        chart.animate({
          key: 'rotationY',
          to: -25,
          duration,
          easing,
        });

        chart.animate({
          key: 'zoomLevel',
          to: 1.8,
          duration,
          easing,
        });

        bgSeries.mapPolygons.template.set('fillOpacity', 1);
      }

      function zoomToMap() {
        chart.set('projection', window.am5map.geoMercator());
        chart.set('panX', 'translateX');
        chart.set('panY', 'translateY');

        chart.animate({
          key: 'rotationY',
          to: 0,
          duration,
          easing,
        });

        window.setTimeout(function () {
          if (!root.isDisposed()) {
            chart.zoomToGeoPoint(
              {
                longitude: -101,
                latitude: 27,
              },
              3.2,
              true,
              duration
            );
          }
        }, 100);

        bgSeries.mapPolygons.template.set('fillOpacity', 0);
      }

      const fadeDuration = 300;

      switchButton.on('active', function () {
        chart.goHome(duration);

        window.setTimeout(function () {
          if (root.isDisposed()) {
            return;
          }

          chart.seriesContainer.animate({
            key: 'opacity',
            to: 0,
            duration: fadeDuration,
          });
        }, duration - fadeDuration);

        window.setTimeout(function () {
          if (root.isDisposed()) {
            return;
          }

          if (switchButton.get('active')) {
            zoomToMap();
          } else {
            zoomToGlobe();
          }

          chart.seriesContainer.animate({
            key: 'opacity',
            to: 1,
            duration: fadeDuration,
          });
        }, duration);
      });

      switchCont.children.push(
        window.am5.Label.new(root, {
          centerY: window.am5.p50,
          text: 'Map',
          fill: whiteSoft,
          fontSize: 13,
        })
      );

      chart.appear(1000, 100);

      window.setTimeout(function () {
        if (!root.isDisposed()) {
          zoomToGlobe();
        }
      }, 1000);
    }

    initChart();

    return () => {
      isMounted = false;
      clearRetryTimeout();
      disposeChart();
    };
  }, []);

  return (
    <>
      <Script src="https://cdn.amcharts.com/lib/5/index.js" strategy="afterInteractive" />
      <Script src="https://cdn.amcharts.com/lib/5/map.js" strategy="afterInteractive" />
      <Script
        src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.amcharts.com/lib/5/themes/Animated.js"
        strategy="afterInteractive"
      />

      <div id="chartdiv" style={{ width: '100%', height: '100%' }} />
    </>
  );
}