import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions'

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

export default Menu;