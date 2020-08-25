import React from "react";
import "./styles/Badgets.css"
import confLogo from "../images/badge-header.svg"
import BadgetsList from "../components/BadgesList";
import { Link } from "react-router-dom";

import api from "../api";
import PageLoading from "../components/PageLoading";

class Badges extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: undefined,
            error: null
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        this.setState({ loading: true, error: null })
        try {
            api.badges.list().then(
                (data) => {
                    this.setState({ loading: false, data: data })
                }
            )
        } catch (error) {
            this.setState({ loading: false, error })
        }
    }

    render() {

        if (this.state.loading) {
            return <PageLoading />
        }
        if (this.state.error) {
            return `Error: ${this.state.error.message}`
        }

        return (
            <React.Fragment>
                <div className="Badgets">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={confLogo} alt="" className="Badges_conf-logo" />
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons pr-5">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgetsList badges={this.state.data} />
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Badges;