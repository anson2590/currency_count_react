import React, { Component } from 'react';

class EnterAmount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: ""
        };
    }

    amountInput = event => {
        this.setState({
            amount: event.target.value
        })
    }

    render() {
        return(
            <React.Fragment>
                <div class="input-field col s3">
                    <label for="amount">Enter Amount</label>
                </div>
                <div class="input-field col s6 left">
                    <input placeholder="Amount" id="first_name" type="text" class="validate" onChange={this.amountInput}></input>
                </div>
                <div class="input-field col s12 center">
                    <button class="btn waves-effect waves-light" onClick={() => this.props.getAmount(this.state.amount)} type="submit" name="action" >Submit</button>
                </div>
            </React.Fragment>
        )
    }
}

export default EnterAmount;