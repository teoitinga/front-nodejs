var solver = require('javascript-lp-solver'),
  results, model

const modelo = {
  "optimize": "capacity",
  "opType": "max",
  "constraints": {
    "plane": { "max": 44 },
    "person": { "max": 512 },
    "cost": { "max": 300000 }
  },
  "variables": {
    "brit": {
      "capacity": 20000,
      "plane": 1,
      "person": 8,
      "cost": 5000
    },
    "yank": {
      "capacity": 30000,
      "plane": 1,
      "person": 16,
      "cost": 9000
    }
  }
};

function resolver(model) {
  // const m = solver.ReformatLP(model)
  results = solver.Solve(model);
  console.log(results);
}

resolver(modelo)


