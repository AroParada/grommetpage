import React from 'react';
import {grommet, Grommet} from 'grommet';
import {Js, Reactjs, Node, Npm, Html5} from 'grommet-icons'

const Skills = () => {

    return(
    <Grommet background="clear" theme={grommet}>
        <Js color='plain' size='large' />
        <Reactjs color='plain' size='large'/>
        <Node color='plain' size='large'/>
        <Npm color='plain' size='large'/>
        <Html5 color='plain' size='large'/>

    </Grommet>

    )
}

export default Skills