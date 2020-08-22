import React from "react";
import header from "../images/platziconf-logo.svg"

import "../pages/styles/BadgeNews.css"
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm";


class BadgeNew extends React.Component {

    state = {
        form: {
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter ? "@" + this.state.form.twitter : this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon" />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default BadgeNew;