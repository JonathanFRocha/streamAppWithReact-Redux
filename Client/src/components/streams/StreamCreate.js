import React from "react";
import { connect } from "react-redux";
import { streamCreate } from "../../actions";
import StreamForm from "./streamsComponents/StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.streamCreate(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { streamCreate })(StreamCreate);
