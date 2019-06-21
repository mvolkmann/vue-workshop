export default {
  name: 'GreetingJsx',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    renderDate() {
      return <div class="date">{new Date().toString()}</div>;
    }
  },
  render() {
    return (
      <div class="greeting">
        Hello, {this.name}!{this.renderDate()}
      </div>
    );
  }
};
