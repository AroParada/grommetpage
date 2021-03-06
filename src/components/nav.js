import React from "react";
import { Nav, Anchor, ResponsiveContext, Header, Box, Menu } from "grommet";
import { Mail, Github, Linkedin, Document } from "grommet-icons";

const Mynav = () => {
  return (
    <Header background="brand" pad="x-small">
      <Box direction="row" align="center" gap="small">
        <Anchor
          color="white"
          alignSelf="center"
          size="xlarge"
          label="A"
          margin="medium"
        ></Anchor>
      </Box>
      <ResponsiveContext.Consumer>
        {(responsive) =>
          responsive === "small" ? (
            <Menu
              size="medium"
              dropBackground="brand"
              justifyContent="center"
              items={[
                // { icon: <Anchor href="/grommetpage/#/home" color="white" icon={<Home />} />, onClick: () => {} },
                {
                  icon: (
                    <Anchor
                      href="https://github.com/AroParada"
                      target="_blank"
                      rel="noopener"
                      color="white"
                      icon={<Github />}
                    />
                  ),
                  onClick: () => {},
                },
                {
                  icon: (
                    <Anchor
                      href="https://docs.google.com/document/d/19dAEEabihDZaa6nlFYliqCUL_HK2jThcuAPnxInU194/edit?usp=sharing"
                      target="_blank"
                      rel="noopener"
                      color="white"
                      icon={<Document />}
                    />
                  ),
                  onClick: () => {},
                },
                {
                  icon: (
                    <Anchor
                      href="mailto:haroldparada20@gmail.com"
                      color="white"
                      icon={<Mail />}
                    />
                  ),
                  onClick: () => {},
                },
              ]}
            />
          ) : (
            <Nav direction="row" background="brand" pad="medium">
              {/* <Anchor href="/grommetpage/#/home" color="white" icon={<Home />} hoverIndicator />  */}
              <Anchor
                href="https://github.com/AroParada"
                target="_blank"
                rel="noopener"
                color="white"
                icon={<Github />}
                hoverIndicator
              />
              <Anchor
                href="https://www.linkedin.com/in/aroparada/"
                target="_blank"
                rel="noopener"
                color="white"
                icon={<Linkedin />}
                hoverIndicator
              />
              <Anchor
                href="mailto:haroldparada20@gmail.com"
                color="white"
                icon={<Mail />}
                hoverIndicator
              />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
};
export default Mynav;
