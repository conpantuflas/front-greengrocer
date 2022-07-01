import React from 'react';
import '../styles/filter.css'

const Filters = () => {
    return (
       <div>
          <form>
            <fieldset >
                    <legend>Form</legend>
                       <div id="display-filter">

                        <div>
                                <label for="minor-to-major" className='label-filter'>minor to major price</label>
                                <label for="major-to-minor" className='label-filter'>major to minor price</label>
                                <label for="alphabetical-order" className='label-filter'>alphabetical order</label>
                                <label for="range-of-price" className='label-filter'>range of price</label>
                            </div>

                            <div >
                                <input id="minor-to-major" className='input-filter' type="checkbox"/>
                                <input id="major-to-minor" className='input-filter' type="checkbox"/>
                                <input id="alphabetical-order" className='input-filter' type="checkbox"/>
                                <input id="range-of-price" className='input-filter' type="range"/>
                            </div>
                       </div>
                       <button id="button-form">Send</button>
            </fieldset>
          </form>  
       </div>
    );
}

export default Filters;
