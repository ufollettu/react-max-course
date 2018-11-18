import React from 'react';

var person = function person(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'I\'m ',
            props.name,
            ' and I am ',
            props.age,
            ' years old!'
        ),
        React.createElement(
            'p',
            null,
            props.children
        )
    );
};

export default person;