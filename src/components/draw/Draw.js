
import React, { PureComponent } from 'react'
import { Button, Drawer, Toolbar } from 'react-md'
import { connect } from 'react-redux'

import { toggleTopbar } from "modules/app/actions"
import NavItemLink from './NavItemLink'
import * as routes from "libs/constants/routes"

const navItems = [{
    label: 'Dashboard',
    to: `${routes.Container + routes.Dashboard}`,
    icon: 'dashboard'
},
{
    label: 'Search',
    to: `${routes.Container + routes.Search}`,
    icon: 'search'
},
{
    label: 'Aquarium',
    to: `${routes.Container + routes.Aquarium}`,
    icon: 'dashboard'
},
{
    label: 'Instructor',
    to: `${routes.Container + routes.Instructor}`,
    icon: 'dashboard'
},
{
    label: 'Tuto',
    to: `${routes.Container + routes.Tuto}`,
    icon: 'dashboard'
},
]
@connect(({ app }) => ({
    sideBarIsTrue: app.topbarCollapsed
}), { toggleTopbar })
export default class SimpleDrawer extends PureComponent {
    state = { visible: false, position: 'left' };
    openDrawerRight = () => {
        this.setState({ visible: true, position: 'right' })
    };

    closeDrawer = () => {
        this.setState({ visible: false })
    };

    handleVisibility = (visible) => {
        this.setState({ visible })
    };
    componentDidMount() {
        const { windowWidth, toggleTopbar } = this.props
        if (windowWidth !== 0 && windowWidth <= 700) {
            toggleTopbar(true)
        }
    }
    onToggleClick = (collapsed) => {
        const { toggleTopbar } = this.props
        toggleTopbar(collapsed)
    };
    renderTopBar = () => {
        const { toggleTopbar, sideBarIsTrue } = this.props
        return (
            <div className="topBar">
                <Button className="menuButton" icon onClick={this.openDrawerRight}>menu</Button>
                <div className="topBar-logo"><span>ada.</span></div>
                <Button className="menuButton" icon onClick={() => toggleTopbar(sideBarIsTrue)}>menu</Button>
            </div>
        )
    }
    render() {
        const { visible, position } = this.state
        const isLeft = position === 'left'

        const closeBtn = <Button icon onClick={this.closeDrawer}>{isLeft ? 'arrow_back' : 'close'}</Button>
        return (
            <div>

                {this.renderTopBar()}
                <Drawer
                    id="simple-drawer-example"
                    type={Drawer.DrawerTypes.TEMPORARY}
                    visible={visible}
                    position={position}
                    onVisibilityChange={this.handleVisibility}
                    navItems={navItems.map(props => <NavItemLink {...props} key={props.to} />)}
                    header={(
                        <Toolbar
                            nav={isLeft ? null : closeBtn}
                            actions={isLeft ? closeBtn : null}
                            className="md-divider-border md-divider-border--bottom"
                        />
                    )}
                />
            </div>
        )
    }
}