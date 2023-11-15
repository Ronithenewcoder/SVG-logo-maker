function circle(data) {
  return `
      <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="white" />
          <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>
      </svg>`;
}

function triangle(data) {
  return `
      <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="white" />
          <polygon points="150,18 244,182 56,182" fill="${data.shapeColor}" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>
      </svg>`;
}

function square(data) {
  return `
      <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="white" />
          <rect x="40" y="40" width="220" height="120" fill="${data.shapeColor}" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>
      </svg>`;
}

module.exports = { circle, triangle, square };