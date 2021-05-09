import React from 'react';
import { SidebarContainer , Icon , CloseIcon , SidebarWrapper, SidebarMenu , SidebarLink , SideBtnWrap , SidebarRoute } from './SidebarElements';

const Sidebar = ({  isOpen ,toggle }) => {
    return (
        <SidebarContainer isOpen = { isOpen } onClick = { toggle }>
            <Icon onClick = { toggle }>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick = { toggle }>
                        Home
                    </SidebarLink>
                    <SidebarLink to="services" onClick = { toggle }>
                        Our Services
                    </SidebarLink>
                    <SidebarLink to="about" onClick = { toggle }>
                        About Us
                    </SidebarLink>
                    <SidebarLink to="team" onClick = { toggle }>
                        Team
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
