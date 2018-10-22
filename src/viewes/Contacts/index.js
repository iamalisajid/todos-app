import React, {Component} from 'react';
import ContactsList from './ContactList';
import ApiCaller from "../../utils/apiCaller";
import changeCaseObject from "change-case-object";
import Loader from "react-loader-spinner";

class Contacts extends Component {
  state = {
    contacts: [],
    loading: true
  };

  componentDidMount() {
    ApiCaller.fetchContacts().then(json =>
      this.setState({
        contacts: changeCaseObject.camelCase(json),
        loading: false
      }));
  }

  render() {

    if (this.state.loading)
      return (
        <div className="Loader">
          <div className="Loader-center">
            <Loader
              type="Triangle"
              color="#00BFFF"
              height="100"
              width="100"
            />
          </div>
        </div>
      );

    return (
      <div>
        <ContactsList
          contacts={this.state.contacts}
          onDeletion={onDeletion}
        />
      </div>
    );
  }
}


const onDeletion = (id) => {
  console.log('Deletion');
  console.info(id);
};

export default Contacts;
