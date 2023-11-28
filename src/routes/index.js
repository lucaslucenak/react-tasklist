import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
import { Tasklist } from "../pages/Tasklist/Tasklist";

// const Private = ({ Item }) => {
//     const signed = false;
//     return signed > 0 ? <Item /> : <SignIn />;
// } 

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    {/* <Route exact path="/tasklist" element={<Private Item={Tasklist} />} /> */}
                    <Route path="/" element={<SignIn />} />
                    <Route exact path="/signUp" element={<SignUp />} />
                    <Route exact path="/tasklist" element={<Tasklist />} />
                    <Route path="*" element={<SignIn />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;