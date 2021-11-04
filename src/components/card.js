import React from "react";

function Card(props) {
    return (
        <div className="card border-dark  bg-transparent bg-secondary note">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2  ">{props.country}</h6>
                <a href={props.url} className="card-link">
                    {props.url}
                </a>
            </div>
        </div>
    );
}

export default Card;
