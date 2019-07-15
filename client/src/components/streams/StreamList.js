import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';
import {Link} from 'react-router-dom';

export class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (stream) => {
    if(stream.userId=== null) return null;
    if(stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui primary button">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui negative button">Delete</Link>
        </div>
      );
    } else return null;
  }

  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera"/>
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header" >
            {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate =() => {
    if(this.props.isSignedIn){
      return (
        <div style={{textAlign: 'right'}}>
          <Link to="/streams/new" className="ui button primary">
          Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
  //  console.log(this.props.streams);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list"> {this.renderList()}</div>
        {this.renderCreate()}
      </div>
    )
  }
}

const mapStateToProps = state => {
//  console.log(state.streams);
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);
