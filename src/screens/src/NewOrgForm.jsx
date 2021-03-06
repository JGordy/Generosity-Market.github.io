import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addCause } from 'ducks/cause';
import orgFormOptions from '../config/orgFormOptions.js';
import '../styles/NewOrgForm.css';

import {
    submitOrgFormData,
} from 'services';

// Shared UI Components
import { Button } from '@jgordy24/stalls-ui';
import {
    Heading,
    ImageUploaderControlled,
    InputGroup,
} from 'components/shared';

// New Organization Form Components
import {
    VerificationInputGroup,
} from 'components/containers/NewOrgForm';

export class NewOrgForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tax_id: '',
            display_name: '',
            legal_name: '',
            heading: '', // called 'motto' on the front end
            mission: '',
            email: '',
            site_url: '',
            profile_image: '',
            profileURL: '',
            cover_image: '',
            coverURL: '',
            round_image: true,
            white_text: true,
            verifiedNonProfit: false,
        };
    }

    handleUpdateState = field => {
        return (event) => {
            if ((field === 'round_image') || (field === 'white_text')) {
                this.setState({ [field]: !this.state[field] });
            } else {
                this.setState({ [field]: event.target.value });
            }
        };
    };

    handleImageChange = (e, field, url) => {
        e.preventDefault();
        if (e.target.files) {
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onloadend = (data) => {
                /* eslint-disable-next-line no-console */
                console.log('Data', data);
                this.setState({
                    [field]: file,
                    [url]: reader.result
                });
            };
            reader.readAsDataURL(file);
        } else {
            this.setState({
                [field]: '',
                [url]: ''
            });
        }
    };

    // TODO: reverse this logic...instead of calling the service then dispatching the action.
    // TODO: We call the action and let the action call the service.
    handleSubmit = () => {
        // console.log('handle uploading-', this.state);
        delete this.state.mainImageURL;
        delete this.state.backgroundURL;

        const formData = new FormData();
        formData.append('profile_image', this.state.profile_image);
        formData.append('cover_image', this.state.cover_image);
        formData.append('bucket', 'organization');
        formData.append('state', JSON.stringify(this.state));


        submitOrgFormData(formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                // handle your response
                // TODO: cause some feedback on the screen that shows the user that an action is happening
                // TODO: the response we should call a redux action that adds the cause to the array of causes
                // TODO: then redirect to that organization page

                /* eslint-disable-next-line no-console */
                console.log('Response: ', res);
                // TODO: do something with the response...
                // this.props.addCause(res.Cause);
            }).catch(err => {
                // handle your error
                /* eslint-disable-next-line no-console */
                console.log('Error: ', err);
            });
    };

    render() {

        return (
            <div className="NewOrgForm">

                <ImageUploaderControlled
                    handleImageChange={this.handleImageChange}
                    handleUpdateState={this.handleUpdateState}
                    name={this.state.name}
                    profileURL={this.state.profileURL}
                    coverURL={this.state.coverURL}
                    round_image={this.state.round_image}
                    white_text={this.state.white_text}
                />

                <Heading text={'Select Your Organization\'s Profile & Cover Images'} />

                <InputGroup
                    state={this.state}
                    handleUpdateState={this.handleUpdateState}
                    inputOptions={orgFormOptions}
                />

                <VerificationInputGroup
                    state={this.state}
                    handleUpdateState={this.handleUpdateState}
                />

                <Button
                    bsStyle="success"
                    label="Create organization"
                    onClick={this.handleSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewOrgForm);
