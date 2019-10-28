import React from "react";
import Wrapper from "../components/Wrapper";
import PostForm from "../components/PostForm";
import DonatePageTitle from "../components/DonatePageTitle";

function Donate() {
    return (
        <div>
            <DonatePageTitle />
            <Wrapper>
                <PostForm />
            </Wrapper>
        </div>
    );
}

export default Donate;