/* global setInterval */
/* global document */

(
    function () {
        'use strict';
        var container_width = 4000;
        var container_height = 1000;
        var width_mod = 3;
        var square_width = container_width / (width_mod * 2.5);

        var random_RGB = function() {
            return Math.floor(Math.random() * 255);
        };

        var random_opacity = function() {
            return ((Math.random() * 0.3) + 0.025).toFixed(2);
        };

        var random_color = function() {
            return (
                'rgba(' +
                random_RGB()     + ', ' +
                random_RGB()     + ', ' +
                random_RGB()     + ', ' +
                // '0, ' +
                // '0, ' +
                // '0, ' +
                random_opacity() + ')'
            );
        };

        var nudge = function(x, ratio) {
            return (x * (1 - (Math.random() * ratio))).toFixed(2);
        };

        var update_position = function(x) {
            var mod = 20;
            return (x * ((mod - 1) + (Math.random() + 0.5)) / mod);
        };

        var make_square = function(x, y, width, color) {
            var polygon = document.createElementNS(
                'http://www.w3.org/2000/svg', 'rect'
            );
            polygon.setAttribute('fill', color);
            polygon.setAttribute('stroke', false ? '#000000' : 'none');
            polygon.setAttribute('width', width);
            polygon.setAttribute('height', width);
            polygon.setAttribute('x', x);
            polygon.setAttribute('y', y);

            return polygon;
        };

        var draw_squares = function(id) {
            var columns = Math.floor(Math.random() * 3) + 3;
            var n_stack = Math.floor(Math.random() * 2) + 2;
            var centroid = (square_width / n_stack) / width_mod;

            var elem = document.getElementById(id);
            elem.setAttribute('width', container_width);
            elem.setAttribute('height', container_height);

            var i, n;
            for (i = 0; i < columns; i++) {
                for (n = 0; n < n_stack; n++) {
                    var col = (
                        (container_width / (columns + 1)) * (i + 0.75)
                    ) + centroid;

                    elem.append(
                        make_square(
                            nudge(col - centroid, 0.05),
                            nudge((container_height / 2.5) - centroid, 2.5),
                            square_width,
                            random_color()
                        )
                    );
                }
            }
        };

        var swap_element = function(id) {
            var elem = document.getElementById(id);
            var n = elem.childElementCount;
            var i = Math.floor(Math.random() * n);

            var random_square = elem.childNodes[i];

            var old_x = random_square.getAttribute('x');
            var old_y = random_square.getAttribute('y');

            var centroid = (square_width / n) / 2;

            elem.removeChild(random_square);
            elem.append(
                make_square(
                    update_position(old_x),
                    Math.floor(Math.random() * (container_height / 2)),
                    square_width,
                    random_color()
                )
            );
        };

        var replace_square = function() {
            swap_element('square');
        };

        var clear_squares = function(id) {
            var elem = document.getElementById(id);
            while (elem.hasChildNodes()) {
                elem.removeChild(elem.lastChild);
            }
        };

        var redraw = function() {
            clear_squares('square');
            draw_squares('square');
        };

        // document.getElementById('squares_box').style.background = (
        //     random_color()
        //     );

        draw_squares('square');

        setInterval(replace_square, 3000);
        setInterval(redraw, 30000);
    } ()
);
