import React, { Component } from 'react';
import EnterAmount from './EnterAmount';
import DisplayAmount from './DisplayAmount';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invalid: false,
            amount: 0,
            twoThousand: 0,
            fiveHundred: 0,
            oneHundred: 0,
            fifty: 0,
            ten: 0,
            five: 0,
            two: 0,
            one: 0,
            total: 0
        }
        this.getAmount = this.getAmount.bind(this);
    }

    getAmount(amt) {
        let twothosandresult = 0;
        let fivehundredresult = 0;
        let onehundredresult = 0;
        let fiftyresult = 0;
        let tenresult = 0;
        let fiveresult = 0;
        let tworesult = 0;
        let oneresult = 0;
        let result = 0;
        let sum = 0;
        result = amt

        if(result > 0){
            if ((result/2000) > 0) {
                twothosandresult = Math.floor(result/2000);
                const mul = 2000 * twothosandresult;
                result = result - mul;
            } 

            if ((result/500) > 0) {
                fivehundredresult = Math.floor(result/500);
                const mul = 500 * fivehundredresult;
                result = result - mul;
            }

            if ((result/100) > 0) {
                onehundredresult = Math.floor(result/100);
                const mul = 100 * onehundredresult;
                result = result - mul;
            }

            if ((result/50) > 0) {
                fiftyresult = Math.floor(result/50);
                const mul = 50 * fiftyresult;
                result = result - mul;
            }

            if ((result/10) > 0) {
                tenresult = Math.floor(result/10);
                const mul = 10 * tenresult;
                result = result - mul;
            }

            if ((result/5) > 0) {
                fiveresult = Math.floor(result/5);
                const mul = 5 * fiveresult;
                result = result - mul;
            }

            if ((result/2) > 0) {
                tworesult = Math.floor(result/2);
                const mul = 2 * tworesult;
                result = result - mul;
            }

            if ((result/1) > 0) {
                oneresult = Math.floor(result/1);
            }
            this.setState({
                invalid: false
            })
        } else {
            this.setState({
                invalid: true
            })
        }

        this.setState({
            twoThousand: twothosandresult,
            fiveHundred: fivehundredresult,
            oneHundred: onehundredresult,
            fifty: fiftyresult,
            ten: tenresult,
            five: fiveresult,
            two: tworesult,
            one: oneresult,
            total: twothosandresult + fivehundredresult + onehundredresult + fiftyresult + tenresult + fiveresult + tworesult + oneresult
        });
    }

    render() {
        let demo;
        let error;

        if(this.state.invalid == true) {
            error = (
                <div class="col s12 left red">
                    <h6>Enter valid data</h6>
                </div>
            )
        }

        demo = (
            <div>
                <h3 class="card-panel center teal lighten-2">Currency Notes Calculator</h3>
                <div class="row">
                    {error}
                    <div class="col s6 center">
                        <EnterAmount getAmount = {this.getAmount} />
                    </div>
                    <div class="col s6 center">
                        <DisplayAmount twoThousand={this.state.twoThousand} 
                        fiveHundred={this.state.fiveHundred} 
                        oneHundred={this.state.oneHundred}
                        fifty={this.state.fifty}
                        ten={this.state.ten}
                        five={this.state.five}
                        two={this.state.two}
                        one={this.state.one}
                        total={this.state.total}/>
                    </div>

                </div>
            </div>    
        )
        return(
            <div>
                {demo} 
            </div>
        )
    }
}

export default Main;