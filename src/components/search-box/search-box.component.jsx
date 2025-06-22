import './search-box.styles.css';

const SearchBox = ({placeholder, className, onChangeHandler} ) => (
        <input 
             className={`search-box ${className}`}
             type='search' 
             placeholder={placeholder}
             onChange={onChangeHandler}
        />
    )


/* class SearchBox extends Component {
  render () {
    const {placeholder, className} = this.props;
    return (
        <input 
             className={`search-box ${className}`}
             type='search' 
             placeholder={placeholder}
             onChange={this.props.onChangeHandler}
        />
    )
  }
} */

export default SearchBox;