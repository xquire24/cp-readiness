export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: []
      };
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
      }

    render() {
        return (
          <div></div>
        );
      }
    }