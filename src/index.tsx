import * as React from 'react';

interface IDriftProps {
  appId: string;
}

class Drift extends React.PureComponent<IDriftProps> {
  componentDidMount() {
    const { appId } = this.props;

    if (!appId) throw new Error('[react-drift-web] missing the "appId" prop');
    if (!window || !window.document) throw new Error('[react-drift-web] missing the "window" object');

    const script = document.createElement('script');
    script.innerText = `!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date/3e5),n=document.createElement("script");n.type="text/javascript",n.async=!0,n.crossorigin="anonymous",n.src="https://js.driftt.com/include/"+e+"/"+t+".js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)}}}(),drift.SNIPPET_VERSION="0.3.1",drift.load("${appId}");`;
    script.async = true;
    script.charset = 'utf-8';
    window.document.body.appendChild(script);
  }

  render() {
    return null;
  }
};

declare global {
  interface Window {
    drift: IDriftApi;
  }
}

interface IDriftApi {
  [index: string]: any;
}

const getDrift: () => IDriftApi = () => window && window.drift ? window.drift : {};

const driftApi = new Proxy(getDrift, {
  get(target: () => IDriftApi, prop: string) {
    const drift: IDriftApi = target();
    if (!drift) throw new Error('[react-drift-web] missing the "drift" object');
    if (prop in drift) return drift[prop];
    throw new Error(`[react-drift-web] missing the "${prop}" method`);
  }
});

export default Drift;
export { driftApi };
