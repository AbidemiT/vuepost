
class Post extends React.Component {
    state = {
        posts: []
    }

    post = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.json());
            
        })
        .then(data => {
            console.log(data);
            
        })
    }

    render() {
      return (
          <div>this.state.posts</div>
      )  
    }
}

ReactDOM.render(<Post />, document.getElementById('root'))