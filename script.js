{\rtf1\ansi\ansicpg1252\cocoartf2636
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset134 PingFangSC-Regular;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let lastSelectedPatternFunction;\
\
document.getElementById('generateBtn').addEventListener('click', function() \{\
    lastSelectedPatternFunction = patterns[Math.floor(Math.random() * patterns.length)];\
    generatePattern();\
\});\
\
const BASE_STROKE = 1;\
\
// begin functions\
\
function simpleCirclePattern(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    for(let i = 0; i < density; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let r = Math.random() * 50;\
content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{r\}" stroke-width="5px" fill="none" stroke="black" transform="rotate($\{rotation\}, $\{x\}, $\{y\})" />`;\
\
    \}\
    return content;\
  \
\}\
\
\
\
function generateBlobs(svgWidth, svgHeight, density, rotation) \{\
    let maxBlobs = 10;\
    let numberOfBlobs = Math.floor(density * maxBlobs);\
 \
    let content = '';\
    for (let i = 0; i < numberOfBlobs; i++) \{\
        let startX = Math.random() * svgWidth;\
        let startY = Math.random() * svgHeight;\
\
        let d = `M$\{startX\} $\{startY\}`;\
        for (let j = 0; j < 1; j++) \{\
            let cp1x = Math.random() * svgWidth;\
            let cp1y = Math.random() * svgHeight;\
            let cp2x = Math.random() * svgWidth;\
            let cp2y = Math.random() * svgHeight;\
            let endX = Math.random() * svgWidth;\
            let endY = Math.random() * svgHeight;\
            d += ` C$\{cp1x\},$\{cp1y\} $\{cp2x\},$\{cp2y\} $\{endX\},$\{endY\}`;\
        \}\
        d += 'Z';  // Close path\
        \
content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="5px" transform="rotate($\{rotation\}, $\{startX\}, $\{startY\})" />`;\
\
    \}\
    return content;\
\}\
\
\
function generateSpatter(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let maxSpatters = 250;  // You can adjust this max value as needed\
    let numberOfSpatters = Math.floor(density * maxSpatters);\
\
    for (let i = 0; i < numberOfSpatters; i++) \{\
        let cx = Math.random() * svgWidth;\
        let cy = Math.random() * svgHeight;\
        let r = Math.random() * 5 + 0.5;  // Random radius\
\
        // If you want to apply rotation to the spatters, you can use the transform attribute\
content += `<circle cx="$\{cx\}" cy="$\{cy\}" r="$\{r\}" fill="black" stroke-width="10px" transform="rotate($\{rotation\}, $\{cx\}, $\{cy\})" />`;\
\
    \}\
\
    return content;\
\}\
\
\
\
\
\
\
function generateWaves(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    \
    // Adjust number of waves based on density slider\
    let maxWaves = 1;  // You can adjust this max value as needed\
    let numberOfWaves = Math.floor(density * maxWaves);\
\
    // Calculate the height per wave so they fill the canvas\
    let waveHeight = svgHeight / numberOfWaves;\
\
    for (let i = 0; i < numberOfWaves; i++) \{\
        let amplitude = waveHeight / 2;  // Set amplitude to half of waveHeight for filling effect\
        let frequency = Math.random() * 0.1 + 0.05;\
        let phase = Math.random() * 2 * Math.PI;\
\
        // Starting point for each wave, dependent on its position\
        let startY = i * waveHeight;\
\
        let d = `M0 $\{startY\}`;\
        for (let x = 0; x <= svgWidth; x++) \{\
            let y = startY + amplitude + amplitude * Math.sin(frequency * x + phase);\
            d += ` L$\{x\},$\{y\}`;\
        \}\
\
        // Calculate the center point of each wave for rotation\
        let waveCenterY = startY + (waveHeight / 2);\
        \
        // Incorporate the rotation value into the transform attribute, rotating around the wave's center\
        content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="5px" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{waveCenterY\})" />`;\
    \}\
\
    return content;\
\}\
\
\
\
function generateGeometric(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    \
    // Adjust number of shapes based on density slider\
    let maxShapes = 40;  // You can adjust this max value as needed\
    let numberOfShapes = Math.floor(density * maxShapes);\
\
    for (let i = 0; i < numberOfShapes; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let size = Math.random() * 30 + 10;\
\
        if (Math.random() > 0.5) \{\
            content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{size / 2\}" fill="none" stroke="black" stroke-width="5px" transform="rotate($\{rotation\}, $\{x\}, $\{y\})" />`;\
        \} else \{\
            content += `<rect x="$\{x - size/2\}" y="$\{y - size/2\}" width="$\{size\}" height="$\{size\}" fill="none" stroke="black" stroke-width="5px" transform="rotate($\{rotation\}, $\{x\}, $\{y\})" />`;\
        \}\
    \}\
\
    return content;\
\}\
\
\
\
function generateZigzag(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let amplitude = 10 + Math.random() * 20;\
    let frequency = Math.random() * 0.1 + 0.05;\
\
    let d = `M0 $\{svgHeight / 2\}`;\
    for (let x = 0; x <= svgWidth; x += 20) \{\
        let y = svgHeight / 2 + ((x % 40 == 0) ? amplitude : -amplitude);\
        d += ` L$\{x\},$\{y\}`;\
    \}\
\
    // Adjust the size of the zigzag based on density slider\
    d = scalePath(d, density);\
\
    content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="5px" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})" />`;\
    return content;\
\}\
\
// Helper function to scale the path based on density\
function scalePath(path, density) \{\
    const parser = new DOMParser();\
    const pathNode = parser.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg"><path d="$\{path\}" /></svg>`, "text/xml").querySelector("path");\
    const boundingBox = pathNode.getBBox();\
    const scale = Math.sqrt((density * boundingBox.width * boundingBox.height) / (svgWidth * svgHeight));\
    const translateX = (svgWidth - boundingBox.width * scale) / 2 - boundingBox.x * scale;\
    const translateY = (svgHeight - boundingBox.height * scale) / 2 - boundingBox.y * scale;\
    return `scale($\{scale\}) translate($\{translateX\} $\{translateY\}) $\{path\}`;\
\}\
\
\
\
function generateSquiggly(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let amplitude = 5 + Math.random() * 10;\
    let frequency = Math.random() * 0.1 + 0.05;\
\
    // Calculate the number of lines based on density\
    let linesCount = Math.floor(density * 2);  // Adjust this multiplier to change the amount of lines generated for a given density\
\
    // Distribute the lines evenly across the height\
    let distanceBetweenLines = svgHeight / linesCount;\
\
    for (let line = 0; line < linesCount; line++) \{\
        let startY = line * distanceBetweenLines;\
        let d = `M0 $\{startY\}`;\
\
        for (let x = 0; x <= svgWidth; x += 10) \{\
            let y = startY + amplitude * Math.sin(frequency * x);\
            d += ` L$\{x\},$\{y\}`;\
        \}\
\
        // Calculate the path's center for rotation. We'll use a random point on the line as the rotation axis.\
        let randomPointOnLine = Math.random() * svgWidth;\
        let pathCenterY = startY + amplitude * Math.sin(frequency * randomPointOnLine);\
\
        content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="5px" transform="rotate($\{rotation\}, $\{randomPointOnLine\}, $\{pathCenterY\})" />`;\
    \}\
\
    return content;\
\}\
\
\
function generateGrid(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
\
    let gridSize = 40 + Math.random() * 80;\
\
    // Adjusting maximum stroke widths based on density.\
    let maxVerticalStroke = 5; \
    let maxHorizontalStroke = 3;\
    \
    let verticalStrokeWidth = 2 + (density * (maxVerticalStroke - 2));\
    let horizontalStrokeWidth = 1 + (density * (maxHorizontalStroke - 1));\
\
    let verticalLinesCount = Math.floor(svgWidth / gridSize);\
    let horizontalLinesCount = Math.floor(svgHeight / gridSize);\
\
    // Vertical lines\
    for (let i = 0; i <= verticalLinesCount; i++) \{\
        let x = i * gridSize;\
        let randomRotateY = Math.random() * svgHeight;\
        content += `<line x1="$\{x\}" y1="0" x2="$\{x\}" y2="$\{svgHeight\}" stroke="black" stroke-width="$\{verticalStrokeWidth\}px" transform="rotate($\{rotation\}, $\{x\}, $\{randomRotateY\})" />`;\
    \}\
\
    // Horizontal lines\
    for (let i = 0; i <= horizontalLinesCount; i++) \{\
        let y = i * gridSize;\
        let randomRotateX = Math.random() * svgWidth;\
        content += `<line x1="0" y1="$\{y\}" x2="$\{svgWidth\}" y2="$\{y\}" stroke="black" stroke-width="$\{horizontalStrokeWidth\}px" transform="rotate($\{rotation\}, $\{randomRotateX\}, $\{y\})" />`;\
    \}\
\
    return content;\
\}\
\
\
\
function generateSunburst(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let gap = Math.max(100, 400 - density * 2); // Adjust the gap size based on density.\
    let strokeWidth = 2 + density * 1.1; // Adjust the stroke width based on density.\
\
    // Calculate number of centers based on gap size\
    let horizontalCenters = Math.ceil(svgWidth / gap);\
    let verticalCenters = Math.ceil(svgHeight / gap);\
\
    for (let h = 0; h < horizontalCenters; h++) \{\
        for (let v = 0; v < verticalCenters; v++) \{\
            let centerX = h * gap;\
            let centerY = v * gap;\
            let numberOfRays = 10 + Math.floor(Math.random() * 30);\
\
            for (let i = 0; i < numberOfRays; i++) \{\
                let angle = (Math.PI * 2 / numberOfRays) * i + rotation;\
                let rayLength = Math.random() * gap * 0.5 + gap * 0.3;\
                let x = centerX + Math.cos(angle) * rayLength;\
                let y = centerY + Math.sin(angle) * rayLength;\
\
                content += `<line x1="$\{centerX\}" y1="$\{centerY\}" x2="$\{x\}" y2="$\{y\}" stroke="black" stroke-width="$\{strokeWidth\}px" />`;\
            \}\
        \}\
    \}\
\
    return content;\
\}\
\
\
function generateDots(svgWidth, svgHeight, density, rotation) \{\
    let gap = Math.max(1, 400 - density * 2); // Adjust the gap size based on density.\
    let radius = 1 + density * 5; // Adjust the radius size based on density.\
    let content = '';\
\
    let horizontalDots = Math.ceil(svgWidth / gap);\
    let verticalDots = Math.ceil(svgHeight / gap);\
\
    for (let h = 0; h < horizontalDots; h++) \{\
        for (let v = 0; v < verticalDots; v++) \{\
            let jitter = gap * 0.2; // A bit of randomness\
            let cx = h * gap + (Math.random() * jitter - jitter / 2);\
            let cy = v * gap + (Math.random() * jitter - jitter / 2);\
\
            content += `<circle cx="$\{cx\}" cy="$\{cy\}" r="$\{radius\}" fill="black" transform="rotate($\{rotation\}, $\{cx\}, $\{cy\})" />`;\
        \}\
    \}\
\
    return content;\
\}\
\
\
\
function generateCrosshatches(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
\
    let gridSize = Math.max(40, 50 - density * 2); // Adjust grid size based on density.\
    let strokeWidth = 2 + density * 1; // Adjust stroke width based on density.\
    let offset = gridSize / 4;\
\
    for (let x = 0; x < svgWidth; x += gridSize) \{\
        for (let y = 0; y < svgHeight; y += gridSize) \{\
            let centerX = x + offset / 2;\
            let centerY = y + offset / 2;\
\
            content += `<line x1="$\{x\}" y1="$\{y\}" x2="$\{x+offset\}" y2="$\{y+offset\}" stroke="black" stroke-width="$\{strokeWidth\}px" transform="rotate($\{rotation\}, $\{centerX\}, $\{centerY\})" />`;\
            content += `<line x1="$\{x\}" y1="$\{y+offset\}" x2="$\{x+offset\}" y2="$\{y\}" stroke="black" stroke-width="$\{strokeWidth\}px" transform="rotate($\{rotation\}, $\{centerX\}, $\{centerY\})" />`;\
        \}\
    \}\
\
    return content;\
\}\
\
\
\
function generateBoldGeometric(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    \
    // Adjusting for more density by increasing the number of shapes\
    let numberOfShapes = Math.floor(density * 50) + 30;\
\
    // Adjust stroke-width for density\
    let strokeWidth = 0 + density * 0;\
\
    for (let i = 0; i < numberOfShapes; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        \
        // Making the size smaller\
        let size = Math.random() * 40 + 20;\
        \
        let rotateAngle = Math.random() * 360;\
\
        let shapeType = Math.random();\
        if (shapeType < 0.33) \{\
            content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{size / 2\}" fill="black" stroke="black" stroke-width="$\{strokeWidth\}px" transform="rotate($\{rotateAngle\},$\{x\},$\{y\})" />`;\
        \} else if (shapeType < 0.66) \{\
            content += `<rect x="$\{x - size/2\}" y="$\{y - size/2\}" width="$\{size\}" height="$\{size\}" fill="black" stroke="black" stroke-width="$\{strokeWidth\}px" transform="rotate($\{rotateAngle\},$\{x\},$\{y\})" />`;\
        \} else \{\
            let d = `M$\{x\} $\{y - size/2\} L$\{x - size/2\} $\{y + size/2\} L$\{x + size/2\} $\{y + size/2\} Z`;\
            content += `<path d="$\{d\}" fill="black" stroke="black" stroke-width="$\{strokeWidth\}px" transform="rotate($\{rotateAngle\},$\{x\},$\{y\})" />`;\
        \}\
    \}\
\
    return content;\
\}\
\
\
function generateSprinkles(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    \
    // Adjusting for more density by increasing the number of sprinkles\
    let numberOfSprinkles = Math.floor(density * 300) + 100;\
\
    // Base stroke-width set to 2 and adding the effect of density to make it thin\
    let strokeWidth = 10 + density * 10; \
\
    for (let i = 0; i < numberOfSprinkles; i++) \{\
        let x1 = Math.random() * svgWidth;\
        let y1 = Math.random() * svgHeight;\
        let x2 = x1 + Math.random() * 10 - 5; // Making them smaller\
        let y2 = y1 + Math.random() * 10 - 5; // Making them smaller\
\
        let rotateAngle = Math.random() * 360;\
        let rotateX = (x1 + x2) / 2;\
        let rotateY = (y1 + y2) / 2;\
        \
        content += `<line x1="$\{x1\}" y1="$\{y1\}" x2="$\{x2\}" y2="$\{y2\}" stroke="black" stroke-width="$\{strokeWidth\}px" transform="rotate($\{rotateAngle\},$\{rotateX\},$\{rotateY\})" />`;\
    \}\
\
    return content;\
\}\
\
\
function generateDottedGrid(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
\
    // Adjust the grid size and circle radius based on density.\
    let gridSize = Math.max(40, 80 - density * 20);\
    let circleRadius = Math.max(2, 4 - density);\
\
    for (let x = 0; x < svgWidth; x += gridSize) \{\
        for (let y = 0; y < svgHeight; y += gridSize) \{\
            let rotateAngle = Math.random() * 360;\
\
            content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{circleRadius\}" fill="black" transform="rotate($\{rotateAngle\},$\{x\},$\{y\})" />`;\
        \}\
    \}\
\
    return content;\
\}\
\
\
function generateBiggerSprinkles(svgWidth, svgHeight, density) \{\
    let content = '';\
    \
    // Use density to adjust the number of sprinkles and the stroke width.\
    let numberOfSprinkles = Math.floor((density * 50) + 55);\
    let strokeWidth = 1 + density * 2;  // Minimum stroke width of 1, which increases with density.\
\
    for (let i = 0; i < numberOfSprinkles; i++) \{\
        let x1 = Math.random() * svgWidth;\
        let y1 = Math.random() * svgHeight;\
        let x2 = x1 + Math.random() * 60 - 20;  // Slight increase for bigger sprinkles.\
        let y2 = y1 + Math.random() * 40 - 20;\
\
        // Adjusting for rotation.\
        let midX = (x1 + x2) / 2;\
        let midY = (y1 + y2) / 2;\
        let angle = Math.random() * 360;\
\
        content += `<line x1="$\{x1\}" y1="$\{y1\}" x2="$\{x2\}" y2="$\{y2\}" stroke="black" stroke-width="$\{strokeWidth\}px" transform="rotate($\{angle\}, $\{midX\}, $\{midY\})"/>`;\
    \}\
\
    return content;\
\}\
\
\
function generateChaoticSpirals(svgWidth, svgHeight, density) \{\
    let content = '';\
\
    // Adjust the number of spirals and stroke width based on density.\
    let numberOfSpirals = 10 + Math.floor(density * 10); // Increase the base number and range for denser spirals.\
    let strokeWidth = 2 + density * 0.5;  // Minimum stroke width of 1, which increases with density.\
\
    for (let i = 0; i < numberOfSpirals; i++) \{\
        let cx = Math.random() * svgWidth;\
        let cy = Math.random() * svgHeight;\
        let r = Math.random() * 30 + 20; // Decrease the base and range to get smaller spirals.\
\
        let d = `M$\{cx\},$\{cy\}`;\
        for (let j = 0; j < 360 * 3; j += 3) \{ // 3 rounds of 360 degrees for the spiral, with smaller step size for denser spiral.\
            let radian = j * (Math.PI / 180);\
            let x = cx + r * radian * Math.cos(radian);\
            let y = cy + r * radian * Math.sin(radian);\
            d += ` L$\{x\},$\{y\}`;\
        \}\
        \
        let rotateAngle = Math.random() * 360;\
\
        content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="$\{strokeWidth\}px" transform="rotate($\{rotateAngle\},$\{cx\},$\{cy\})" />`;\
    \}\
\
    return content;\
\}\
\
\
function generateRandomPolygons(svgWidth, svgHeight, density) \{\
    let content = '';\
\
    // Adjust the number of polygons and stroke width based on density.\
    let numberOfPolygons = 20 + Math.floor(density * 20);  // Increase the base number and range for denser polygons.\
    let strokeWidth = 0.5 + density;  // Minimum stroke width of 1, which increases with density, but still remains thin.\
\
    for (let i = 0; i < numberOfPolygons; i++) \{\
        let vertices = 3 + Math.floor(Math.random() * 5); // between triangles and heptagons\
        let size = Math.random() * 50 + 25; // Decrease the base and range to get smaller polygons.\
        let cx = Math.random() * svgWidth;\
        let cy = Math.random() * svgHeight;\
        \
        let d = '';\
        for (let j = 0; j < vertices; j++) \{\
            let angle = (j / vertices) * 2 * Math.PI;\
            let x = cx + size * Math.cos(angle);\
            let y = cy + size * Math.sin(angle);\
            d += j === 0 ? `M$\{x\},$\{y\}` : ` L$\{x\},$\{y\}`;\
        \}\
        d += ' Z';\
        \
        let rotateAngle = Math.random() * 360;\
\
        content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="$\{strokeWidth\}px" transform="rotate($\{rotateAngle\},$\{cx\},$\{cy\})" />`;\
    \}\
\
    return content;\
\}\
\
\
\
function generateFunkyCurves(svgWidth, svgHeight, density) \{\
    let content = '';\
\
    // Adjust the number of curves and stroke width based on density.\
    let numberOfCurves = 200 + Math.floor(density * 0.5); // Increase the base number and range for denser curves.\
    let strokeWidth = 0.1 + density; // Minimum stroke width of 1, which increases with density, but still remains thin.\
\
    for (let i = 0; i < numberOfCurves; i++) \{\
        let x1 = Math.random() * svgWidth;\
        let y1 = Math.random() * svgHeight;\
        let x2 = Math.random() * svgWidth;\
        let y2 = Math.random() * svgHeight;\
        let cx1 = Math.random() * svgWidth;\
        let cy1 = Math.random() * svgHeight;\
        let cx2 = Math.random() * svgWidth;\
        let cy2 = Math.random() * svgHeight;\
\
        // Central point for the rotation\
        let cxRotate = (x1 + x2) / 1;\
        let cyRotate = (y1 + y2) / 2;\
        let rotateAngle = Math.random() * 360;\
\
        content += `<path d="M$\{x1\} $\{y1\} C$\{cx1\} $\{cy1\}, $\{cx2\} $\{cy2\}, $\{x2\} $\{y2\}" fill="none" stroke="black" stroke-width="$\{strokeWidth\}px" transform="rotate($\{rotateAngle\},$\{cxRotate\},$\{cyRotate\})" />`;\
    \}\
\
    return content;\
\}\
\
\
function generateSticks(svgWidth, svgHeight) \{\
    let content = '';\
    let numberOfSticks = 300 + Math.floor(Math.random() * 500); // increased base and range for denser pattern\
\
    for (let i = 0; i < numberOfSticks; i++) \{\
        let x1 = Math.random() * svgWidth;\
        let y1 = Math.random() * svgHeight;\
        let length = Math.random() * 100 + 30; // smaller length\
\
        let angle = (Math.random() > 0.5) ? 45 : 90;\
        let x2 = x1 + length * Math.cos(angle * (Math.PI / 180));\
        let y2 = y1 + length * Math.sin(angle * (Math.PI / 180));\
        \
        let rotateAngle = Math.random() * 360;\
        content += `<line x1="$\{x1\}" y1="$\{y1\}" x2="$\{x2\}" y2="$\{y2\}" stroke="black" stroke-width="10" transform="rotate($\{rotateAngle\},$\{x1\},$\{y1\})"/>`; // thin stroke and added rotation\
    \}\
\
    return content;\
\}\
\
function generateStippling(svgWidth, svgHeight) \{\
    let content = '';\
    let numberOfDots = 300 + Math.floor(Math.random() * 100); // slightly adjusted the range\
\
    for (let i = 0; i < numberOfDots; i++) \{\
        let cx = Math.random() * svgWidth;\
        let cy = Math.random() * svgHeight;\
        let r = Math.random() * 20; // adjusted radius to avoid overwhelming the browser\
\
        let rotateAngle = Math.random() * 360;\
        content += `<circle cx="$\{cx\}" cy="$\{cy\}" r="$\{r\}" fill="black" transform="rotate($\{rotateAngle\},$\{cx\},$\{cy\})"/>`;\
    \}\
\
    return content;\
\}\
\
\
\
function generateGravel(svgWidth, svgHeight) \{\
    let content = '';\
    let numberOfPebbles = 1000 + Math.floor(Math.random() * 300); // Increased base and range for denser pattern\
\
    for (let i = 0; i < numberOfPebbles; i++) \{\
        let cx = Math.random() * svgWidth;\
        let cy = Math.random() * svgHeight;\
        let r = Math.random() * 10 + 2; // Smaller pebbles\
\
        let rotateAngle = Math.random() * 360; \
        content += `<circle cx="$\{cx\}" cy="$\{cy\}" r="$\{r\}" fill="black" transform="rotate($\{rotateAngle\},$\{cx\},$\{cy\})"/>`;\
    \}\
\
    return content;\
\}\
\
function generateMezzotint(svgWidth, svgHeight) \{\
    let content = '';\
    let numberOfDots = 5000 + Math.floor(Math.random() * 200); \
\
    for (let i = 0; i < numberOfDots; i++) \{\
        let cx = Math.random() * svgWidth;\
        let cy = Math.random() * svgHeight;\
        let r = 1.5 + Math.sin(i) * 1.5; \
\
        let rotateAngle = Math.random() * 360;\
        content += `<circle cx="$\{cx\}" cy="$\{cy\}" r="$\{r\}" fill="black" transform="rotate($\{rotateAngle\},$\{cx\},$\{cy\})"/>`;\
    \}\
    return content;\
\}\
\
function generateBurlap(svgWidth, svgHeight, density) \{\
    let content = '';\
    let interval = 40; \
    let baseStrokeWidth = 0.8;\
    let adjustedStrokeWidth = baseStrokeWidth + density * 0.1; // Assuming density is a value between 0-10\
\
    for (let x = 0; x < svgWidth; x += interval) \{\
        for (let y = 0; y < svgHeight; y += interval) \{\
            let rotateAngle = Math.random() * 360;\
            content += `<rect x="$\{x\}" y="$\{y\}" width="$\{interval\}" height="$\{interval\}" fill="none" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotateAngle\},$\{x + interval/2\},$\{y + interval/2\})"/>`;\
        \}\
    \}\
    return content;\
\}\
\
\
function generateHatching(svgWidth, svgHeight, density) \{\
    let content = '';\
    let interval = 8;\
    let baseStrokeWidth = 2;\
    let adjustedStrokeWidth = baseStrokeWidth + density * 0.1; // Assuming density is a value between 0-10\
\
    for (let x = 0; x < svgWidth; x += interval) \{\
        let rotateAngle = Math.random() * 360;\
        content += `<line x1="$\{x\}" y1="0" x2="$\{x\}" y2="$\{svgHeight\}" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotateAngle\},$\{x\},$\{svgHeight/2\})"/>`;\
    \}\
    for (let y = 0; y < svgHeight; y += interval) \{\
        let rotateAngle = Math.random() * 360;\
        content += `<line x1="0" y1="$\{y\}" x2="$\{svgWidth\}" y2="$\{y\}" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotateAngle\},$\{svgWidth/2\},$\{y\})"/>`;\
    \}\
    return content;\
\}\
\
\
function generateRipples(svgWidth, svgHeight, density) \{\
    let content = '';\
    let numberOfRipples = 200; // Increased for more ripples\
    let maxR = svgWidth / 5; // Adjusted for smaller ripples\
    let baseStrokeWidth = 2;\
    let adjustedStrokeWidth = baseStrokeWidth + density * 0.3; // Assuming density is a value between 0-10\
    \
    for (let i = 0; i < numberOfRipples; i++) \{\
        let cx = Math.random() * svgWidth; // Ripples centered randomly\
        let cy = Math.random() * svgHeight; // Ripples centered randomly\
        let r = (i / numberOfRipples) * maxR;\
        let rotateAngle = Math.random() * 360; // Random rotation for each ripple\
\
        content += `<circle cx="$\{cx\}" cy="$\{cy\}" r="$\{r\}" fill="none" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotateAngle\},$\{cx\},$\{cy\})" />`;\
    \}\
\
    return content;\
\}\
\
\
function generateDenseZigzag(svgWidth, svgHeight, density) \{\
    let content = '';\
    let intervalY = 20; // Adjusted for a denser pattern but not too dense\
    let baseStrokeWidth = 3;\
    let adjustedStrokeWidth = baseStrokeWidth + density * 0.3; // Adjust for density\
\
    for (let y = 0; y < svgHeight; y += intervalY) \{\
        let x2 = (y % (2 * intervalY) === 0) ? svgWidth : 0;\
        let rotateAngle = Math.random() * 360;\
        \
        content += `<line x1="0" y1="$\{y\}" x2="$\{x2\}" y2="$\{y + intervalY\}" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotateAngle\},$\{svgWidth/2\},$\{svgHeight/2\})"/>`;\
    \}\
    return content;\
\}\
\
function generateLabyrinth(svgWidth, svgHeight, density) \{\
    let content = '';\
    let step = 30; // Adjusted to be less dense\
    let baseStrokeWidth = 3;\
    let adjustedStrokeWidth = baseStrokeWidth + density * 0.3; // Adjust for density\
\
    for (let i = 0; i < svgWidth; i += step) \{\
        for (let j = 0; j < svgHeight; j += step) \{\
            let rotateAngle = Math.random() * 360;\
            if (Math.random() > 0.5) \{\
                content += `<line x1="$\{i\}" y1="$\{j\}" x2="$\{i + step\}" y2="$\{j + step\}" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotateAngle\},$\{i + step/2\},$\{j + step/2\})" />`;\
            \} else \{\
                content += `<line x1="$\{i + step\}" y1="$\{j\}" x2="$\{i\}" y2="$\{j + step\}" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotateAngle\},$\{i + step/2\},$\{j + step/2\})" />`;\
            \}\
        \}\
    \}\
    return content;\
\}\
\
\
function generateStarburst(svgWidth, svgHeight, density) \{\
    let content = '';\
    let lines = 100; // Adjusted for denser pattern\
    let baseStrokeWidth = 3;\
    let adjustedStrokeWidth = baseStrokeWidth + density * 0.3; \
    let cx = svgWidth / 2;\
    let cy = svgHeight / 2;\
    for (let i = 0; i < lines; i++) \{\
        let angle = (i / lines) * 2 * Math.PI;\
        let x = cx + svgWidth * Math.cos(angle);\
        let y = cy + svgHeight * Math.sin(angle);\
        content += `<line x1="$\{cx\}" y1="$\{cy\}" x2="$\{x\}" y2="$\{y\}" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" />`;\
    \}\
    return content;\
\}\
\
\
\
\
\
function generateShatteredGlass(svgWidth, svgHeight, density) \{\
    let content = '';\
    let pieces = 100; // Adjusted for denser pattern\
    let baseStrokeWidth = 3;\
    let adjustedStrokeWidth = baseStrokeWidth + density * 0.3;\
    for (let i = 0; i < pieces; i++) \{\
        let x1 = Math.random() * svgWidth;\
        let y1 = Math.random() * svgHeight;\
        let x2 = Math.random() * svgWidth;\
        let y2 = Math.random() * svgHeight;\
        let x3 = Math.random() * svgWidth;\
        let y3 = Math.random() * svgHeight;\
        let rotateAngle = Math.random() * 360;\
        content += `<polygon points="$\{x1\},$\{y1\} $\{x2\},$\{y2\} $\{x3\},$\{y3\}" fill="none" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotateAngle\},$\{(x1+x2+x3)/3\},$\{(y1+y2+y3)/3\})" />`;\
    \}\
    return content;\
\}\
\
\
\
function generateStaticNoise(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    \
    let basePixels = 1000; // Reduced base pixel count for more white space\
    let pixels = basePixels + Math.floor(density * 7); // Adjust total number based on density. Reduced multiplier for more white space.\
    \
    for (let i = 0; i < pixels; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        \
        let baseSize = 3; // Reduced base size\
        let w = baseSize + Math.random() * 10 * density; // Adjusted width range for smaller shapes\
        let h = baseSize + Math.random() * 10 * density; // Adjusted height range for smaller shapes\
        \
        let centerX = x + w/2; // center x-coordinate of the rect\
        let centerY = y + h/2; // center y-coordinate of the rect\
        \
        content += `<rect x="$\{x\}" y="$\{y\}" width="$\{w\}" height="$\{h\}" fill="black" transform="rotate($\{rotation\},$\{centerX\},$\{centerY\})" />`;\
    \}\
    \
    return content;\
\}\
\
\
function generateRandomGrid(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let gridSize = 15; // Smaller for increased density\
    const baseStrokeWidth = 3;\
    const adjustedStrokeWidth = baseStrokeWidth + density * 0.3;\
\
    for (let x = 0; x < svgWidth; x += gridSize) \{\
        for (let y = 0; y < svgHeight; y += gridSize) \{\
            let cx = x + gridSize/2;\
            let cy = y + gridSize/2;\
            if (Math.random() > 0.5) \{\
                content += `<rect x="$\{x\}" y="$\{y\}" width="$\{gridSize\}" height="$\{gridSize\}" fill="none" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotation\},$\{cx\},$\{cy\})" />`;\
            \}\
        \}\
    \}\
    return content;\
\}\
\
\
\
function generateGridWithCircles(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let gridSize = 50; // Smaller for increased density\
    const baseStrokeWidth = 3;\
    const adjustedStrokeWidth = baseStrokeWidth + density * 0.3;\
\
    for (let x = 0; x <= svgWidth; x += gridSize) \{\
        for (let y = 0; y <= svgHeight; y += gridSize) \{\
            let r = Math.random() * (gridSize / 2);\
            content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{r\}" fill="none" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotation\},$\{x\},$\{y\})" />`;\
        \}\
    \}\
    return content;\
\}\
\
\
\
function generateDiagonalGrid(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let gridSize = 30; // Smaller for increased density\
    const baseStrokeWidth = 2;\
    const adjustedStrokeWidth = baseStrokeWidth + density * 0.3;\
\
    for (let x = 0; x <= svgWidth; x += gridSize) \{\
        let cx = x + gridSize / 2;\
        content += `<line x1="$\{x\}" y1="0" x2="$\{x - svgWidth\}" y2="$\{svgHeight\}" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotation\},$\{cx\},$\{svgHeight/2\})" />`;\
        content += `<line x1="$\{x\}" y1="0" x2="$\{x + svgWidth\}" y2="$\{svgHeight\}" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotation\},$\{cx\},$\{svgHeight/2\})" />`;\
    \}\
    return content;\
\}\
\
\
function generateRandomFilledGrid(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let gridSize = 100; // Smaller for increased density\
    const baseStrokeWidth = 3;\
    const adjustedStrokeWidth = baseStrokeWidth + density * 0.3;\
\
    for (let x = 0; x < svgWidth; x += gridSize) \{\
        for (let y = 0; y < svgHeight; y += gridSize) \{\
            let cx = x + gridSize/2;\
            let cy = y + gridSize/2;\
            if (Math.random() > 0.5) \{\
                content += `<rect x="$\{x\}" y="$\{y\}" width="$\{gridSize\}" height="$\{gridSize\}" fill="black" stroke="none" transform="rotate($\{rotation\},$\{cx\},$\{cy\})" />`;\
            \}\
        \}\
    \}\
    return content;\
\}\
\
\
function generateGridWithRandomLines(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let gridSize = 50; // Smaller for increased density\
    const baseStrokeWidth = 3;\
    const adjustedStrokeWidth = baseStrokeWidth + density * 0.3;\
\
    for (let x = 0; x <= svgWidth; x += gridSize) \{\
        for (let y = 0; y <= svgHeight; y += gridSize) \{\
            let length = Math.random() * (gridSize / 2);\
            let angle = Math.random() * 2 * Math.PI;\
            let x1 = x + length * Math.cos(angle);\
            let y1 = y + length * Math.sin(angle);\
            content += `<line x1="$\{x\}" y1="$\{y\}" x2="$\{x1\}" y2="$\{y1\}" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotation\},$\{x\},$\{y\})" />`;\
        \}\
    \}\
    return content;\
\}\
\
\
function generateCheckerboard(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let baseGridSize = 25; // Base size is made smaller\
    let gridSize = baseGridSize + (density * 5); // Base size increased by a factor of the density\
    let flag = true;\
    const scale = 1 + (density * 0.004); // Adjust the multiplier (0.05) as needed to control scaling per density unit\
\
    for (let x = 0; x < svgWidth; x += gridSize) \{\
        for (let y = 0; y < svgHeight; y += gridSize) \{\
            let cx = x + gridSize / 2;\
            let cy = y + gridSize / 2;\
            if (flag) \{\
                content += `<rect x="$\{x\}" y="$\{y\}" width="$\{gridSize\}" height="$\{gridSize\}" fill="black" \
                transform="translate($\{cx\},$\{cy\}) rotate($\{rotation\}) scale($\{scale\}) translate(-$\{cx\},-$\{cy\})" />`;\
            \}\
            flag = !flag;\
        \}\
        flag = !flag;  // Alternate rows to maintain checkerboard pattern\
    \}\
    return content;\
\}\
\
\
function generateScratches(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let numScratches = 600;  // Increased for density\
    const baseStrokeWidth = 3;\
    const adjustedStrokeWidth = baseStrokeWidth + density * 0.3;\
\
    for (let i = 0; i < numScratches; i++) \{\
        let x1 = Math.random() * svgWidth;\
        let y1 = Math.random() * svgHeight;\
        let length = Math.random() * 50 + 25;  // Adjusted for denser pattern\
        let angle = Math.random() * 2 * Math.PI;\
        let x2 = x1 + length * Math.cos(angle);\
        let y2 = y1 + length * Math.sin(angle);\
        content += `<line x1="$\{x1\}" y1="$\{y1\}" x2="$\{x2\}" y2="$\{y2\}" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotation\},$\{x1\},$\{y1\})" />`;\
    \}\
    return content;\
\}\
\
\
\
function generateDustSpeckles(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let numSpeckles = 500; // Increased for more density\
    const baseStrokeWidth = 10;\
    const adjustedStrokeWidth = baseStrokeWidth + density * 0.3;\
\
    for (let i = 0; i < numSpeckles; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let r = Math.random();\
        content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{r\}" fill="black" stroke="5" transform="rotate($\{rotation\},$\{x\},$\{y\})" />`;\
    \}\
    return content;\
\}\
\
\
\
function generateStains(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let numStains = 800; // Increased for density\
    const baseStrokeWidth = 3;\
    const adjustedStrokeWidth = baseStrokeWidth + density;\
\
    for (let i = 0; i < numStains; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let r = Math.random() * 60 + 10; // Adjusted for size\
        content += `<ellipse cx="$\{x\}" cy="$\{y\}" rx="$\{r\}" ry="$\{r * 1\}" fill="black" \
        transform="rotate($\{rotation\},$\{x\},$\{y\})" stroke-width="$\{adjustedStrokeWidth\}" />`;\
    \}\
    return content;\
\}\
\
\
\
function generateWoodTexture(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let numGrains = 500; // Increased for density\
    const baseStrokeWidth = 3;\
    const adjustedStrokeWidth = baseStrokeWidth + density * 0.5;\
\
    for (let i = 0; i < numGrains; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let length = Math.random() * 200 + 40; // Adjusted for size\
        let angle = Math.random() * 0.2 - 0.1;\
        let x2 = x + length * Math.cos(angle);\
        let y2 = y + length * Math.sin(angle);\
        content += `<line x1="$\{x\}" y1="$\{y\}" x2="$\{x2\}" y2="$\{y2\}" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" \
        transform="rotate($\{rotation\},$\{x\},$\{y\})" />`;\
    \}\
    return content;\
\}\
\
\
function generateDamageMarks(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let numMarks = 800; // Increased for density\
    const baseStrokeWidth = 3;\
    const adjustedStrokeWidth = baseStrokeWidth + density * 0.6;\
\
    for (let i = 0; i < numMarks; i++) \{\
        let x1 = Math.random() * svgWidth;\
        let y1 = Math.random() * svgHeight;\
        let length = Math.random() * 15 + 7; // Adjusted for size\
        let angle = Math.random() * 2 * Math.PI;\
        let x2 = x1 + length * Math.cos(angle);\
        let y2 = y1 + length * Math.sin(angle);\
        content += `<line x1="$\{x1\}" y1="$\{y1\}" x2="$\{x2\}" y2="$\{y2\}" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" \
        transform="rotate($\{rotation\},$\{x1\},$\{y1\})" />`;\
    \}\
    return content;\
\}\
\
\
// new here\
\
\
function generateRandomTriangles(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let numTriangles = 200;\
    const baseStrokeWidth = 3;\
    const adjustedStrokeWidth = baseStrokeWidth + density * 0.5;\
\
    for (let i = 0; i < numTriangles; i++) \{\
        let x1 = Math.random() * svgWidth;\
        let y1 = Math.random() * svgHeight;\
        let x2 = x1 + (Math.random() * 60 - 30);\
        let y2 = y1 + (Math.random() * 60 - 30);\
        let x3 = x1 + (Math.random() * 60 - 30);\
        let y3 = y1 + (Math.random() * 60 - 30);\
        let cx = (x1 + x2 + x3) / 3;\
        let cy = (y1 + y2 + y3) / 3;\
        content += `<polygon points="$\{x1\},$\{y1\} $\{x2\},$\{y2\} $\{x3\},$\{y3\}" fill="none" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotation\},$\{cx\},$\{cy\})" />`;\
    \}\
\
    return content;\
\}\
\
function generateHoneycomb(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    let sideLength = 30; // Smaller hexagons\
    let height = Math.sqrt(3) * sideLength;\
    let offsetX = 1.5 * sideLength;\
    let offsetY = height;\
    let evenRow = true;\
    const baseStrokeWidth = 3;\
    const adjustedStrokeWidth = baseStrokeWidth + density * 0.5;\
\
    for (let y = 0; y < svgHeight + height; y += offsetY) \{\
        for (let x = evenRow ? 0 : -0.75 * sideLength; x < svgWidth + sideLength; x += offsetX) \{\
            let cx = x + sideLength;\
            let cy = y + height / 2;\
            content += `<polygon points="$\{x\},$\{y\} $\{x + sideLength\},$\{y\} $\{x + 1.5 * sideLength\},$\{y + 0.5 * height\} $\{x + sideLength\},$\{y + height\} $\{x\},$\{y + height\} $\{x - 0.5 * sideLength\},$\{y + 0.5 * height\}" fill="none" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotation\},$\{cx\},$\{cy\})" />`;\
        \}\
        evenRow = !evenRow;\
    \}\
\
    return content;\
\}\
\
function generateSpirograph(svgWidth, svgHeight, density, rotation) \{\
    // This is kept mostly the same as the spirograph naturally fills the space\
    let content = '';\
    let numPoints = 200; // More points for a denser pattern\
    let R = 100;\
    let r = 65;\
    let l = 0.8;\
    const baseStrokeWidth = 3;\
    const adjustedStrokeWidth = baseStrokeWidth + density * 0.5;\
\
    for (let i = 0; i < numPoints; i++) \{\
        let t = (i / numPoints) * (2 * Math.PI);\
        let x = R * ((1 - l) * Math.cos(t) + l * Math.cos((1 - l) * t / l));\
        let y = R * ((1 - l) * Math.sin(t) - l * Math.sin((1 - l) * t / l));\
        content += `<circle cx="$\{svgWidth / 2 + x\}" cy="$\{svgHeight / 2 + y\}" r="2" fill="black" stroke="black" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotation\},$\{svgWidth / 2 + x\},$\{svgHeight / 2 + y\})" />`;\
    \}\
\
    return content;\
\}\
\
function generateCircularMaze(svgWidth, svgHeight, density, rotation) \{\
    let content = '';\
    const centerX = svgWidth / 2;\
    const centerY = svgHeight / 2;\
    const maxRadius = Math.sqrt(centerX * centerX + centerY * centerY);  // Distance from the center to a corner\
    const startRadius = 20; \
    let numCircles = Math.floor(maxRadius / startRadius);\
    const baseStrokeWidth = 3;\
    const adjustedStrokeWidth = baseStrokeWidth + density * 0.5;\
\
    // Dynamic gap based on canvas size to ensure it fills entirely\
    let gap = (maxRadius - startRadius) / numCircles;\
\
    for (let i = 0; i < numCircles; i++) \{\
        let currentRadius = startRadius + i * gap;\
        let circum = 2 * Math.PI * currentRadius;\
        let numGaps = Math.floor(circum / (3 * gap));\
        let angles = [];\
        for (let j = 0; j < numGaps; j++) \{\
            angles.push(Math.random() * (2 * Math.PI / numGaps) + j * (2 * Math.PI / numGaps));\
        \}\
        angles.sort((a, b) => a - b);\
\
        let prevAngle = 0;\
        for (let angle of angles) \{\
            content += `<path d="M $\{centerX + currentRadius * Math.cos(prevAngle)\} $\{centerY + currentRadius * Math.sin(prevAngle)\} A $\{currentRadius\} $\{currentRadius\} 0 0 1 $\{centerX + currentRadius * Math.cos(angle)\} $\{centerY + currentRadius * Math.sin(angle)\}" stroke="black" fill="none" stroke-width="$\{adjustedStrokeWidth\}" transform="rotate($\{rotation\},$\{centerX\},$\{centerY\})"/>`;\
            prevAngle = angle + 2 * Math.PI / (2.5 * numGaps);\
        \}\
    \}\
\
    return content;\
\}\
\
\
\
\
function generateChineseLetters(svgWidth, svgHeight, density = 1) \{\
    const characters = ["
\f1 \'d2\'bb
\f0 ", "
\f1 \'b6\'fe
\f0 ", "
\f1 \'c8\'fd
\f0 ", "
\f1 \'cb\'c4
\f0 ", "
\f1 \'ce\'e5
\f0 "];\
    let content = '';\
    const numChars = 300;\
    const fontSize = 30 + (density * 5);\
    for (let i = 0; i < numChars; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let rotation = Math.random() * 360;\
        let chosenChar = characters[Math.floor(Math.random() * characters.length)];\
        content += `<text x="$\{x\}" y="$\{y\}" font-family="Arial" font-size="$\{fontSize\}" fill="black" transform="rotate($\{rotation\},$\{x\},$\{y\})">$\{chosenChar\}</text>`;\
    \}\
    return content;\
\}\
\
\
\
function generateMarbleTexture(svgWidth, svgHeight, density = 1) \{\
    let content = '';\
    const numVeins = Math.floor(20 * density);\
    const maxVeinLength = Math.max(svgWidth, svgHeight) / 5;\
    \
    for (let i = 0; i < numVeins; i++) \{\
        let startX = Math.random() * svgWidth;\
        let startY = Math.random() * svgHeight;\
        \
        let pathData = `M $\{startX\} $\{startY\}`;\
\
        let prevX = startX;\
        let prevY = startY;\
        for (let j = 0; j < 3; j++) \{\
            let midX = prevX + (Math.random() - 0.5) * maxVeinLength;\
            let midY = prevY + (Math.random() - 0.5) * maxVeinLength;\
\
            midX = Math.min(Math.max(0, midX), svgWidth);\
            midY = Math.min(Math.max(0, midY), svgHeight);\
\
            let endX = midX + (Math.random() - 0.5) * maxVeinLength;\
            let endY = midY + (Math.random() - 0.5) * maxVeinLength;\
\
            endX = Math.min(Math.max(0, endX), svgWidth);\
            endY = Math.min(Math.max(0, endY), svgHeight);\
\
            pathData += ` C $\{midX\} $\{midY\}, $\{midX\} $\{midY\}, $\{endX\} $\{endY\}`;\
\
            prevX = endX;\
            prevY = endY;\
        \}\
        \
        const strokeWidth = 1 + Math.random() * 2 * density;\
        content += `<path d="$\{pathData\}" fill="none" stroke="black" stroke-width="$\{strokeWidth\}" />`;\
    \}\
\
    return content;\
\}\
\
\
\
\
\
function generateHorizontalHalftone(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    const baseRadius = 2 + (density * 2);  // Reduced base size for smaller dots\
    const numDots = 50;\
    const cosTheta = Math.cos(rotation * (Math.PI / 180));\
    const sinTheta = Math.sin(rotation * (Math.PI / 180));\
\
    for (let i = 0; i < numDots; i++) \{\
        for (let j = 0; j < numDots; j++) \{\
            let x = (svgWidth / numDots) * i;\
            let y = (svgHeight / numDots) * j;\
            \
            // Calculate the rotated x-coordinate\
            let rotatedX = x * cosTheta - y * sinTheta;\
\
            let radius = baseRadius * (1 - (rotatedX / svgWidth));\
            content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{radius\}" fill="black" />`;\
        \}\
    \}\
    return content;\
\}\
\
\
\
function generateVerticalStippling(svgWidth, svgHeight, density = 1) \{\
    let content = '';\
    const numRows = 70;\
    const baseRadius = 2 + (density * 1);\
\
    for (let i = 0; i < numRows; i++) \{\
        let numDots = 15 + Math.round(60 * ((numRows - i) / numRows));\
        for (let j = 0; j < numDots; j++) \{\
            let x = Math.random() * svgWidth;\
            let y = (svgHeight / numRows) * i;\
            content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{baseRadius\}" fill="black" />`;\
        \}\
    \}\
    return content;\
\}\
\
\
function generateCrackedFloor(svgWidth, svgHeight, density = 1) \{\
    let content = '';\
    const numCracks = 120;\
    const baseStrokeWidth = 3 + (density * 2);\
\
    for (let i = 0; i < numCracks; i++) \{\
        let x1 = Math.random() * svgWidth;\
        let y1 = Math.random() * svgHeight;\
        let x2 = x1 + (Math.random() - 0.5) * 150;\
        let y2 = y1 + (Math.random() - 0.5) * 150;\
        content += `<line x1="$\{x1\}" y1="$\{y1\}" x2="$\{x2\}" y2="$\{y2\}" stroke="black" stroke-width="$\{baseStrokeWidth\}" />`;\
    \}\
    return content;\
\}\
\
\
function generateBrokenGlass(svgWidth, svgHeight, density = 1) \{\
    let content = '';\
    const maxDepth = 5;\
    const maxBranches = 2;\
    const strokeWidth = 0.5 * density;\
\
    function generateCrackSegment(x, y, angle, depth) \{\
        if (depth <= 0) return '';\
        \
        let length = (Math.random() * 600 + 20) / depth;\
        let endX = x + length * Math.cos(angle);\
        let endY = y + length * Math.sin(angle);\
\
        let segmentContent = `<line x1="$\{x\}" y1="$\{y\}" x2="$\{endX\}" y2="$\{endY\}" stroke="black" stroke-width="$\{strokeWidth\}" />`;\
\
        let branches = Math.random() * maxBranches;\
        for (let i = 0; i < branches; i++) \{\
            let branchAngleOffset = (Math.random() - 0.5) * Math.PI / 2;\
            let branchAngle = angle + branchAngleOffset;\
            segmentContent += generateCrackSegment(endX, endY, branchAngle, depth - 1);\
        \}\
\
        return segmentContent;\
    \}\
\
    const numFragments = 6 * density;\
    for (let i = 0; i < numFragments; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let angle = Math.random() * 2 * Math.PI;\
        content += generateCrackSegment(x, y, angle, maxDepth);\
    \}\
\
    return content;\
\}\
\
\
function generateOpticalIllusion(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    const baseSquareSize = 10 * density;\
    const numRows = Math.ceil(svgHeight / baseSquareSize);\
    const numColumns = Math.ceil(svgWidth / baseSquareSize);\
\
    for (let i = 0; i < numRows; i++) \{\
        let offsetX = (i % 2) * baseSquareSize; // offset every other row\
        for (let j = 0; j < numColumns; j++) \{\
            let x = (j * baseSquareSize * 2) + offsetX;\
            let y = i * baseSquareSize;\
            content += `<rect x="$\{x\}" y="$\{y\}" width="$\{baseSquareSize\}" height="$\{baseSquareSize\}" fill="black" transform="rotate($\{rotation\}, $\{x + baseSquareSize/2\}, $\{y + baseSquareSize/2\})" />`;\
        \}\
    \}\
    return content;\
\}\
\
\
\
function generateDenseSpirals(svgWidth, svgHeight, density = 1) \{\
    let content = '';\
    const numSpirals = Math.round(1 * density);\
    const spiralSpacing = 800 / density;\
    const maxRadius = svgWidth / (0.3 * density);\
    const strokeWidth = 5;\
\
    for (let i = 0; i < numSpirals; i++) \{\
        let centerX = Math.random() * svgWidth;\
        let centerY = Math.random() * svgHeight;\
        let currentRadius = spiralSpacing;\
\
        while (currentRadius < svgWidth / 4) \{ \
            content += `<circle cx="$\{centerX\}" cy="$\{centerY\}" r="$\{currentRadius\}" fill="none" stroke="black" stroke-width="$\{strokeWidth\}" />`;\
            currentRadius += spiralSpacing;\
        \}\
    \}\
    return content;\
\}\
\
\
\
function generate3DCubesPattern(svgWidth, svgHeight, density = 1, rotationDegree = 0) \{\
    let content = '';\
    const baseCubeSize = svgWidth / 2;\
    const cubeSize = baseCubeSize / density;\
    const halfSize = cubeSize / 2;\
    const heightOffset = (Math.sqrt(3) / 2) * cubeSize;\
\
    const rotationRadians = rotationDegree * (Math.PI / 180);  // Convert degree to radians\
    const cosAngle = Math.cos(rotationRadians);\
    const sinAngle = Math.sin(rotationRadians);\
\
    // Rotate a point (px, py) around another point (ox, oy) by a given angle\
    const rotate = (px, py, ox, oy, cos, sin) => \{\
        let x = px - ox;\
        let y = py - oy;\
        return \{\
            x: cos * x - sin * y + ox,\
            y: sin * x + cos * y + oy\
        \};\
    \};\
\
    for (let x = 0; x < svgWidth; x += cubeSize) \{\
        for (let y = 0; y < svgHeight; y += heightOffset) \{\
            // Define center point of the cube for rotation\
            const centerX = x;\
            const centerY = y - heightOffset / 4;\
\
            // Calculate rotated coordinates for each point of the cube\
            let top = rotate(x, y, centerX, centerY, cosAngle, sinAngle);\
            let topLeft = rotate(x - halfSize, y - heightOffset / 2, centerX, centerY, cosAngle, sinAngle);\
            let topRight = rotate(x + halfSize, y - heightOffset / 2, centerX, centerY, cosAngle, sinAngle);\
            let bottom = rotate(x, y - heightOffset, centerX, centerY, cosAngle, sinAngle);\
\
            // Vertical cube\
            content += `\
                <line x1="$\{top.x\}" y1="$\{top.y\}" x2="$\{topRight.x\}" y2="$\{topRight.y\}" stroke="black" stroke-width="5"  />\
                <line x1="$\{topRight.x\}" y1="$\{topRight.y\}" x2="$\{bottom.x\}" y2="$\{bottom.y\}" stroke="black" stroke-width="5"  />\
                <line x1="$\{bottom.x\}" y1="$\{bottom.y\}" x2="$\{topLeft.x\}" y2="$\{topLeft.y\}" stroke="black" stroke-width="5" />\
                <line x1="$\{topLeft.x\}" y1="$\{topLeft.y\}" x2="$\{top.x\}" y2="$\{top.y\}" stroke="black" stroke-width="5" />\
            `;\
\
            // Horizontal cube (only the top part to prevent overlap)\
            let bottomRight = rotate(x + halfSize, y + heightOffset / 2, centerX, centerY, cosAngle, sinAngle);\
            content += `\
                <line x1="$\{top.x\}" y1="$\{top.y\}" x2="$\{bottomRight.x\}" y2="$\{bottomRight.y\}" stroke="black" stroke-width="5"  />\
                <line x1="$\{bottomRight.x\}" y1="$\{bottomRight.y\}" x2="$\{topRight.x\}" y2="$\{topRight.y\}" stroke="black" stroke-width="5"  />\
            `;\
        \}\
    \}\
\
    return content;\
\}\
\
\
\
function generatePixelMixture(svgWidth, svgHeight, density = 1, rotationDegree = 0) \{\
    let content = '';\
    const numPixels = 500;\
    const baseStroke = 3 * density;\
\
    const rotationRadians = rotationDegree * (Math.PI / 180);\
\
    for (let i = 0; i < numPixels; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let size = (Math.random() < 0.5) ? 20 : 5;\
\
        // Rotate each rect around its center\
        let centerX = x + size / 2;\
        let centerY = y + size / 2;\
        let rotatedTopLeft = rotate(x, y, centerX, centerY, rotationRadians);\
        \
        content += `<rect x="$\{rotatedTopLeft.x\}" y="$\{rotatedTopLeft.y\}" width="$\{size\}" height="$\{size\}" fill="none" stroke="black" stroke-width="$\{baseStroke\}" />`;\
    \}\
    return content;\
\}\
\
\
function generateRandomBlobs(svgWidth, svgHeight, density = 1, rotationDegree = 0) \{\
    let content = '';\
    const baseNumBlobs = 20;\
    const numBlobs = baseNumBlobs * density;  // increase blobs based on density\
    const baseStroke = 0.1 * density;\
    const scaleFactor = 0.1;  // Reduce this value to make the blob even smaller\
    const rotationRadians = rotationDegree * (Math.PI / 180);\
\
    for (let i = 0; i < numBlobs; i++) \{\
        let baseX = Math.random() * svgWidth;\
        let baseY = Math.random() * svgHeight;\
\
        // Compute control points based on base points with some scaled randomness\
        let cp1x = baseX + (Math.random() - 0.5) * svgWidth * scaleFactor;\
        let cp1y = baseY + (Math.random() - 0.5) * svgHeight * scaleFactor;\
        let cp2x = baseX + (Math.random() - 0.5) * svgWidth * scaleFactor;\
        let cp2y = baseY + (Math.random() - 0.5) * svgHeight * scaleFactor;\
        let endX = baseX + (Math.random() - 0.5) * svgWidth * scaleFactor;\
        let endY = baseY + (Math.random() - 0.5) * svgHeight * scaleFactor;\
\
        // Rotation\
        let rotatedBase = rotate(baseX, baseY, baseX, baseY, rotationRadians);\
        let rotatedCp1 = rotate(cp1x, cp1y, baseX, baseY, rotationRadians);\
        let rotatedCp2 = rotate(cp2x, cp2y, baseX, baseY, rotationRadians);\
        let rotatedEnd = rotate(endX, endY, baseX, baseY, rotationRadians);\
\
        let d = `M$\{rotatedBase.x\},$\{rotatedBase.y\} C$\{rotatedCp1.x\},$\{rotatedCp1.y\} $\{rotatedCp2.x\},$\{rotatedCp2.y\} $\{rotatedEnd.x\},$\{rotatedEnd.y\}`;\
\
        content += `<path d="$\{d\}" fill="black" stroke="black" stroke-width="$\{baseStroke\}" />`;\
    \}\
    return content;\
\}\
\
\
// Utility function to rotate a point\
function rotate(px, py, ox, oy, angle) \{\
    let x = px - ox;\
    let y = py - oy;\
    return \{\
        x: Math.cos(angle) * x - Math.sin(angle) * y + ox,\
        y: Math.sin(angle) * x + Math.cos(angle) * y + oy\
    \};\
\}\
\
\
// Utility function to rotate a point\
function rotate(px, py, ox, oy, angle) \{\
    let x = px - ox;\
    let y = py - oy;\
    return \{\
        x: Math.cos(angle) * x - Math.sin(angle) * y + ox,\
        y: Math.sin(angle) * x + Math.cos(angle) * y + oy\
    \};\
\}\
\
\
\
function generateStarryNight(svgWidth, svgHeight, density = 1, rotationDegree = 0) \{\
    let content = '';\
    const numStars = 500;\
    const baseStroke = 1 * density;\
\
    for (let i = 0; i < numStars; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let size = Math.random() * 25 + 5;\
        content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{size\}" fill="none" stroke="black" stroke-width="$\{baseStroke\}" />`;\
    \}\
    return content;\
\}\
\
\
\
function generateLayeredWaves(svgWidth, svgHeight, density = 1, rotationDegree = 0) \{\
    let content = '';\
    const numWaves = 30;\
    const baseStroke = 3 * density;\
    const rotationRadians = rotationDegree * (Math.PI / 180);\
\
    for (let i = 0; i < numWaves; i++) \{\
        let y = i * (svgHeight / numWaves);\
\
        // Picking a random axis point on the wave\
        let ox = Math.random() * svgWidth;\
        let oy = y + (Math.random() - 0.5) * 20;  // slightly above or below the center y of the wave\
\
        // Rotating control points\
        let rotatedStart = rotate(0, y, ox, oy, rotationRadians);\
        let rotatedCtrl1 = rotate(svgWidth/4, y + 20, ox, oy, rotationRadians);\
        let rotatedCtrl2 = rotate(svgWidth/2, y, ox, oy, rotationRadians);\
        let rotatedEnd = rotate(svgWidth, y, ox, oy, rotationRadians);\
\
        content += `<path d="M$\{rotatedStart.x\} $\{rotatedStart.y\} Q$\{rotatedCtrl1.x\} $\{rotatedCtrl1.y\} $\{rotatedCtrl2.x\} $\{rotatedCtrl2.y\} T$\{rotatedEnd.x\} $\{rotatedEnd.y\}" stroke="black" stroke-width="$\{baseStroke\}" fill="none" />`;\
    \}\
    return content;\
\}\
\
// Utility function to rotate a point\
function rotate(px, py, ox, oy, angle) \{\
    let x = px - ox;\
    let y = py - oy;\
    return \{\
        x: Math.cos(angle) * x - Math.sin(angle) * y + ox,\
        y: Math.sin(angle) * x + Math.cos(angle) * y + oy\
    \};\
\}\
\
\
\
function generateScatteredTriangles(svgWidth, svgHeight, density = 1, rotationDegree = 0) \{\
    let content = '';\
    const numTriangles = 50 * density; // more triangles with density\
    const stroke = BASE_STROKE * density;\
\
    for (let i = 0; i < numTriangles; i++) \{\
        let x1 = Math.random() * svgWidth;\
        let y1 = Math.random() * svgHeight;\
        let x2 = x1 + (Math.random() * 50 - 25); // reduced size\
        let y2 = y1 + (Math.random() * 50 - 25);\
        let x3 = x1 + (Math.random() * 50 - 25);\
        let y3 = y1 + (Math.random() * 50 - 25);\
        content += `<polygon points="$\{x1\},$\{y1\} $\{x2\},$\{y2\} $\{x3\},$\{y3\}" stroke="black" stroke-width="$\{stroke\}" fill="none" />`;\
    \}\
    return content;\
\}\
\
\
function generateConfettiRectangles(svgWidth, svgHeight, density = 1, rotationDegree = 0) \{\
    let content = '';\
    const numRectangles = 100 * density; // more rectangles with density\
    const stroke = BASE_STROKE * density;\
\
    for (let i = 0; i < numRectangles; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let width = Math.random() * 60 + 10; // reduced size\
        let height = Math.random() * 60 + 10;\
        content += `<rect x="$\{x\}" y="$\{y\}" width="$\{width\}" height="$\{height\}" transform="rotate($\{rotationDegree\}, $\{x + width/2\}, $\{y + height/2\})" stroke="black" stroke-width="$\{stroke\}" fill="none" />`;\
    \}\
    return content;\
\}\
\
function generateInterlockingCircles(svgWidth, svgHeight, density = 1, rotationDegree = 0) \{\
    let content = '';\
    const numCircles = 20 * density; // more circles with density\
    const stroke = BASE_STROKE * density;\
\
    for (let i = 0; i < numCircles; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let r = Math.random() * 40 + 10; // reduced size\
        content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{r\}" stroke="black" stroke-width="$\{stroke\}" fill="none" />`;\
    \}\
    return content;\
\}\
\
function generateRandomBezier(svgWidth, svgHeight, density = 1, rotationDegree = 0) \{\
    let content = '';\
    const numPaths = 10 * density; // more paths with density\
    const stroke = BASE_STROKE * density;\
\
    for (let i = 0; i < numPaths; i++) \{\
        let d = `M$\{Math.random() * svgWidth\},$\{Math.random() * svgHeight\}`;\
        d += ` C$\{Math.random() * svgWidth\},$\{Math.random() * svgHeight\} $\{Math.random() * svgWidth\},$\{Math.random() * svgHeight\} $\{Math.random() * svgWidth\},$\{Math.random() * svgHeight\}`;\
        content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="$\{stroke\}" />`;\
    \}\
    return content;\
\}\
\
function generateCrazyGrid(svgWidth, svgHeight, density = 1, rotationDegree = 0) \{\
    let content = '';\
    const gridSize = 40; // reduced size\
    const stroke = BASE_STROKE * density;\
\
    for (let x = 0; x < svgWidth; x += gridSize) \{\
        for (let y = 0; y < svgHeight; y += gridSize) \{\
            let xOffset = Math.random() * 10 - 5;\
            let yOffset = Math.random() * 10 - 5;\
            content += `<line x1="$\{x\}" y1="$\{y\}" x2="$\{x + gridSize + xOffset\}" y2="$\{y\}" stroke="black" stroke-width="$\{stroke\}" />`;\
            content += `<line x1="$\{x\}" y1="$\{y\}" x2="$\{x\}" y2="$\{y + gridSize + yOffset\}" stroke="black" stroke-width="$\{stroke\}" />`;\
        \}\
    \}\
    return content;\
\}\
\
\
function generateTwistedStrings(svgWidth, svgHeight, density = 1) \{\
    let content = '';\
    const numStrings = 60;\
    const stringLength = 1000;  // reduced length\
    const stroke = BASE_STROKE * density;\
\
    for (let i = 0; i < numStrings; i++) \{\
        let startX = Math.random() * svgWidth;\
        let startY = Math.random() * svgHeight;\
        let controlX1 = startX + (Math.random() * 100 - 50);\
        let controlY1 = startY + (Math.random() * 100 - 50);\
        let controlX2 = startX + (Math.random() * 100 - 50);\
        let controlY2 = startY + (Math.random() * 100 - 50);\
        let endX = startX + (Math.random() * stringLength - stringLength/2);\
        let endY = startY + (Math.random() * stringLength - stringLength/2);\
        content += `<path d="M$\{startX\} $\{startY\} C$\{controlX1\} $\{controlY1\}, $\{controlX2\} $\{controlY2\}, $\{endX\} $\{endY\}" stroke="black" stroke-width="$\{stroke\}" fill="none" />`;\
    \}\
    return content;\
\}\
\
\
function generateScatteredOrganic(svgWidth, svgHeight, density = 1) \{\
    let content = '';\
    const numForms = 30;\
    const stroke = BASE_STROKE * density;\
\
    for (let i = 0; i < numForms; i++) \{\
        let d = `M$\{Math.random() * svgWidth\},$\{Math.random() * svgHeight\}`;\
        for (let j = 0; j < 4; j++) \{\
            d += ` Q$\{Math.random() * svgWidth\},$\{Math.random() * svgHeight\} $\{Math.random() * svgWidth\},$\{Math.random() * svgHeight\}`;\
        \}\
        content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="$\{stroke\}" />`;\
    \}\
    return content;\
\}\
\
\
function generateTwirlingLines(svgWidth, svgHeight, density = 1) \{\
    let content = '';\
    const numTwirls = 1000;\
    const twirlLength = 500;  // reduced length\
    const stroke = BASE_STROKE * density;\
\
    for (let i = 0; i < numTwirls; i++) \{\
        let startX = Math.random() * svgWidth;\
        let startY = Math.random() * svgHeight;\
        let endX = startX + (Math.random() * twirlLength - twirlLength/2);\
        let endY = startY + (Math.random() * twirlLength - twirlLength/2);\
        content += `<line x1="$\{startX\}" y1="$\{startY\}" x2="$\{endX\}" y2="$\{endY\}" transform="rotate($\{Math.random() * 360\}, $\{startX\}, $\{startY\})" stroke="black" stroke-width="$\{stroke\}" />`;\
    \}\
    return content;\
\}\
\
function generateDynamicDiamonds(svgWidth, svgHeight, density = 1) \{\
    let content = '';\
    const numDiamonds = 400;\
    const maxDim = 100;  // reduced size\
    const stroke = BASE_STROKE * density;\
\
    for (let i = 0; i < numDiamonds; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let halfDim = Math.random() * maxDim;\
        content += `<polygon points="$\{x\},$\{y-halfDim\} $\{x+halfDim\},$\{y\} $\{x\},$\{y+halfDim\} $\{x-halfDim\},$\{y\}" stroke="black" stroke-width="$\{stroke\}" fill="none" />`;\
    \}\
    return content;\
\}\
\
function generateHalftonePixelConstantSize(svgWidth, svgHeight, density = 1) \{\
    let content = '';\
    const pixelSize = 15;  // slightly reduced size\
    const distance = Math.sqrt(svgWidth * svgWidth + svgHeight * svgHeight);\
    \
    for (let x = 0; x < svgWidth; x += pixelSize) \{\
        for (let y = 0; y < svgHeight; y += pixelSize) \{\
            const currentDistance = Math.sqrt(x * x + y * y);\
            const opacity = currentDistance / distance;\
            if (Math.random() > opacity) \{\
                content += `<rect x="$\{x\}" y="$\{y\}" width="$\{pixelSize\}" height="$\{pixelSize\}" fill="black" stroke="none" />`;\
            \}\
        \}\
    \}\
    return content;\
\}\
\
\
\
function generateMandala(width, height, density = 1) \{\
    const step = 50;\
    const strokeWidth = 1 * density;\
    let paths = '';\
    for (let i = 0; i < width / 2; i += step) \{\
        const rotation = `transform="rotate($\{Math.random() * 360\}, $\{width / 2\}, $\{height / 2\})"`;\
        paths += `<ellipse cx="$\{width / 2\}" cy="$\{height / 2\}" rx="$\{i\}" ry="$\{i\}" fill="none" stroke="black" stroke-width="$\{strokeWidth\}" $\{rotation\} />`;\
        paths += `<line x1="$\{width / 2\}" y1="$\{height / 2 - i\}" x2="$\{width / 2\}" y2="$\{height / 2 + i\}" stroke="black" stroke-width="$\{strokeWidth\}" $\{rotation\} />`;\
        paths += `<line x1="$\{width / 2 - i\}" y1="$\{height / 2\}" x2="$\{width / 2 + i\}" y2="$\{height / 2\}" stroke="black" stroke-width="$\{strokeWidth\}" $\{rotation\} />`;\
    \}\
    return `<svg width="$\{width\}" height="$\{height\}">$\{paths\}</svg>`;\
\}\
\
\
function generatePaisley(width, height, density = 1) \{\
    const size = 25;\
    const strokeWidth = 1 * density;\
    let paisleys = '';\
    for (let x = 0; x < width; x += size) \{\
        for (let y = 0; y < height; y += size * 2) \{\
            const rotation = `transform="rotate($\{Math.random() * 360\}, $\{x + size\}, $\{y\})"`;\
            paisleys += `<path d="M$\{x\},$\{y\} Q$\{x + size\},$\{y - size\} $\{x + size * 2\},$\{y\} T$\{x + size * 4\} $\{y + size\}" fill="none" stroke="black" stroke-width="$\{strokeWidth\}" $\{rotation\} />`;\
        \}\
    \}\
    return `<svg width="$\{width\}" height="$\{height\}">$\{paisleys\}</svg>`;\
\}\
\
\
function generateDamask(width, height, density = 1) \{\
    const step = 20;\
    const strokeWidth = 1 * density;\
    let paths = '';\
    for (let x = 0; x < width; x += step) \{\
        const rotation = `transform="rotate($\{Math.random() * 360\}, $\{x\}, $\{height / 2\})"`;\
        paths += `<line x1="$\{x\}" y1="0" x2="$\{x\}" y2="$\{height\}" stroke="black" stroke-width="$\{strokeWidth\}" $\{rotation\} />`;\
    \}\
    for (let y = 0; y < height; y += step) \{\
        const rotation = `transform="rotate($\{Math.random() * 360\}, $\{width / 2\}, $\{y\})"`;\
        paths += `<line x1="0" y1="$\{y\}" x2="$\{width\}" y2="$\{y\}" stroke="black" stroke-width="$\{strokeWidth\}" $\{rotation\} />`;\
    \}\
    return `<svg width="$\{width\}" height="$\{height\}">$\{paths\}</svg>`;\
\}\
\
\
function generateHerringbone(width, height, density = 1) \{\
    const size = 20;\
    const strokeWidth = 1 * density;\
    let herringbones = '';\
    for (let x = 0; x < width; x += size * 2) \{\
        for (let y = 0; y < height; y += size * 1.5) \{\
            const rotation = `transform="rotate($\{Math.random() * 360\}, $\{x + size / 2\}, $\{y + size\})"`;\
            herringbones += `<line x1="$\{x\}" y1="$\{y\}" x2="$\{x + size\}" y2="$\{y + size\}" stroke="black" stroke-width="$\{strokeWidth\}" $\{rotation\} />`;\
            herringbones += `<line x1="$\{x + size\}" y1="$\{y + size\}" x2="$\{x\}" y2="$\{y + size * 2\}" stroke="black" stroke-width="$\{strokeWidth\}" $\{rotation\} />`;\
        \}\
    \}\
    return `<svg width="$\{width\}" height="$\{height\}">$\{herringbones\}</svg>`;\
\}\
\
\
function generateFishScale(width, height, density = 1) \{\
    const size = 15;\
    const strokeWidth = 0.5 * density;\
    let scales = '';\
    let offset = 0;\
\
    for (let y = 0; y < height; y += size * 1.5) \{\
        for (let x = offset; x < width; x += size * 2) \{\
            const rotation = `transform="rotate($\{Math.random() * 360\}, $\{x\}, $\{y\})"`;\
            scales += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{size / 2\}" fill="none" stroke="black" stroke-width="$\{strokeWidth\}" $\{rotation\} />`;\
        \}\
        offset = (offset === 0) ? size : 0;\
    \}\
    return `<svg width="$\{width\}" height="$\{height\}">$\{scales\}</svg>`;\
\}\
\
\
\
function generateLattice(width, height, density = 1) \{\
    const step = 20;\
    const strokeWidth = 0.5 * density;\
    let paths = '';\
    for (let x = 0; x < width; x += step) \{\
        const rotation = `transform="rotate($\{Math.random() * 360\}, $\{x\}, $\{height / 2\})"`;\
        paths += `<line x1="$\{x\}" y1="0" x2="$\{x\}" y2="$\{height\}" stroke="black" stroke-width="$\{strokeWidth\}" $\{rotation\} />`;\
    \}\
    for (let y = 0; y < height; y += step) \{\
        const rotation = `transform="rotate($\{Math.random() * 360\}, $\{width / 2\}, $\{y\})"`;\
        paths += `<line x1="0" y1="$\{y\}" x2="$\{width\}" y2="$\{y\}" stroke="black" stroke-width="$\{strokeWidth\}" $\{rotation\} />`;\
    \}\
    return `<svg width="$\{width\}" height="$\{height\}">$\{paths\}</svg>`;\
\}\
\
\
// here\
\
\
\
function generateHalftonePixelVariableSize(svgWidth, svgHeight, density = 1) \{\
    let content = '';\
    const basePixelSize = 2 * density;\
    const distance = Math.sqrt(svgWidth * svgWidth + svgHeight * svgHeight);\
    \
    for (let x = 0; x < svgWidth; x += basePixelSize) \{\
        for (let y = 0; y < svgHeight; y += basePixelSize) \{\
            const currentDistance = Math.sqrt(x * x + y * y);\
            const scale = currentDistance / distance;\
            const pixelSize = basePixelSize * scale;\
            if (Math.random() > scale) \{\
                content += `<rect x="$\{x\}" y="$\{y\}" width="$\{pixelSize\}" height="$\{pixelSize\}" fill="black" stroke="none" transform="rotate($\{Math.random() * 360\}, $\{x + pixelSize/2\}, $\{y + pixelSize/2\})" />`;\
            \}\
        \}\
    \}\
    return content;\
\}\
\
\
function generateChevron(width, height, density = 0.5) \{\
    const size = 100; // Smaller for denser pattern\
    const strokeWidth = getStrokeWidth(density);\
    let chevrons = '';\
    for(let x = 0; x < width; x += size) \{\
        for(let y = 0; y < height; y += size * 1.5) \{\
            const rotation1 = `rotate($\{Math.random() * 360\}, $\{x + size/2\}, $\{y + size\})`;\
            const rotation2 = `rotate($\{Math.random() * 360\}, $\{x + 1.5*size\}, $\{y + size\})`;\
            chevrons += `\
            <polygon points="$\{x\},$\{y\} $\{x+size\},$\{y+size\} $\{x\},$\{y+size*2\}" fill="black" stroke="black" stroke-width="$\{strokeWidth\}" transform="$\{rotation1\}" />\
            <polygon points="$\{x+size\},$\{y+size\} $\{x+size*2\},$\{y\} $\{x+size*2\},$\{y+size*2\}" fill="black" stroke="black" stroke-width="$\{strokeWidth\}" transform="$\{rotation2\}" />\
            `;\
        \}\
    \}\
    return `<svg width="$\{width\}" height="$\{height\}">$\{chevrons\}</svg>`;\
\}\
\
function generateStripes(width, height, density = 1) \{\
    const stripeWidth = 7.5;  // Adjusted for denser pattern\
    const strokeWidth = getStrokeWidth(density);\
    let stripes = '';\
    for(let x = 0; x < width; x += stripeWidth * 2) \{\
        const rotation = `rotate($\{Math.random() * 360\}, $\{x + stripeWidth / 2\}, $\{height / 2\})`;\
        stripes += `<rect x="$\{x\}" y="0" width="$\{stripeWidth\}" height="$\{height\}" fill="black" transform="$\{rotation\}" />`;\
    \}\
    return `<svg width="$\{width\}" height="$\{height\}">$\{stripes\}</svg>`;\
\}\
\
function generatePolkaDots(width, height, density = 1) \{\
    const radius = 20;  // Adjusted for denser pattern\
    const strokeWidth = getStrokeWidth(density);\
    let dots = '';\
    for(let x = 0; x < width; x += radius * 3) \{\
        for(let y = 0; y < height; y += radius * 3) \{\
            const rotation = `rotate($\{Math.random() * 360\}, $\{x\}, $\{y\})`;\
            dots += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{radius\}" fill="black" transform="$\{rotation\}" stroke="black" stroke-width="$\{strokeWidth\}" />`;\
        \}\
    \}\
    return `<svg width="$\{width\}" height="$\{height\}">$\{dots\}</svg>`;\
\}\
\
function generateCheckerboard(width, height, density = 1) \{\
    const tileSize = 50;  // Adjusted for denser pattern\
    const strokeWidth = getStrokeWidth(density);\
    let checkers = '';\
    for(let x = 0; x < width; x += tileSize) \{\
        for(let y = 0; y < height; y += tileSize) \{\
            if ((x / tileSize) % 2 === (y / tileSize) % 2) \{\
                const rotation = `rotate($\{Math.random() * 360\}, $\{x + tileSize / 2\}, $\{y + tileSize / 2\})`;\
                checkers += `<rect x="$\{x\}" y="$\{y\}" width="$\{tileSize\}" height="$\{tileSize\}" fill="black" transform="$\{rotation\}" stroke="black" stroke-width="$\{strokeWidth\}" />`;\
            \}\
        \}\
    \}\
    return `<svg width="$\{width\}" height="$\{height\}">$\{checkers\}</svg>`;\
\}\
\
function generateOpArt(width, height, density = 1) \{\
    const step = 50;  // Adjusted for denser pattern\
    const strokeWidth = getStrokeWidth(density);\
    let paths = '';\
    for(let i = 0; i < width/2; i += step) \{\
        const rotation = `rotate($\{Math.random() * 360\}, $\{width / 2\}, $\{height / 2\})`;\
        paths += `<ellipse cx="$\{width/2\}" cy="$\{height/2\}" rx="$\{i\}" ry="$\{width/4\}" fill="none" stroke="black" stroke-width="$\{strokeWidth\}" transform="$\{rotation\}" />`;\
    \}\
    return `<svg width="$\{width\}" height="$\{height\}">$\{paths\}</svg>`;\
\}\
\
\
\
function generateBarcode(svgWidth, svgHeight, density = 1, rotationDegree = 0) \{\
    let content = '';\
    const minBarWidth = 5 * density; \
    const maxBarWidth = 20 * density; \
    const barGap = 6 * density;\
    const totalMaxBarWidth = maxBarWidth + barGap;\
    \
    // Calculate diagonal length\
    const diagonalLength = Math.sqrt(svgWidth * svgWidth + svgHeight * svgHeight);\
    const yOffset = (diagonalLength - svgHeight) / 2;  // This will center the bar\
    \
    let x = 0;\
    while (x < svgWidth + diagonalLength) \{ // extend the loop beyond just the screen width\
        let barWidth = Math.random() * (maxBarWidth - minBarWidth) + minBarWidth;\
        const centerX = x + barWidth / 2;\
        const centerY = svgHeight / 2;\
        const rotation = `transform="rotate($\{rotationDegree\}, $\{centerX\}, $\{centerY\})"`;\
        content += `<rect x="$\{x\}" y="$\{-yOffset\}" width="$\{barWidth\}" height="$\{diagonalLength\}" fill="black" $\{rotation\} />`;\
        x += barWidth + barGap;\
    \}\
\
    return content;\
\}\
\
\
function generateRadiatingRays(width, height, density = 1, rotation = 0) \{\
    const center = \{\
        x: width / 2,\
        y: height / 2\
    \};\
    let pattern = '';\
    const baseStrokeWidth = 3;\
    const strokeWidth = baseStrokeWidth * density;\
\
    const zigzagLength = 20;  // Length of each segment of the zigzag\
    const numZigzags = Math.ceil(width / zigzagLength);  // Number of zigzags needed to reach the edge of the screen\
\
    for (let i = 0; i < 360; i += 5) \{\
        let currentRotation = i + rotation;\
        \
        let points = `$\{center.x\},$\{center.y\} `;  // Start at the center\
        for (let j = 1; j <= numZigzags; j++) \{\
            let x = center.x + j * zigzagLength;\
            let y = (j % 2 === 0) ? center.y : center.y - zigzagLength;\
            points += `$\{x\},$\{y\} `;\
        \}\
\
        pattern += `<polyline points="$\{points\}" transform="rotate($\{currentRotation\},$\{center.x\},$\{center.y\})" stroke="black" stroke-width="$\{strokeWidth\}" fill="none" />`;\
    \}\
\
    return `<svg width="$\{width\}" height="$\{height\}">$\{pattern\}</svg>`;\
\}\
\
\
\
function generateMoire(width, height, density = 1, rotation = 0) \{\
    let pattern = '';\
\
    const baseStrokeWidth = 0.25;\
    const strokeWidth = baseStrokeWidth * density;\
    const spacing = 500 / density; // Adjusting the gap between lines based on the density slider\
\
    for (let y = 0; y < height; y += spacing) \{\
        pattern += `<line x1="0" y1="$\{y\}" x2="$\{width\}" y2="$\{y\}" stroke="black" stroke-width="$\{strokeWidth\}" />`;\
    \}\
    for (let y = spacing / 2; y < height; y += spacing) \{\
        pattern += `<line x1="0" y1="$\{y\}" x2="$\{width\}" y2="$\{y\}" stroke="black" stroke-width="$\{strokeWidth\}" transform="rotate($\{rotation\}, $\{width / 2\}, $\{height / 2\})" />`;\
    \}\
\
    return `<svg width="$\{width\}" height="$\{height\}">$\{pattern\}</svg>`;\
\}\
\
\
\
function generateChainLink(width, height, density = 1, rotation = 0) \{\
    let pattern = '';\
\
    const gap = 800 / density;\
    const linkWidth = 480 / density;\
\
    for (let y = gap / 2; y < height; y += gap) \{\
        for (let x = (y % (2 * gap) === 0) ? 0 : gap / 2; x < width; x += gap) \{\
            pattern += `\
                <ellipse \
                    cx="$\{x\}" \
                    cy="$\{y\}" \
                    rx="$\{linkWidth / 2\}" \
                    ry="$\{linkWidth\}" \
                    fill="none" \
                    stroke="black" \
                    stroke-width="5" \
                    transform="rotate($\{rotation\},$\{x\},$\{y\})"\
                />\
            `;\
        \}\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" width="$\{width\}" height="$\{height\}">$\{pattern\}</svg>`;\
\}\
\
\
\
function generateFoliage(width, height, density = 1, rotation = 0) \{\
    let pattern = '';\
\
    const gap = 1000 / density;  // Adjusting the distance between foliage lines based on density.\
    const strokeWidth = 1 * density;\
\
    for (let x = gap / 2; x < width; x += gap) \{\
        let midPointX = x;\
        let midPointY = height / 2;\
        \
        pattern += `\
            <path \
                d="M $\{x\} 0 Q $\{x - 40\} $\{height / 2\}, $\{x\} $\{height / 2\} T $\{x\} $\{height\}" \
                stroke="black" \
                stroke-width="$\{strokeWidth\}" \
                fill="none"\
                transform="rotate($\{rotation\},$\{midPointX\},$\{midPointY\})"\
            />\
        `;\
        \
        pattern += `\
            <path \
                d="M $\{x\} 0 Q $\{x + 40\} $\{height / 2\}, $\{x\} $\{height / 2\} T $\{x\} $\{height\}" \
                stroke="black" \
                stroke-width="$\{strokeWidth\}" \
                fill="none"\
                transform="rotate($\{rotation\},$\{midPointX\},$\{midPointY\})"\
            />\
        `;\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" width="$\{width\}" height="$\{height\}">$\{pattern\}</svg>`;\
\}\
\
\
\
function generateHarlequin(width, height, density = 1, rotation = 0) \{\
    let pattern = '';\
\
    const diamondHeight = 500 / density;  // Increased size\
    const diamondWidth = 500 / density;  // Increased size\
    const strokeWidth = 1 * density; \
\
    for (let y = 0; y <= height + diamondHeight; y += diamondHeight) \{\
        for (let x = 0; (y % (2 * diamondHeight) === 0 ? x : x - diamondWidth / 2) <= width + diamondWidth; x += diamondWidth) \{\
            let midPointX = x + diamondWidth / 2;\
            let midPointY = y;\
            pattern += `\
                <polygon \
                    points="$\{x\},$\{y\} $\{x + diamondWidth / 2\},$\{y - diamondHeight / 2\} $\{x + diamondWidth\},$\{y\} $\{x + diamondWidth / 2\},$\{y + diamondHeight / 2\}" \
                    fill="none" \
                    stroke="black"\
                    stroke-width="$\{strokeWidth\}"\
                    transform="rotate($\{rotation\},$\{midPointX\},$\{midPointY\})"\
                />\
            `;\
        \}\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" width="$\{width\}" height="$\{height\}">$\{pattern\}</svg>`;\
\}\
\
\
function generateFingerprint(width, height, density = 1, rotation = 0) \{\
    let pattern = '';\
    const centerX = width / 2;\
    const centerY = height / 2;\
    const strokeWidth = 10 * density;\
\
    for (let i = 0; i < 10; i++) \{\
        let radius = 30 + i * 20 * density;\
        pattern += `\
            <path \
                d="M $\{centerX - radius\} $\{centerY\} \
                   C $\{centerX\} $\{centerY - radius\} $\{centerX\} $\{centerY - radius\} $\{centerX + radius\} $\{centerY\} \
                   C $\{centerX\} $\{centerY + radius\} $\{centerX\} $\{centerY + radius\} $\{centerX - radius\} $\{centerY\}" \
                fill="none" \
                stroke="black" \
                stroke-width="$\{strokeWidth\}"\
                transform="rotate($\{rotation\},$\{centerX\},$\{centerY\})"\
            />\
        `;\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" width="$\{width\}" height="$\{height\}">$\{pattern\}</svg>`;\
\}\
\
\
\
function generateBrocade(width, height, density = 1, rotation = 0) \{\
    const patternSize = 600 / density;  // Bigger size to reduce the number of SVG elements\
    const strokeWidth = 2 * density;\
    const svg = [];\
    \
    svg.push('<rect width="100%" height="100%" fill="white"/>'); // Background\
\
    for (let x = 0; x < width; x += patternSize) \{\
        for (let y = 0; y < height; y += patternSize) \{\
            const centerX = x + patternSize / 2;\
            const centerY = y + patternSize / 2;\
            \
            // Simplified circle pattern\
            svg.push(`\
                <circle \
                    cx="$\{centerX\}" \
                    cy="$\{centerY\}" \
                    r="$\{patternSize / 2\}" \
                    fill="none"\
                    stroke="black"\
                    stroke-width="$\{strokeWidth\}"\
                    transform="rotate($\{rotation\},$\{centerX\},$\{centerY\})"\
                />\
            `);\
        \}\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" width="$\{width\}" height="$\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
\
function generateCamouflage(width, height, density = 1, rotation = 0) \{\
    const colors = ["#000", "#000", "#000", "#000", "#000"];\
    const svg = []; \
\
 \
    const blobCount = 30 * density;\
\
    function randomPath(cx, cy) \{\
        let d = `M $\{cx\} $\{cy\}`;\
        let angle, x, y, controlX1, controlY1, controlX2, controlY2;\
\
        for (let i = 0; i < 3; i++) \{\
            angle = 2 * Math.PI * Math.random();\
            x = cx + (80 + Math.random() * 100) * Math.cos(angle);\
            y = cy + (80 + Math.random() * 100) * Math.sin(angle);\
\
            controlX1 = cx + (40 + Math.random() * 50) * Math.cos(angle - 0.3);\
            controlY1 = cy + (40 + Math.random() * 50) * Math.sin(angle - 0.3);\
\
            controlX2 = x - (40 + Math.random() * 50) * Math.cos(angle - 0.3);\
            controlY2 = y - (40 + Math.random() * 50) * Math.sin(angle - 0.3);\
\
            d += ` C $\{controlX1\} $\{controlY1\} $\{controlX2\} $\{controlY2\} $\{x\} $\{y\}`;\
        \}\
\
        d += "Z";  // Close the path\
        return d;\
    \}\
\
    for (let i = 0; i < blobCount; i++) \{\
        const x = Math.random() * width;\
        const y = Math.random() * height;\
        const color = colors[Math.floor(Math.random() * colors.length)];\
        const d = randomPath(x, y);\
        svg.push(`<path d="$\{d\}" fill="$\{color\}" />`);\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" width="$\{width\}" height="$\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
\
function generateChintz(width, height, density, rotation) \{\
    const patternSize = 600 / density;\
    const svg = [];\
    \
    svg.push('<rect width="100%" height="100%" fill="white"/>'); // Background\
\
    for (let x = 0; x < width; x += patternSize) \{\
        for (let y = 0; y < height; y += patternSize) \{\
            svg.push(`<circle cx="$\{x\}" cy="$\{y\}" r="$\{patternSize / 3\}" fill="black" transform="rotate($\{rotation\}, $\{x\}, $\{y\})"/>`);\
        \}\
    \}\
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
\
function generateFairIsle(width, height, density, rotation) \{\
    const patternSize = 600 / density;\
    const svg = [];\
    \
    svg.push('<rect width="100%" height="100%" fill="white"/>'); // Background\
\
    for (let x = 0; x < width; x += patternSize) \{\
        for (let y = 0; y < height; y += patternSize) \{\
            svg.push(`<circle cx="$\{x\}" cy="$\{y\}" r="$\{patternSize / 6\}" fill="black" transform="rotate($\{rotation\}, $\{x\}, $\{y\})"/>`);\
            svg.push(`<circle cx="$\{x + patternSize / 2\}" cy="$\{y + patternSize / 2\}" r="$\{patternSize / 6\}" fill="black" transform="rotate($\{rotation\}, $\{x + patternSize / 2\}, $\{y + patternSize / 2\})"/>`);\
        \}\
    \}\
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
\
function generateGingham(width, height, density, rotation) \{\
    const patternSize = 400 / density;\
    const svg = [];\
    \
\
    let alternateColor = false;\
    for (let x = 0; x < width; x += patternSize) \{\
        for (let y = 0; y < height; y += patternSize) \{\
            if (alternateColor) \{\
                svg.push(`<rect x="$\{x\}" y="$\{y\}" width="$\{patternSize\}" height="$\{patternSize\}" fill="black" transform="rotate($\{rotation + 30\}, $\{x + patternSize / 2\}, $\{y + patternSize / 2\})"/>`);\
            \}\
            alternateColor = !alternateColor;\
        \}\
        if (width / patternSize % 2 === 0) \{\
            alternateColor = !alternateColor;\
        \}\
    \}\
    \
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
\
function generateHoundstooth(width, height, density, rotation) \{\
    const patternSize = 400 / density;\
    const svg = [];\
    \
    svg.push('<rect width="100%" height="100%" fill="white"/>'); // Background\
\
    for (let x = 0; x < width; x += patternSize * 2) \{\
        for (let y = 0; y < height; y += patternSize * 2) \{\
            svg.push(`<path d="M $\{x\} $\{y\} l $\{patternSize\} 0 l 0 $\{patternSize\} l -$\{patternSize\} 0 Z" fill="black" transform="rotate($\{rotation + 45\}, $\{x + patternSize / 2\}, $\{y + patternSize / 2\})"/>`);\
            svg.push(`<path d="M $\{x + patternSize\} $\{y + patternSize\} l $\{patternSize\} 0 l 0 $\{patternSize\} l -$\{patternSize\} 0 Z" fill="black" transform="rotate($\{rotation\}, $\{x + 1.5 * patternSize\}, $\{y + 1.5 * patternSize\})"/>`);\
        \}\
    \}\
    \
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
\
function generateIkat(width, height, density, rotation) \{\
    const patternSize = 1000 / density;\
    const svg = [];\
    \
\
    for (let x = 0; x < width; x += patternSize) \{\
        for (let y = 0; y < height; y += patternSize) \{\
            svg.push(`<ellipse cx="$\{x\}" cy="$\{y\}" rx="$\{patternSize / 2\}" ry="$\{patternSize / 4\}" fill="black" transform="rotate($\{rotation + 45\}, $\{x\}, $\{y\})"/>`);\
            svg.push(`<ellipse cx="$\{x + patternSize / 2\}" cy="$\{y + patternSize / 2\}" rx="$\{patternSize / 4\}" ry="$\{patternSize / 2\}" fill="black" transform="rotate($\{rotation + 45\}, $\{x + patternSize / 2\}, $\{y + patternSize / 2\})"/>`);\
        \}\
    \}\
    \
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
\
\
function generateJacquard(width, height, density, rotation) \{\
    const patternSize = 500 / density;\
    const svg = [];\
    \
\
    for (let x = 0; x < width; x += patternSize) \{\
        for (let y = 0; y < height; y += patternSize) \{\
            svg.push(`<circle cx="$\{x\}" cy="$\{y\}" r="$\{patternSize / 4\}" fill="black" transform="rotate($\{rotation\}, $\{x + 10\}, $\{y\})"/>`);\
        \}\
    \}\
    \
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
\
function generateNeonGridscape(width, height, density, rotation) \{\
    const patternSize = 200 / density;\
    const svg = [];\
\
    // Drawing grid\
    for (let x = 0; x <= width; x += patternSize) \{\
        svg.push(`<line x1="$\{x\}" y1="0" x2="$\{x\}" y2="$\{height\}" stroke="black" stroke-opacity="1" stroke-width="5" transform="none", $\{width/2\}, $\{height/2\})"/>`);\
    \}\
    for (let y = 0; y <= height; y += patternSize) \{\
        svg.push(`<line x1="0" y1="$\{y\}" x2="$\{width\}" y2="$\{y\}" stroke="black" stroke-opacity="1" stroke-width="10" transform="rotate($\{rotation\}, $\{width/2\}, $\{height/10\})"/>`); \
    \} \
\
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
function generatePopGeometry(width, height, density, rotation) \{\
    const patternSize = 500 / density;\
    const shapes = ['circle', 'rect'];\
    const svg = [];\
\
    for (let x = 0; x < width; x += patternSize) \{\
        for (let y = 0; y < height; y += patternSize) \{\
            const shape = shapes[Math.floor(Math.random() * shapes.length)];\
            if (shape === 'circle') \{\
                svg.push(`<circle cx="$\{x + patternSize / 2\}" cy="$\{y + patternSize / 2\}" r="$\{patternSize / 4\}" fill="black" transform="rotate($\{rotation\}, $\{x + patternSize / 2\}, $\{y + patternSize / 2\})"/>`);\
            \} else if (shape === 'rect') \{\
                svg.push(`<rect x="$\{x\}" y="$\{y\}" width="$\{patternSize\}" height="$\{patternSize\}" fill="#000000" transform="rotate($\{rotation\}, $\{x + patternSize / 2\}, $\{y + patternSize / 2\})"/>`);\
            \}\
        \}\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
function generateLaserDisco(width, height, density, rotation) \{\
    const numLines = 10 * density;\
    const svg = [];\
\
    for (let i = 0; i < numLines; i++) \{\
        const x1 = Math.random() * width;\
        const y1 = Math.random() * height;\
        const x2 = Math.random() * width;\
        const y2 = Math.random() * height;\
        svg.push(`<line x1="$\{x1/20\}" y1="$\{y1\}" x2="$\{x2\}" y2="$\{y2\}" stroke="black" stroke-width="20" transform="rotate($\{rotation\}, $\{width/2\}, $\{height/10\})"/>`);\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
\
function generateVHSStreaks(width, height, density, rotation) \{\
    const numStreaks = 20 * density;\
    const svg = [];\
\
    for (let i = 0; i < numStreaks; i++) \{\
        const y1 = Math.random() * height;\
        const y2 = y1 + (Math.random() * 10 + 5);\
        svg.push(`<rect x="0" y="$\{y1\}" width="$\{width\}" height="$\{y2 - y1\}" fill="black" transform="rotate($\{rotation\}, $\{width/2\}, $\{height/2\})"/>`);\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
\
function generatePixelPop(width, height, density, rotation) \{\
    const patternSize = 800 / density;\
    const svg = [];\
\
    for (let x = 0; x < width; x += patternSize) \{\
        for (let y = 0; y < height; y += patternSize) \{\
            const fill = Math.random() > 0.5 ? 'black' : 'white';\
            svg.push(`<rect x="$\{x\}" y="$\{y\}" width="$\{patternSize\}" height="$\{patternSize\}" fill="$\{fill\}" transform="rotate($\{rotation\}, $\{x + patternSize/2\}, $\{y + patternSize/2\})"/>`);\
        \}\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
function generateFuturaBlocks(width, height, density, rotation) \{\
    const blockSize = 400 / density;\
    const svg = [];\
\
    for (let x = 0; x < width; x += blockSize * 2) \{\
        for (let y = 0; y < height; y += blockSize * 2) \{\
            svg.push(`<rect x="$\{x\}" y="$\{y\}" width="$\{blockSize\}" height="$\{blockSize\}" fill="black" transform="rotate($\{rotation\}, $\{x + blockSize/2\}, $\{y + blockSize/2\})"/>`);\
        \}\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
\
function generateElectricZigzag(width, height, density = 1, rotation = 0) \{\
    const segmentWidth = 50;  \
    const strokeWidth = 1 * density;  // Adjust the stroke width based on the density slider\
    const svg = [];\
\
    for (let y = 0; y < height; y += segmentWidth * 2) \{\
        const yOffset = Math.random() * segmentWidth;  // Randomizing the zigzag\
        const xMid1 = Math.random() * width/3;\
        const xMid2 = xMid1 + Math.random() * width/3;\
        const pathData = `\
            M 0 $\{y + yOffset\} \
            L $\{xMid1\} $\{y + yOffset + segmentWidth\} \
            L $\{xMid2\} $\{y + yOffset\} \
            L $\{width\} $\{y + yOffset + segmentWidth\}\
        `;\
        svg.push(`<path d="$\{pathData\}" stroke="black" stroke-width="$\{strokeWidth\}" fill="none" transform="rotate($\{rotation\} $\{width/2\} $\{height/2\})"/>`);\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
\
function generateTypographyWaves(width, height, density = 1, rotation = 0) \{\
    const words = ["\'97\'97\'97\'97\'97 = = \'97 -- = =  -\'97\'97\'97", "//// \'97", "-- = =---- - - - - -", "----  ::: .", "..... \'97\'97 \'97  = = = \'97 \'97\'97\'97\'97", "\'97\'97\'97.. \'97\'97\'97-- \'97 -- - = = = = - \'97 - -\'97 -"];\
    const baseFontSize = 20;\
    const adjustedFontSize = baseFontSize * density; // Adjust font size based on density\
    const lineSpacing = adjustedFontSize / 8; // 10px whitespace\
    \
    const svg = [];\
    \
    let yPos = lineSpacing;\
    while(yPos < height) \{\
        const word = words[Math.floor(Math.random() * words.length)];\
        svg.push(`<text x="0" y="$\{yPos\}" font-family="Arial" font-size="$\{adjustedFontSize\}" fill="#black" transform="rotate($\{rotation\} $\{width/2\} $\{height/2\})">$\{word\}</text>`);\
        yPos += lineSpacing; \
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
\
function generatePixelatedWords(width, height, density = 1, rotation = 0) \{\
    const words = ["\uc0\u8284 ", "\u8284 \u8284 ", "\u8284 \u8284 \u8284 "];\
    const basePixelSize = 20; // Adjusting the base size for better visibility\
    const pixelSize = basePixelSize * density;\
    const svg = [];\
\
    let xPos = 0;\
    let yPos = pixelSize;  // start from the size of the pixel to ensure it's not off the canvas\
\
    while(yPos < height) \{\
        while (xPos < width) \{\
            const word = words[Math.floor(Math.random() * words.length)];\
            let letters = word.split('');\
            letters.forEach((letter, index) => \{\
                const letterX = xPos + (index * pixelSize * 1);  // Adjusted multiplier for spacing between letters\
                svg.push(`<text x="$\{letterX\}" y="$\{yPos\}" font-family="Gill Sans" font-weight="600" font-size="$\{pixelSize\}" fill="black" transform="rotate($\{rotation\} $\{letterX\} $\{yPos\})">$\{letter\}</text>`);\
            \});\
            xPos += letters.length * pixelSize * 1.5;\
        \}\
        xPos = 0;  // Reset xPos for the next row\
        yPos += pixelSize * 1.5;  // Move to the next line, leaving a gap of 0.5 * pixelSize\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
\
\
function generateBoldPixelGridLetters(width, height, density = 1, rotation = 0) \{\
    const letters = ["\'97", "-", "\'97\'97", "----", "\'97", "\'97\'97", "\'97 \'97 \'97", "- -", "\'97", " \'97 \'97 \'97 \'97\'97\'97 - - -\'97\'97\'97", "\'97"];\
    const baseGridSize = 5;\
    const gridSize = baseGridSize * density;\
    const fontSize = 20 * density;\
    const svg = [];\
\
    for(let x = 0; x < width; x += gridSize) \{\
        for(let y = 0; y < height; y += gridSize) \{\
            const letter = letters[Math.floor(Math.random() * letters.length)];\
            const letterX = x + gridSize/4;\
            const letterY = y + gridSize/2;\
            svg.push(`<text x="$\{letterX\}" y="$\{letterY\}" font-family="Gill Sans" font-weight="600" font-size="$\{fontSize\}" fill="black" transform="rotate($\{rotation\} $\{letterX\} $\{letterY\})">$\{letter\}</text>`);\
        \}\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{width\} $\{height\}">$\{svg.join('')\}</svg>`;\
\}\
\
function generateKaleidoscopeDreams(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    const baseLen = 30;\
    let triangles = Math.floor(density * 10);\
    let len = baseLen + (density - 1) * svgWidth / 2;\
\
    for (let i = 0; i < triangles; i++) \{\
        let x = svgWidth / 2;\
        let y = svgHeight / 2;\
        let angle = 2 * Math.PI * Math.random();\
        let x2 = x + len * Math.cos(angle);\
        let y2 = y + len * Math.sin(angle);\
        let x3 = x + len * Math.cos(angle + Math.PI / 6);\
        let y3 = y + len * Math.sin(angle + Math.PI / 6);\
        let color = `hsl($\{Math.random() * 360\}, 100%, 50%)`;\
        content += `<polygon points="$\{x\},$\{y\} $\{x2\},$\{y2\} $\{x3\},$\{y3\}" fill="black" transform="rotate($\{rotation\} $\{x\} $\{y\})"/>`;\
        content += `<polygon points="$\{x\},$\{y\} $\{x2\},$\{y2\} $\{x3\},$\{y3\}" fill="white" transform="scale(0.25,-0.5) rotate($\{rotation\} $\{x\} $\{y\})"/>`;\
        content += `<polygon points="$\{x\},$\{y\} $\{x2\},$\{y2\} $\{x3\},$\{y3\}" fill="black" transform="scale(-0.10,0.10) rotate($\{rotation\} $\{x\} $\{y\})"/>`;\
        content += `<polygon points="$\{x\},$\{y\} $\{x2\},$\{y2\} $\{x3\},$\{y3\}" fill="white" transform="scale(-0.25,-0.1) rotate($\{rotation\} $\{x\} $\{y\})"/>`;\
    \}\
\
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{svgWidth\} $\{svgHeight\}">$\{content\}</svg>`;\
\}\
\
\
\
function generateDiagonalStripes(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let stripeWidth = 10 * density;\
    let content = '';\
    let numberOfStripes = Math.ceil(svgWidth / stripeWidth) + Math.ceil(svgHeight / stripeWidth);\
    for (let i = 0; i < numberOfStripes; i++) \{\
        content += `<rect x="$\{i * stripeWidth\}" y="0" width="$\{stripeWidth\}" height="$\{svgHeight / 2\}" transform="rotate($\{30 + rotation\}, $\{i * stripeWidth\}, 0)" fill="$\{i % 2 === 0 ? 'black' : 'white'\}" />`;\
    \}\
    return content;\
\}\
\
\
function generateMarbleVeins(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let paths = 10;\
    let content = '';\
    for (let i = 0; i < paths; i++) \{\
        let startX = Math.random() * svgWidth;\
        let startY = Math.random() * svgHeight;\
        let d = `M$\{startX\} $\{startY\}`;\
        for (let j = 0; j < 3; j++) \{\
            let cp1x = Math.random() * svgWidth;\
            let cp1y = Math.random() * svgHeight;\
            let cp2x = Math.random() * svgWidth;\
            let cp2y = Math.random() * svgHeight;\
            let endX = Math.random() * svgWidth;\
            let endY = Math.random() * svgHeight;\
            d += ` C$\{cp1x\},$\{cp1y\} $\{cp2x\},$\{cp2y\} $\{endX\},$\{endY\}`;\
        \}\
        content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="$\{(Math.random() * 4 + 1) * density\}px" transform="rotate($\{rotation\} $\{startX\} $\{startY\})"/>`;\
    \}\
    return content;\
\}\
\
\
\
function generateWoodTexture(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    const baseLinesSpacing = 300;\
    const linesSpacing = baseLinesSpacing / density; // Reduced spacing with higher density\
    const baseStrokeWidth = 0.5;\
    const strokeWidth = baseStrokeWidth * density;\
    const variation = 90 * density; // Adjust for more wavy-ness with density\
\
    let content = '';\
\
    for (let y = 0; y < svgHeight; y += linesSpacing) \{\
        let d = `M0 $\{y\}`;\
        let x = 0;\
        while (x < svgWidth) \{\
            let cp1x = x + (Math.random() * variation);\
            let cp1y = y + (Math.random() * variation - variation/10);\
            let cp2x = x + (Math.random() * variation);\
            let cp2y = y + (Math.random() * variation - variation/2);\
            x += Math.random() * 10 * variation;\
            let endX = x;\
            let endY = y + (Math.random() * variation - variation/2);\
            d += ` C$\{cp1x\},$\{cp1y\} $\{cp2x\},$\{cp2y\} $\{endX\},$\{endY\}`;\
        \}\
\
        // Rotating around the mid-point of the line\
        let rotateAroundY = y + (linesSpacing / 2);\
        content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="$\{strokeWidth\}px" transform="rotate($\{rotation\}, $\{svgWidth / 2\}, $\{rotateAroundY\})"/>`;\
    \}\
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $\{svgWidth\} $\{svgHeight\}">$\{content\}</svg>`;\
\}\
\
\
\
function generateZigzagLines(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let d = `M0 $\{svgHeight / 2\}`;\
    let x = 0;\
    let amplitude = (svgHeight / 2 - 10) * density;\
    let frequency = 40 / density;\
    while (x < svgWidth) \{\
        d += ` L$\{x\} $\{svgHeight / 2 + amplitude * Math.sin(2 * Math.PI * x / frequency)\}`;\
        x += 5;\
    \}\
    return `<path d="$\{d\}" fill="none" stroke="black" stroke-width="$\{20 - (15 * x / svgWidth)\}px" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})" />`;\
\}\
\
function generateDustPattern(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let speckles = 300 * density;\
    let content = '';\
    for (let i = 0; i < speckles; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let radius = Math.random() * 2;\
        content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{radius\}" fill="black" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})" />`;\
    \}\
    return content;\
\}\
\
function generateDotPattern(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let dots = 20 * density;\
    let content = '';\
    for (let i = 0; i < dots; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let radius = Math.random() * 20 + 5;\
        content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{radius\}" fill="black" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})" />`;\
    \}\
    return content;\
\}\
\
\
\
function generateSwirlingVortex(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    let center = \{\
        x: svgWidth / 2,\
        y: svgHeight / 2\
    \};\
\
    let count = Math.floor(2 * density);\
    let radiusIncrement = (svgWidth / count);\
\
    // Adjust the base radius (starting radius) for the circles.\
    let baseRadius = radiusIncrement / 2;\
\
    for (let i = 0; i < count; i++) \{\
        let radius = baseRadius + radiusIncrement * i;\
        content += `<circle cx="$\{center.x\}" cy="$\{center.y\}" r="$\{radius\}" stroke="black" fill="none" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})"/>`;\
\
        let detailCount = Math.floor(radius / 2);  \
        for (let j = 0; j < detailCount; j++) \{\
            let angle = Math.random() * 2 * Math.PI;\
            let x = center.x + radius * Math.cos(angle);\
            let y = center.y + radius * Math.sin(angle);\
            let size = Math.random() * 5 * density;  \
            content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{size\}" fill="black" transform="rotate($\{rotation\}, $\{x\}, $\{y\})"/>`;\
        \}\
    \}\
\
    return content;\
\}\
\
\
\
function generateDensePolkaDotSpiral(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
\
    // Ensure the center is in the middle of the screen\
    let center = \{\
        x: svgWidth / 2.2,\
        y: svgHeight / 4\
    \};\
\
    let spiralRadius = 0;\
    let angle = 0;\
\
    let angleIncrement = 0.2;   // Controls the spacing between dots on the spiral. Smaller value = denser spiral\
    let radiusIncrement = 2;    // The distance between dots. Keeping this constant for consistent spiral density\
\
    // Adjusted to make the polka dots size controlled by density\
    let dotSizeBase = 1.5 * density; // Base size\
    let dotSizeVariation = 1 * density; // Random variation\
\
    while (spiralRadius < Math.min(svgWidth, svgHeight) / 2) \{\
        let x = center.x + spiralRadius * Math.cos(angle);\
        let y = center.y + spiralRadius * Math.sin(angle);\
\
        let size = dotSizeBase + Math.random() * dotSizeVariation;\
        content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{size\}" fill="black"/>`;\
\
        angle += angleIncrement;\
        spiralRadius += radiusIncrement;\
    \}\
\
    // Wrap the content in a group and apply rotation transformation\
    return `<g transform="rotate($\{rotation\}, $\{center.x\}, $\{center.y\})">$\{content\}</g>`;\
\}\
\
\
\
\
function generateStarburst(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    let center = \{\
        x: svgWidth / 2,\
        y: svgHeight / 2\
    \};\
\
    let strokeWidth = density;\
    let lineCount = 300;\
    for (let i = 0; i < lineCount; i++) \{\
        let angle = Math.random() * 2 * Math.PI;\
        let length = 50 + Math.random() * (svgWidth / 2 - 50);\
        let x = center.x + length * Math.cos(angle);\
        let y = center.y + length * Math.sin(angle);\
\
        content += `<line x1="$\{center.x\}" y1="$\{center.y\}" x2="$\{x\}" y2="$\{y\}" stroke="black" stroke-width="$\{strokeWidth\}" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})"/>`;\
    \}\
\
    return content;\
\}\
\
\
function generateGalacticNebula(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
\
    for (let i = 0; i < 1000; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let size = Math.random() * 3 * density;  // Adjust the dot size with density\
\
        let opacity = Math.random();\
        content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{size\}" fill="black" opacity="$\{opacity\}" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})"/>`;\
    \}\
\
    return content;\
\}\
\
\
\
function generateWavefront(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    let strokeWidth = density;\
\
    for (let i = 10; i < svgHeight; i += 20) \{\
        let d = `M 0 $\{i\}`;  // Move to start\
\
        for (let j = 0; j < svgWidth; j += 10) \{\
            d += ` Q $\{j + 5\} $\{i + 10 * Math.sin(j / 50)\}, $\{j + 10\} $\{i\}`;\
        \}\
\
        content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="$\{strokeWidth\}" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})"/>`;\
    \}\
\
    return content;\
\}\
\
\
function generateMatrixRain(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    let strokeWidth = density;\
\
    for (let i = 0; i < svgWidth; i += 10) \{\
        let length = 50 + Math.random() * (svgHeight - 50);\
        let startY = Math.random() * (svgHeight - length);\
\
        content += `<line x1="$\{i\}" y1="$\{startY\}" x2="$\{i\}" y2="$\{startY + length\}" stroke="black" stroke-width="$\{strokeWidth\}" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})"/>`;\
    \}\
\
    return content;\
\}\
\
\
\
function generateFractalForest(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
\
    function drawBranch(x, y, length, angle) \{\
        if (length < 20) return;  // Stop condition for recursion\
\
        let x2 = x + length * Math.cos(angle);\
        let y2 = y - length * Math.sin(angle);  // Subtracting because SVG y is positive downwards\
\
        content += `<line x1="$\{x\}" y1="$\{y\}" x2="$\{x2\}" y2="$\{y2\}" stroke="black" stroke-width="$\{density\}px" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})"/>`;\
\
        // Draw two more branches recursively from the end point\
        drawBranch(x2, y2, length * 0.7, angle + Math.PI / 7); \
        drawBranch(x2, y2, length * 0.7, angle - Math.PI / 7);\
    \}\
\
    let treeSpacingHorizontal = svgWidth / 20;  // Adjusted horizontal spacing\
    let treeSpacingVertical = svgHeight / 20;    // Adjusted vertical spacing\
\
    for (let i = 0; i <= svgWidth; i += treeSpacingHorizontal) \{\
        for (let j = svgHeight; j >= 0; j -= treeSpacingVertical) \{\
            drawBranch(i, j, 70, -Math.PI / 2);  // Start direction is upwards\
        \}\
    \}\
\
    return content;\
\}\
\
\
\
function generateElectroFlow(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
\
    function drawFlow(x, y, length, angle, decay) \{\
        if (length < 10) return; \
\
        let x2 = x + length * Math.cos(angle);\
        let y2 = y + length * Math.sin(angle);\
\
        content += `<line x1="$\{x\}" y1="$\{y\}" x2="$\{x2\}" y2="$\{y2\}" stroke="black" stroke-width="$\{density\}"/>`;\
\
        // Chance to branch out\
        if (Math.random() < 0.4) \{\
            drawFlow(x2, y2, length * decay, angle + (Math.random() * Math.PI / 2 - Math.PI / 8), decay);\
            drawFlow(x2, y2, length * decay, angle - (Math.random() * Math.PI / 2 - Math.PI / 8), decay)\
        \}\
    \}\
\
    // Increase the number of starting points\
    for (let i = 0; i < 50; i++) \{\
        drawFlow(Math.random() * svgWidth, Math.random() * svgHeight, 100, Math.random() * 2 * Math.PI, 2);\
    \}\
\
    return content;\
\}\
\
\
\
\
function generatePixelPulse(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
\
    let scaleFactor = density;\
    for (let y = 10; y < svgHeight; y += 10 * scaleFactor) \{\
        for (let x = 5; x < svgWidth; x += 2 * scaleFactor) \{\
            let size = 2 + 7 * Math.sin(x / 50);\
            content += `<rect x="$\{x\}" y="$\{y\}" width="$\{size * scaleFactor\}" height="$\{size * scaleFactor\}" fill="black" transform="rotate($\{rotation\}, $\{x + size/2\}, $\{y + size/2\})" />`;\
        \}\
    \}\
\
    return content;\
\}\
\
\
\
function generateWebbed(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    let centerX = svgWidth / 2;\
    let centerY = svgHeight / 2;\
    let strokeWidth = density;\
\
    for (let r = 20 * density; r < svgWidth / 2; r += 20 * density) \{\
        let d = `M $\{centerX + r\} $\{centerY\}`;\
        for (let j = 0; j < 2 * Math.PI; j += Math.PI / 20) \{\
            let x = centerX + r * Math.cos(j);\
            let y = centerY + r * Math.sin(j);\
            d += ` L $\{x\} $\{y\}`;\
        \}\
        d += ' Z';\
        content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="$\{strokeWidth\}" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})"/>`;\
    \}\
\
    for (let j = 0; j < 2 * Math.PI; j += Math.PI / 20) \{\
        let x1 = centerX;\
        let y1 = centerY;\
        let x2 = centerX + svgWidth / 2 * Math.cos(j);\
        let y2 = centerY + svgWidth / 2 * Math.sin(j);\
        content += `<line x1="$\{x1\}" y1="$\{y1\}" x2="$\{x2\}" y2="$\{y2\}" stroke="black" stroke-width="$\{strokeWidth\}" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})"/>`;\
    \}\
\
    return content;\
\}\
\
\
\
function generateLabyrinth(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    let strokeWidth = density;\
    let cellSize = 30;  // Define the size of each cell in the grid\
\
    function drawWall(x, y, length, angle) \{\
        let x2 = x + length * Math.cos(angle);\
        let y2 = y + length * Math.sin(angle);\
        content += `<line x1="$\{x\}" y1="$\{y\}" x2="$\{x2\}" y2="$\{y2\}" stroke="black" stroke-width="$\{strokeWidth\}" transform="rotate($\{rotation\}, $\{x + length/2\}, $\{y + length/2\})"/>`;\
    \}\
\
    for (let x = 0; x < svgWidth; x += cellSize) \{\
        for (let y = 0; y < svgHeight; y += cellSize) \{\
            if (Math.random() > 0.5) \{\
                drawWall(x, y, cellSize, 0);  // Horizontal line\
            \}\
            if (Math.random() > 0.5) \{\
                drawWall(x, y, cellSize, Math.PI / 2);  // Vertical line\
            \}\
        \}\
    \}\
\
    return content;\
\}\
\
\
\
function generateStarField(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    for (let i = 0; i < 1000; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let size = density * (1 + 10 / (1 + Math.hypot(svgWidth / 2 - x, svgHeight / 2 - y) / 10));\
        content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{size\}" fill="black" transform="rotate($\{rotation\}, $\{x\}, $\{y\})" />`;\
    \}\
    return content;\
\}\
\
\
function generateTangled(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    for (let i = 0; i < 50; i++) \{\
        let startX = Math.random() * svgWidth;\
        let startY = Math.random() * svgHeight;\
        let d = `M$\{startX\} $\{startY\}`;\
        for (let j = 0; j < 5; j++) \{\
            let cp1x = Math.random() * svgWidth;\
            let cp1y = Math.random() * svgHeight;\
            let cp2x = Math.random() * svgWidth;\
            let cp2y = Math.random() * svgHeight;\
            let endX = Math.random() * svgWidth;\
            let endY = Math.random() * svgHeight;\
            d += ` C$\{cp1x\},$\{cp1y\} $\{cp2x\},$\{cp2y\} $\{endX\},$\{endY\}`;\
        \}\
        content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="$\{density\}" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})" />`;\
    \}\
    return content;\
\}\
\
\
\
function generateCellular(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    for (let i = 0; i < 200; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let size = density * (5 + Math.random() * 30);\
        let sides = Math.floor(4 + Math.random() * 5);\
        let d = '';\
        for (let j = 0; j < sides; j++) \{\
            let angle = (j * 2 * Math.PI) / sides;\
            let dx = x + size * Math.cos(angle);\
            let dy = y + size * Math.sin(angle);\
            if (j === 0) \{\
                d += `M $\{dx\} $\{dy\} `;\
            \} else \{\
                d += `L $\{dx\} $\{dy\} `;\
            \}\
        \}\
        d += 'Z';\
        content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="$\{density\}" transform="rotate($\{rotation\}, $\{x\}, $\{y\})" />`;\
    \}\
    return content;\
\}\
\
\
\
\
function generateDigitalOcean(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    for (let y = 10; y < svgHeight; y += 20) \{\
        let d = `M 0 $\{y\}`;\
        for (let x = 0; x <= svgWidth; x += 10) \{\
            let dy = y + 10 * Math.sin(x / 50);\
            d += ` L $\{x\} $\{dy\}`;\
        \}\
        content += `<path d="$\{d\}" fill="none" stroke="black" stroke-width="$\{density\}" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})" />`;\
    \}\
    return content;\
\}\
\
\
function generateSquareHalftone(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    let numSquares = 200;\
    for (let i = 0; i < numSquares; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let side = density * (y / svgHeight * 10);\
        content += `<rect x="$\{x\}" y="$\{y\}" width="$\{side\}" height="$\{side\}" fill="black" transform="rotate($\{rotation\}, $\{x + side/4\}, $\{y + side/4\})" />`;\
    \}\
    return content;\
\}\
\
\
\
function generateDotHalftone(svgWidth, svgHeight, density = 0.1, rotation = 0) \{\
    let content = '';\
    let numDots = 400;\
\
    for (let i = 0; i < numDots; i++) \{\
        let x = Math.random() * svgWidth;\
        let y = Math.random() * svgHeight;\
        let radius = density * (y / svgHeight * 4); // Radius dependent on the vertical position\
        content += `<circle cx="$\{x\}" cy="$\{y\}" r="$\{radius\}" fill="black" transform="rotate($\{rotation\}, $\{x\}, $\{y\})" />`;\
    \}\
\
    return content;\
\}\
\
\
function generateLineHalftone(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    let numLines = 80;\
    \
    // Calculate the diagonal which will cover the entire rotated area\
    const diagonal = Math.sqrt(svgWidth*svgWidth + svgHeight*svgHeight);\
    const extraWidth = (diagonal - svgWidth) / 2;\
    const extraHeight = (diagonal - svgHeight) / 2;\
\
    for (let i = -extraHeight; i < svgHeight + extraHeight; i += (svgHeight + 2*extraHeight) / numLines) \{\
        let x1 = -extraWidth;\
        let y1 = i;\
        let x2 = svgWidth + extraWidth;\
        let y2 = i;\
        let strokeWidth = ((i + extraHeight) / (svgHeight + 2*extraHeight) * 4) * density;\
        content += `<line x1="$\{x1\}" y1="$\{y1\}" x2="$\{x2\}" y2="$\{y2\}" stroke="black" stroke-width="$\{strokeWidth\}" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})" />`;\
    \}\
\
    return content;\
\}\
\
\
\
\
function generateWavyLineGradient(svgWidth, svgHeight, density = 1, rotation = 0) \{\
    let content = '';\
    let numLines = 20;\
    let strokeWidth = 3; // Base stroke width which you can adjust for desired thickness\
    let scaledDensity = density * 2; // Scale density for 200% width\
    let scaleFrequencyX = 2; // Adjust this value to control the scaling along the X-axis\
\
    for (let i = 0; i < numLines; i++) \{\
        let y = i * (svgHeight / numLines);\
        let amplitude = scaledDensity * 3; // Keep the same amplitude for both axes\
        let frequency = y / svgHeight * 2; // Increase the frequency as we go down\
        let d = `M0,$\{y\} `;\
\
        for (let x = 0; x < svgWidth; x++) \{\
            let scaledX = x * scaleFrequencyX; // Scale the X-coordinate\
            d += `L $\{x\} $\{y + Math.sin(scaledX * frequency) * amplitude\} `;\
        \}\
\
        content += `<path d="$\{d\}" stroke="black" stroke-width="$\{strokeWidth\}" fill="none" transform="rotate($\{rotation\}, $\{svgWidth/2\}, $\{svgHeight/2\})" />`;\
    \}\
\
    return content;\
\}\
\
\
\
\
// end functions \
\
let patterns = [generateBlobs, simpleCirclePattern, generateSpatter, generateWaves, generateGeometric, generateZigzag, generateSquiggly, generateGrid, generateSunburst, generateDots, generateCrosshatches, generateBoldGeometric, generateSprinkles, generateDottedGrid, generateBiggerSprinkles, generateChaoticSpirals, generateRandomPolygons, generateFunkyCurves, generateSticks, generateStippling, generateGravel, generateMezzotint, generateBurlap, generateHatching, generateRipples, generateDenseZigzag, generateLabyrinth, generateStarburst, generateShatteredGlass, generateStaticNoise, generateRandomGrid, generateGridWithCircles, generateDiagonalGrid, generateRandomFilledGrid, generateGridWithRandomLines, generateCheckerboard, generateScratches, generateDustSpeckles, generateStains, generateWoodTexture, generateDamageMarks, generateRandomTriangles, generateHoneycomb, generateSpirograph, generateCircularMaze, generateChineseLetters, generateMarbleTexture, generateHorizontalHalftone, generateVerticalStippling, generateCrackedFloor, generateBrokenGlass, generateOpticalIllusion, generateDenseSpirals, generate3DCubesPattern, generatePixelMixture, generateRandomBlobs, generateStarryNight, generateLayeredWaves, generateScatteredTriangles, generateConfettiRectangles, generateInterlockingCircles, generateRandomBezier, generateCrazyGrid, generateTwistedStrings, generateScatteredOrganic, generateTwirlingLines, generateDynamicDiamonds, generateHalftonePixelConstantSize, generateHalftonePixelVariableSize, generateChevron, generateStripes, generatePolkaDots, generateCheckerboard, generateOpArt, generateMandala, generatePaisley, generateDamask, generateHerringbone, generateFishScale, generateLattice, generateBarcode, generateRadiatingRays, generateMoire, generateChainLink, generateFoliage, generateHarlequin, generateFingerprint, generateBrocade, generateCamouflage, generateChintz, generateFairIsle, generateGingham, generateHoundstooth, generateIkat, generateJacquard, generateNeonGridscape, generatePopGeometry, generateLaserDisco, generateVHSStreaks, generatePixelPop, generateFuturaBlocks, generateElectricZigzag, generateTypographyWaves, generatePixelatedWords, generateBoldPixelGridLetters, generateKaleidoscopeDreams, generateDiagonalStripes, generateMarbleVeins, generateWoodTexture, generateZigzagLines, generateDotPattern, generateSwirlingVortex, generateDensePolkaDotSpiral, generateStarburst, generateGalacticNebula, generateWavefront, generateMatrixRain, generateFractalForest, generateElectroFlow, generatePixelPulse, generateWebbed, generateLabyrinth, generateStarField, generateTangled, generateCellular, generateDigitalOcean, generateSquareHalftone, generateDotHalftone, generateLineHalftone, generateWavyLineGradient]; \
\
function generatePattern() \{\
    let density = parseFloat(document.getElementById('densitySlider').value);\
    let rotation = parseFloat(document.getElementById('rotationSlider').value);\
    let svgWidth = 2800;\
    let svgHeight = 2500;\
\
    if (!lastSelectedPatternFunction) \{\
        lastSelectedPatternFunction = patterns[Math.floor(Math.random() * patterns.length)];\
    \}\
    console.log("Selected pattern function:", lastSelectedPatternFunction.name);\
\
    let patternContent = lastSelectedPatternFunction(svgWidth, svgHeight, density, rotation);\
\
    let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="$\{svgWidth\}" height="$\{svgHeight\}">`;\
    svgContent += patternContent;\
    svgContent += '</svg>';\
\
    document.getElementById('svgContainer').innerHTML = svgContent;\
    document.getElementById('downloadLink').setAttribute('href', 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgContent));\
\}\
\
document.getElementById('rotationSlider').addEventListener('input', generatePattern);\
document.getElementById('densitySlider').addEventListener('input', generatePattern);\
}