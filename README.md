# react-drift-web
React component implementation of the Drift chat widget for websites

## Installation

```
npm install react-drift-web
```

## Usage

Add to the entrypoint of your application:

```
...
import Drift from 'react-drift-web'
...
<Drift appId="YOUR_APP_ID />
...
```

where `appId` is your application identifier provided by [Drift](https://app.drift.com/settings/widget)

Optionally, call the widget API in `componentDidMount`/`useEffect` of your components:

```
...
import { driftApi } from 'react-drift-web'
...
componentDidMount {
  driftApi.METHOD()
}
...
```

where `METHOD` is any browser API method (see [here](https://devdocs.drift.com/docs/using-drift-apis))

That's it! Enjoy!

## License

[MIT](https://opensource.org/licenses/MIT)
