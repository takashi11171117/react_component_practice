import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class PostList extends React.Component {
  
  componentDidMount() {
  }

  render() {
    console.log(this.props);

    return(
      <div>
        song list
      </div>
    )
  }
}

const query = gql`
  {
    user(id: "23"){
      firstName,
      id,
      age
    }
  }
`

export default graphql(query)(PostList);