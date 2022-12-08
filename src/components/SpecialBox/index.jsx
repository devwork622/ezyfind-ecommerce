import React from "react";

const SpecialBox = ({imgUrl, title, description}) => {
    return (
        <div className="special-box">
            <figure><img src={imgUrl} alt="" /></figure>
            <section>
                <h6>{title}</h6>
                <p>{description}</p>
            </section>
        </div>
    )
}

export default SpecialBox;