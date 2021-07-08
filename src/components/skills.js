import React from 'react';
import { Anchor, Button, Tip, grommet, Grommet} from 'grommet';
import {Js, Reactjs, Node, Npm, Html5, Css3, Wordpress, Gremlin, Heroku} from 'grommet-icons'

const Skills = () => {

    return(
    <Grommet background="clear" theme={grommet}>
        <Tip content="html5">
            <Anchor color="neutral-4" icon={<Html5  size='large' />} hoverIndicator />
        </Tip>
        <Tip content="css3">
            <Anchor color="#0daeff" icon={<Css3  size='large' />} hoverIndicator />
        </Tip>
        <Tip content="javaScript">
            <Anchor color="plain" icon={<Js  size='large' />} hoverIndicator />
        </Tip>
        <Tip content="reactJs">
            <Anchor color="plain" icon={<Reactjs  size='large' />} hoverIndicator />
        </Tip>
        <Tip content="nodeJs">
            <Anchor color="plain" icon={<Node  size='large' />} hoverIndicator />
        </Tip>
        <Tip content="npm">
            <Anchor color="plain" icon={<Npm  size='large' />} hoverIndicator />
        </Tip>
        <Tip content="wordpress">
            <Anchor color="plain" icon={<Wordpress  size='large' />} hoverIndicator />
        </Tip>
        <Tip content="grommet">
            <Anchor color="purple" icon={<Gremlin  size='large' />} hoverIndicator />
        </Tip>
        <Tip content="heroku">
            <Anchor color="plain" icon={<Heroku  size='large' />} hoverIndicator />
        </Tip>
    </Grommet>
    

    )
}

export default Skills