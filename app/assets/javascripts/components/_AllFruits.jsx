const { Component, Fragment } = React;

class AllFruits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fruits: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/fruits')
      .then(response => response.json())
      .then(data => {
        this.setState({ fruits: data })
      })
  }

  render() {
    return (
      <Fragment>
        <h1>fruits will be listed here</h1>
        <ul>
          {this.state.fruits.map(fruit => (
            <li key={fruit.id}>
              {fruit.name}: {fruit.description}
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}
