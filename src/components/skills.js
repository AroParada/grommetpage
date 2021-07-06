import React from 'react';
import {grommet, Grommet} from 'grommet';
import {Js, Reactjs, Node, Npm, Html5, Css3, Wordpress, Gremlin, Heroku} from 'grommet-icons'

const Skills = () => {

    return(
    <Grommet background="clear" theme={grommet}>
        <Html5 color='plain' size='large'/>
        <Css3 color='#0daeff' size='large'/>
        <Js color='plain' size='large' />
        <Reactjs color='plain' size='large'/>
        <Node color='plain' size='large'/>
        <Npm color='plain' size='large'/>
        <Wordpress color='plain' size='large'/>
        <Gremlin color='purple' size='large'/>
        <Heroku color='plain' size='large'/>
    </Grommet>

    )
}

export default Skills