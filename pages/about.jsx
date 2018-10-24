


import React from 'react'
import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'
@inject('store') @observer
class About extends React.Component {
    constructor(props) {
        super(props)
    }
    click = () => {
        let { change } = this.props.store

        change(this.props.store.a + 1)
        this.props.store.list.addList(this.props.store.a + 1)
    }
    render() {
        // console.log(toJS(this.props.store.list.))
        return (
            <div>
                <p>{this.props.store.a}</p>
                <button onClick={this.click}>加</button>
                <ul>
                    {
                        this.props.store.list.list.map(item => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
            </div>

        )
    }

}

export default About