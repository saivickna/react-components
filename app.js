// TODO

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//     <li>{props.items[2]}</li>
//   </ul>
//   )

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }
  onListItemMouseEnter() {
    this.setState({
      hover: true
      });
  }
  onListItemMouseLeave() {
    this.setState({
      hover: false
      });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
        <li style={style} onMouseEnter={this.onListItemMouseEnter.bind(this)} onMouseLeave={this.onListItemMouseLeave.bind(this)}>{this.props.item}</li>
    )
  }
}

var GroceryList = () => (
  <div>
    <h2>Grocery List</h2>
    <ul>
      <GroceryListItem item={"Water"}/>
      <GroceryListItem item={"Vegetables"}/>
      <GroceryListItem item={"Chicken Breast"}/>
    </ul>
  </div>
  )

ReactDOM.render(<GroceryList />, document.getElementById("groceries"));
