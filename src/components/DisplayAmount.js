import React, {Component} from 'react';

class DisplayAmount extends Component {
    render() {
        return(
            <div>
                <table class="centered col s8 center">
                    <thead>
                    <tr>
                        <th>Rupees</th>
                        <th>Total Notes</th>
                    </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>2000</td>
                            <td>{this.props.twoThousand}</td>
                        </tr>
                        <tr>
                            <td>500</td>
                            <td>{this.props.fiveHundred}</td>
                        </tr>
                        <tr>
                            <td>100</td>
                            <td>{this.props.oneHundred}</td>
                        </tr>
                        <tr>
                            <td>50</td>
                            <td>{this.props.fifty}</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>{this.props.ten}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>{this.props.five}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{this.props.two}</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>{this.props.one}</td>
                        </tr>
                        <tr>
                            <td>Total Notes</td>
                            <td>{this.props.total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DisplayAmount;