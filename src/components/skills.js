import React from 'react';
import { Text, WorldMap, Heading, Grommet} from 'grommet';
import { LocationPin, Js, Reactjs, Node, Npm, Html5, Css3, Wordpress, Gremlin, Heroku, Mysql, PiedPiper} from 'grommet-icons'
import AWS from 'react-aws-icons/dist/aws/logo/AWS';

const Skills = () => {

    return(
    <Grommet justify="center"
    align="center"
    alignContent="center" background="clear">
        <Heading size="small" margin="medium">Programming Languages & Tools</Heading>
        <Html5 color='neutral-4' size='large'/>
        <Css3 color='#0daeff' size='large'/>
        <Js color='plain' size='large' />
        <Reactjs color='plain' size='large'/>
        <Node color='plain' size='large'/>
        <Npm color='plain' size='large'/>
        <AWS size={53} />
        <Wordpress color='plain' size='large'/>
        <Gremlin color='purple' size='large'/>
        <Heroku color='plain' size='large'/>
        <Mysql color='plain' size='large'/>
        <PiedPiper color='plain' size='large'/>
          <div>
            <LocationPin color="red"/>
            <Text alignSelf="end">Currently located in Raleigh, NC</Text>
            <WorldMap
               height="350"
               color="dark-6"
               continents={[
                 {
                   name: 'North America',
                   color: 'neutral-1',
                   onClick: (name) => {},
                 },
               ]}
               onSelectPlace={(lat, lon) => {}}
               places={[
                 {
                   name: 'Raleigh',
                   location: [35.884766, -78.625053],
                   color: 'accent-2',
                   onClick: (name) => {},
                 },
               ]}
               selectColor="accent-2"
             />
             </div>
    </Grommet>
    )
}

export default Skills