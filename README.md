[Gauge](https://github.com/getgauge/gauge) + [Taiko](https://github.com/getgauge/taiko) test framework uses for Shopping cart Amazon

## Prerequisite

- [Gauge](https://github.com/getgauge/gauge)
- [Taiko](https://github.com/getgauge/taiko)
- Node v12 or above

## Source code structure
```
.
├── specs
└── tests
    ├── commons
    ├── page_object
    ├── page_ui
    └── steps_definition
```

### /specs
Where I define all BDD scenarios

### /steps_definition
Where I define step definition, acts as an abstraction layer between `specs` directory and taiko/gauge configuration


### /commons
The configuration directory for gauge & taiko, if you ever want to change on config or add another taiko interaction, this directory is where you should look.

## Usage
### Run test

- Clone this repo
- `yarn` for dependencies installation
- `npm install` for dependencies related to npm installation
- Run `yarn test` or `gauge run specs` to run whole specs with headless mode
- Run `HEADLESS_CHROME=false gauge run specs` to run with UI appears

- The report is generated automatically to file index.html under `reports/html-reports` folder