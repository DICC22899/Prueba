import React, {Component,Fragment} from 'react'
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getLeads,deleteLead} from "../../actions/leads";
import { Link } from 'react-router-dom';
import { Form } from './Form';
/* 
const PortalComponent = ({ onClose })=> {
    return ReactDOM.createPortal(
      <div className="modal" onClick={onClose}>
        <Form />
      </div>,
      // get outer DOM element
      document.getElementById("modal")
    );
  }; */



export class Leads extends Component{ 
   /*  state = {
        modalOpen: false
    }; */

    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return(
            <Fragment>
                <h2>LIDERES</h2>
                <button className="btn btn-success">Agrega Modal</button>
                {/* <button onClick={() => this.setState({ modalOpen: true })}>
                    Open modal
                </button> */}
           {/*      {this.state.modalOpen && (
                    <PortalComponent onClose={() => this.setState({ modalOpen: false })}>
                        <h1>This is modal content</h1>
                    </PortalComponent>
                )} */}
                
                <Link to="/leads/add" className="btn btn-primary">Agregar</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                    {this.props.leads.map(lead =>(
                       
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td>
                                    <button onClick={this.props.deleteLead.bind(this,lead.id)} className="btn btn-danger btn-sm">
                                        Delete
                                        {" "}
                                    </button>
                                </td>
                            </tr>
                        
                    ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps,{getLeads,deleteLead})(Leads);
