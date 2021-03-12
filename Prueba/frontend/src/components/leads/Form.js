import React, {Component} from'react'

export class Form extends Component{
    state ={
        name: '',
        email: '',
        message:''
    }

    onChange = e => this.setState({[e.target.name]:e.target.value});

    onSubmit = e =>{
        e.preventDefault();
        console.log("Agregado");
    }

    render() {
        const{name,email,message}=this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>AGREGAR</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label> EMAIL</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label> Mensaje</label>
                        <textarea
                            type="text"
                            className="form-control"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Agregar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form