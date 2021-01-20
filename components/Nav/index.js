import React , { useState } from 'react'
import { Navbar, Col, Nav, NavItem,Row, Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faCode,faShapes,faPenFancy, faSuperscript } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const TooltipIcon = props => {
    const { item, id } = props;
    const [tooltipOpen, setTooltipOpen] = useState(false);
  
    const toggle = () => setTooltipOpen(!tooltipOpen);
  
    return (
        <Col className=' text-right col-12' style={{ 'float':'right' }} xs={'auto'}>
        <a href={item.path} className="text-dark" id={'Tooltip-' + id}>
                    <FontAwesomeIcon icon={item.icon} />
                </a>
                <Tooltip
          placement={'left'}
          isOpen={tooltipOpen}
          target={"Tooltip-" + id}
          toggle={toggle}
        >
          {item.tip}
        </Tooltip>
        </Col>
    );
  };
  
class Header extends React.Component {

    render() {

        return (
            <div >
            <Row className='py-5 text-dark w-100 p-3 m-0 d-none d-lg-flex' hidden style={{ fontSize: '1.5em', position:'absolute' }}>
                {
                    [
                        {
                            tip:'Retrun Home',
                            icon:faHome,
                            path:'/'
                        },
                        {
                            tip:'View My Resume',
                            icon:faFileAlt,
                            path:'/resume'
                        },
                        {
                            tip:'Browse Recent Projects',
                            icon:faShapes,
                            path:'/projects'
                        },
                        // {
                        //     tip:'Read My Blog',
                        //     icon:faPenFancy,
                        //     path:'/blog'
                        // },
                        // {
                        //     tip:'New Research',
                        //     icon:faSuperscript,
                        //     path:'/research'
                        // },
                        {
                            tip:'Github Projects',
                            icon:faGithub,
                            path:'/github'
                        },

                    ].map((tooltip, i) => {
                        return <TooltipIcon key={i} item={tooltip} id={i} />;
                      })
                }
            </Row>
            <Navbar light expand="md" className="navbar-style" style={{ flexWrap:'nowrap' }}>
                {/* <NavItem/>
                <NavItem/>
                <NavItem/> */}
                
            </Navbar>
            </div>
        );
    }
}

export default Header;