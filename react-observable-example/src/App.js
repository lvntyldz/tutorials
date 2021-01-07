import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { messageService } from './services';
import { HomePage } from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.subscription = messageService.getMessage().subscribe(message => {
      if (message) {
        this.setState({ messages: [...this.state.messages, message] });
        return;
      }
      this.setState({ messages: [] });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    const { messages } = this.state;
    return (
      <Router>
        <div>
          <div className="jumbotron">
            <div className="container text-center">
              <div className="row">
                <div className="col-sm-8 offset-sm-2">
                  <Route exact path="/" component={HomePage} />
                  {messages.map((v, k) =>
                    <div key={k} className="alert alert-success">{v.text}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;