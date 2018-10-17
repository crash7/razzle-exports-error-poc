import React, { PureComponent } from "react";

function withDummy(ComposedComponent) {
  return class WithSomething extends PureComponent {
    static displayName = `WithDummy(something)`;

    static async getInitialProps(ctx) {
      let composedInitialProps = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }
      return composedInitialProps;
    }

    render() {
      return (
        <div className="dummy-app">
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  };
}

export default withDummy;
