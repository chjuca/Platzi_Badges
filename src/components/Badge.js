import React from "react";
// import ReactDOM from "react-dom";
import confLogo from "../images/badge-header.svg"
import Gravatar from "../components/Gravatar"
import "./styles/Badge.css";
import md5 from "md5";

class Badge extends React.Component {
    render() {

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo" />
                </div>

                <div className="Badge__section-name">
                    <img
                        className="Badge__avatar"
                        src={`https://www.gravatar.com/avatar/${this.props.email}?d=identicon`}
                        alt="Avatar"
                    />
                    <h1>
                        {this.props.firstName} <br /> {this.props.lastName}
                    </h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <p>{this.props.twitter}</p>
                </div>

                <div className="Badge__footer">
                    #platziconf
                    </div>
            </div>
        )
    }


}


export default Badge;