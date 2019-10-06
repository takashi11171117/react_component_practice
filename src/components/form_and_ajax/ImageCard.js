import React from 'react'

class ImageCard extends React.Component {
  constructor(props) {
    super(props)

    this.state= { span: 0 }

    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', () => {
      const height = this.imageRef.current.clientHeight

      const spans = Math.ceil(height / 10)

      this.setState({ spans })
    })
  }

  render() {
    const {urls, description} = this.props.image

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          src={urls.regular}
          alt={description}
          ref={this.imageRef}
        />
      </div>
    )
  }
}

export default ImageCard