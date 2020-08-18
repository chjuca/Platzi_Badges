import React from "react";
import Navbar from "../components/Navbar"
import header from "../images/badge-header.svg"

import "../pages/styles/BadgeNews.css"
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm";


class BadgeNew extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName="Carlos"
                                lastName="Juca"
                                twitter="@chjuca"
                                jobTitle="Front Developer"
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon" />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default BadgeNew;