import React from "react";

export const ListItem = props => (
    <li className="list-group-item">
        <span>
            <em>{props.title}</em>
        </span>
        <span>
            {props.children}
        </span>
        <p>Date Published: {props.date}</p>
    </li>
);
