/**
 * Use Case: Lost Context
 *
 * Problem:
 * When a method is passed around as a callback,
 * it loses its connection to the object it belongs to.
 *
 * What You'll Learn:
 * - Losing `this` when extracting a method
 * - Fixing it with bind()
 */

class DashboardWidget {
  constructor(title) {
    this.title = title;
  }

  render() {
    console.log(`Rendering: ${this.title}`);
  }
}

const widget = new DashboardWidget("Sales Overview");

// Losing `this`
const renderCallback = widget.render;

try {
  renderCallback();
} catch (error) {
  console.log(error.message);
}

// Fixing it with bind()
const boundRender = widget.render.bind(widget);

boundRender();

/*
Expected Output

Cannot read properties of undefined (reading 'title')
Rendering: Sales Overview
*/