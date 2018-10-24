import React from 'react'
import { initialStore } from '../store'

const isServer = typeof window === 'undefined'
const __NEXT_MOBX_STORE__ = '__NEXT_MOBX_STORE__'

function getOrCreateStore(initialState) {
    // 是否是服务端
    if (isServer) {
        return initialStore(initialState)
    }

    // 不是放到 windows上
    if (!window[__NEXT_MOBX_STORE__]) {
        window[__NEXT_MOBX_STORE__] = initialStore(initialState)
    }
    return window[__NEXT_MOBX_STORE__]
}

export default (App) => {
    return class AppWithMobx extends React.Component {
        static async getInitialProps(appContext) {
            // 初始化一个store
            const mobxStore = getOrCreateStore()

            // 放入props
            appContext.ctx.mobxStore = mobxStore

            let appProps = {}
            if (typeof App.getInitialProps === 'function') {
                appProps = await App.getInitialProps.call(App, appContext)
            }

            return {
                ...appProps,
                initialMobxState: mobxStore
            }
        }

        constructor(props) {
            super(props)
            this.mobxStore = getOrCreateStore(props.initialMobxState)
        }

        render() {
            return <App {...this.props} mobxStore={this.mobxStore} />
        }
    }
}