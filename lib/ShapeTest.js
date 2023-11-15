
const { circle, triangle, square } = require('./lib/shapes');

describe('Shape functions', () => {
    test('circle function should generate correct SVG string', () => {
        const data = {
            characters: 'LMN',
            textColor: 'blue',
            shapeColor: 'red',
        };

        const result = circle(data);

        expect(result).toContain('<circle');
        expect(result).toContain('fill="red"');
        expect(result).toContain('fill="blue"');
        expect(result).toContain('>LMN</text>');
    });

    test('triangle function should generate correct SVG string', () => {
        const data = {
            characters: 'RGR',
            textColor: 'green',
            shapeColor: 'yellow',
        };

        const result = triangle(data);

        expect(result).toContain('<polygon');
        expect(result).toContain('fill="yellow"');
        expect(result).toContain('fill="green"');
        expect(result).toContain('>RGR</text>');
    });

    test('square function should generate correct SVG string', () => {
        const data = {
            characters: 'SVG',
            textColor: 'purple',
            shapeColor: 'orange',
        };

        const result = square(data);

        expect(result).toContain('<rect');
        expect(result).toContain('fill="orange"');
        expect(result).toContain('fill="purple"');
        expect(result).toContain('>SVG</text>');
    });
});