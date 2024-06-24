import { FaSearch } from "react-icons/fa"
import toast, { Toaster } from 'react-hot-toast'
import css from "./SearchBar.module.css"

const SearchBar = ({ onSubmit }) => {
    const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputSearch = form.elements.search.value;
          if (inputSearch.trim() === "") {
              toast('Please enter search term!', {
                  style: {
                      borderRadius: '10px',
                      background: 'rgb(73, 248, 42)',
                      color: '#000',
                  },
              });
              return;
        }
    onSubmit(inputSearch);
    
    }

  return (
    <form className={css.form} onSubmit={handleOnSubmit}>
       <input className={css.input_search} type="text" autoComplete="off" autoFocus  placeholder="Search movies..." name="search"/>
       <button className={css.btn_search} type="submit"><FaSearch  size='16' fill='#010147'/></button>
       <Toaster position="top-right" reverseOrder={false}/>
            </form>
  )
}

export default SearchBar