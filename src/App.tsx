import * as React from "react";
import Scrollbars from "react-custom-scrollbars";
import * as Loadable from "react-loadable";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./components/content/Nav";

const LoadablePage = (component: any) =>
  Loadable({
    loader: () => component,
    loading() {
      return (
        <div className="spinner-wrapper">
          <div className="spinner">
            <div className="bounce1" />
            <div className="bounce2" />
            <div className="bounce3" />
          </div>
        </div>
      );
    }
  });

const MainLoadable = LoadablePage(import("./pages/Main"));
const ScheduleLoadable = LoadablePage(import("./pages/Schedule"));
const ERetreatLoadable = LoadablePage(import("./pages/ERetreat"));
const ErrorLoadable = LoadablePage(import("./pages/404"));

export default class App extends React.Component {
  public state = {
    top: true
  };

  public handleScroll = (value: any) => {
    const { scrollTop } = value.currentTarget;

    this.setState({
      top: scrollTop === 0
    });
  };

  public render() {
    return (
      <BrowserRouter>
        <div className="fadein delay">
          <Nav
            full={!this.state.top}
            left="UBC Vancouver Campus"
            right="September 2019"
            navItems={[
              {
                link: "/",
                title: <i className="fas fa-home" />
              },
              {
                link: "/schedule",
                title: "Schedule"
              },
              {
                link: "/e-retreat",
                title: "E-Retreat"
              }
            ]}
          />
          <Switch>
            <Route path="/" exact={true} component={this.Main} />
            <Route path="/schedule" exact={true} component={this.Schedule} />
            <Route path="/e-retreat" exact={true} component={this.ERetreat} />
            <Route component={this.Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  private Main = () => (
    <Scrollbars
      onScroll={this.handleScroll}
      style={{ height: "calc(100vh - 64px)", width: "100vw" }}
    >
      <MainLoadable />
    </Scrollbars>
  );

  private Schedule = () => (
    <Scrollbars
      onScroll={this.handleScroll}
      style={{ height: "calc(100vh - 64px)", width: "100vw" }}
    >
      <ScheduleLoadable />
    </Scrollbars>
  );

  private ERetreat = () => (
    <Scrollbars
      onScroll={this.handleScroll}
      style={{ height: "calc(100vh - 64px)", width: "100vw" }}
    >
      <ERetreatLoadable />
    </Scrollbars>
  );

  private Error = () => (
    <Scrollbars
      onScroll={this.handleScroll}
      style={{ height: "calc(100vh - 64px)", width: "100vw" }}
    >
      <ErrorLoadable />
    </Scrollbars>
  );
}
