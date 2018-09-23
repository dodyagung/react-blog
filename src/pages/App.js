// import React from 'react'; // method 1
import React, { Component } from 'react'; // method 2
import SearchBar from '../components/SearchBar'
import BlogList from '../components/BlogList'

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";


// class App extends React.Component { // method 1
class App extends Component { // method 2
    constructor() {
        super() // it's a must. 

        this.state = {
            loading: true,
            search: "",
            blogs: [],
            blogsFiltered: []
        }
    }

    componentDidMount() { // second rendered
        // setTimeout(() => {
        //     this.setState({
        //         loading: false
        //     })
        // }, 1000);

        this.handleGetBlog();
    }

    handletypeSearch = event => {
        const tmp = this.state.blogs.filter((blog) => {
            return blog.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        })

        this.setState({
            // search: event.target.value
            blogsFiltered: tmp
        })

        // console.log(event.target.value);
    }

    handleGetBlog = () => {
        fetch(link)
            .then(res => res.json())
            .then(res => this.setState({
                blogs: res,
                blogsFiltered: res,
                loading: false
            }))
    }

    render() { // first rendered

        console.log(this.state.blogsFiltered);

        if (this.state.loading) {
            return (
                <h1>Loading</h1>
            )
        }

        return  (
            <div>
                {/* <h1>Hello world</h1>
                <h2>Loading state is { JSON.stringify(this.state.loading) }</h2> */}
                <SearchBar 
                    name="devcjkt" 
                    id="123" 
                    search={this.state.search} 
                    onChangeSearch={this.handletypeSearch}
                />
                { this.state.blogsFiltered.map((blog, index) => (
                    <BlogList 
                        key={ index }
                        title={ blog.title }
                        content={ blog.content }
                        author={ blog.author }
                        date={ blog.created_at }
                    />
                )) } 
            </div>
        )
    }
}

export default App // --> import App from 'App.js';
// export const App // --> import { App } from 'App.js';