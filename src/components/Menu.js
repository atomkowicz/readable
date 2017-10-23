import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Menu extends Component {

    render() {
        return (
            <div className="category-menu">
                <span>Categories: </span>
                {
                    this.props.categories.map(category => (
                        <a href=""
                            key={category.name}
                            className="category">
                            {category.name}
                        </a>
                    ))
                }
            </div>
        )
    }
}

Menu.propTypes = {
    categories: PropTypes.array.isRequired
}

export default Menu;