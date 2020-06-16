import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> HOC </h1>
        <p> this is HOC component.{props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div> 
            {props.isAdmin && <h1> This is Private Info. Please Donot Share!</h1>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ): (
                <p> Please Authenticate First</p>
            )}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is details." />,document.querySelector("#app"))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is details." />,document.querySelector("#app"))
