import React, { Component } from 'react';
import './Shop.css';

class Shop extends Component {

    state = {
        alert: null,
        danger: false,
        edit: false,
        list: [],
        success: false,
        value: null
    };

    componentDidMount = () => {
        // add local storage list to state list upon mount
        this.addToList();
    };

    addItem = () => {
        // create a unique id, push value to local storage list
        const id = new Date().getTime().toString();
        const newItem = { id, text: this.state.value }
        let localList = this.getLocal();
        localList.push(newItem);
        localStorage.setItem('list', JSON.stringify(localList));
        this.addToList();
        this.setState({ value: null });
        this.alert('added succesfully!', 'success');
    };

    addToList = () => {
        // get list from local storage and add to state
        let items = this.getLocal();
        if (items.length > 0) {
            this.setState({ list : items });
        };
    };

    alert = (text, color) => {
        this.setState({ 
            alert: text,
            [color]: true
        });
        // remove alert after 1.5 seconds
        setTimeout(() => {
            this.setState({ 
                alert: null,
                [color]: false
            });
        }, 1500);
    };

    clearAll = () => {
        // remove all from local storage and reset state list
        localStorage.removeItem("list");
        this.setState({ list: [] });
        this.addToList();
        this.alert('list has been emptied!', 'success');
    };

    delete = (id) => {
        // delete from local storage by id and update state list
        let items = this.getLocal();
        items = items.filter((item) => item.id !== id);
        localStorage.setItem("list", JSON.stringify(items));
        this.addToList();
        this.alert(`deleted!`, 'danger');
    };

    edit = (id) => {
        // set to edit mode, store id to be edited
        const filtered = this.state.list.filter((item) => item.id === id);
        this.setState({ 
            value: filtered[0].text,
            edit: id
        });
    };

    getLocal = () => {
        // logic to retrieve list from local storage to be called on when working with state list
        return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.value && !this.state.edit) {
            this.addItem();
        } else if (this.state.value && this.state.edit) {
            // const list = this.state.list;
            // const change = list.findIndex((item) => item.id === this.state.edit);
            // const edited = list[change].text = this.state.value;
            // this.setState({ list: edited, edit: false });
            let items = this.getLocal();
            items = items.map((item) => {
                if (item.id === this.state.edit) {
                    item.text = this.state.value;
                }
                return item;
            });
            localStorage.setItem("list", JSON.stringify(items));
            this.setState({ edit: false, value: null });
            this.addToList();
            this.alert('edited!', 'success');
        } else {
            this.alert("please type in an item!", 'danger');
        };
    };

    render() {
        return (
            <section className="shop-section-center">
                <form className="grocery-form" onSubmit={this.handleSubmit}>
                    <p className={`alert 
                                    ${this.state.danger ? "danger" : ""}
                                    ${this.state.success ? "success" : ""}
                                `}>
                        {this.state.alert}
                    </p>
                    <h3>shopping buddy</h3>
                    <div className="form-control">
                    <label className={`edit-mode ${this.state.edit ? "show-mode" : ""}`}>Edit Mode</label>
                        <input 
                            type="text" 
                            id="grocery"
                            value={this.state.value || ''}
                            onChange={this.handleChange}
                            placeholder="add items..."/>
                        <button type="submit" className="submit-btn">
                            submit
                        </button>
                    </div>
                </form>
                <div className="grocery-container">
                    <div className="grocer-list">
                        {this.state.list.map((item) => (
                            <article className="grocery-item" key={item.id}>
                                <p className="shop-title">
                                    {item.text}
                                </p>
                                <div className="shop-btn-container">
                                    <button type="button" className="edit-btn" onClick={()=>this.edit(item.id)}>
                                        <i className="fas fa-edit" />
                                    </button>
                                    <button type="button" className="delete-btn" onClick={()=>this.delete(item.id)}>
                                        <i className="fas fa-trash" />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                    {this.state.list.length > 0
                    ?
                        <button type="button" className="clear-btn" onClick={this.clearAll}>
                            clear items
                        </button>
                    :
                        null
                    }
                </div>
            </section>
        )
    }
};

export default Shop;
