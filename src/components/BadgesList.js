import React from "react";

class BadgetsList extends React.Component {

    state = {

    }

    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map(badge =>
                    <div key={badge.id} className="Badges__Card shadow p-3 mb-5 bg-white rounded">
                        <div className="row">
                            <div className="col-2">
                                <img
                                    style={{ borderRadius: '50%' }}
                                    src={badge.avatarUrl}
                                    alt={'Avatar ' + badge.firstName}
                                />
                            </div>
                            <div className="col-10">
                                <div>
                                    <p className="font-weight-bold">{badge.firstName} {badge.lastName}</p>
                                    <p>@{badge.twitter}</p>
                                    <p>{badge.jobTitle}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                )
                }
            </ul>
        )
    }


}

export default BadgetsList;