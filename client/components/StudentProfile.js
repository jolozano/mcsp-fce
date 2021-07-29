import React from 'react';

class StudentProfile extends React.Component {
    constructor (props) {
        super()
    }

    render () {
        let mockData = this.props.mockData;
        return (
            <div className={"student-profile"}>
                <table className={"student-profile-table"}>
                    <tbody>
                        <tr>    
                            <td>First Name:</td>
                            <td>Last Name:</td>
                        </tr>
                        <tr>
                            <td>{mockData.firstName}</td>
                            <td>{mockData.lastName}</td>
                        </tr>
                        <tr>
                            <td>Cohort:</td>
                            <td>Email Address:</td>
                        </tr>
                        <tr>
                            <td>MCSP-07</td>
                            <td>TonyRobbins@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>Terminal Leave</td>
                        </tr>
                        <tr>
                            <td>Male</td>
                            <td>August 1</td>
                        </tr>
                        <tr>
                            <td>ETS Date:</td>
                            <td>ETS Countdown:</td>
                        </tr>
                        <tr>
                            <td>{mockData.etsDate}</td>
                            <td>20 Days</td>
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td>
                                Marital Status:
                            </td>
                        </tr>
                        <tr>
                            <td>503-423-3212</td>
                            <td>Single</td>
                        </tr>
                        <tr>
                            <td>Deliverables</td>
                            <td>Completed Tasks</td>
                        </tr>
                        <tr>
                            <td>
                                <ul>
                                    {mockData.deliverables.map((item)=>{
                                        return <li key={item.id} >{item} </li>
                                    })}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {mockData.completedTasks.map((item)=>{
                                        return <li key={item.id} >{item} </li>
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <div className={"student-profile-img-canvas"}>
                        <img className={"student-profile-img"} src={mockData.selfieURL} width="80%" height="75%"></img>
                    </div>
            </div>
        )
    }
}

export default StudentProfile;