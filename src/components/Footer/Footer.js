import React from 'react';
import { PhoneFill , EnvelopeFill } from 'react-bootstrap-icons';
import { ProfileDetails } from '../../Info/Info';

const Footer = () => {
    const { address , state , shortName , phone , email } = ProfileDetails;
    return (
        <div className="common-background text-white py-5">
            <div className="container text-center">
                <p>Copyright &copy; {new Date().getFullYear()} | {shortName} </p>
                <p> <PhoneFill></PhoneFill>  {phone} || <EnvelopeFill></EnvelopeFill>  {email} </p>
                <p> {address} <br/> {state} </p>
            </div>
        </div>
    );
};

export default Footer;