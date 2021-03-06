const Error404 = () => {
    return (
        <div className="error">
        <div className="preloader">
            <div className="lds-ripple">
                <div className="lds-pos"></div>
                <div className="lds-pos"></div>
            </div>
        </div>

        <div className="error-box">
            <div className="error-body text-center">
                <h1 className="error-title text-danger">404</h1>
                <h3 className="text-uppercase error-subtitle mt-4">PAGE NOT FOUND !</h3>
                <p className="text-muted m-t-30 m-b-30 mt-4">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
                <a href="/admin" className="btn btn-danger mt-3 btn-rounded waves-effect waves-light m-b-40 text-white">Back to home</a>
            </div>
        </div>
    </div>
    )
}

export default Error404
